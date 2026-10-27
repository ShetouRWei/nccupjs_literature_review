const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const app = fs.readFileSync('app.js', 'utf8');
const article = fs.readFileSync('article.js', 'utf8');
const uploads = [];
let remote = [
  { book_id: 'creswell', chapter_id: 1, note: 'Existing book note', updated_at: '2026-10-26T00:00:00Z' },
  { book_id: 'thesis-whisperer-prompt', chapter_id: 1, note: 'Article note', updated_at: '2026-10-26T00:00:00Z' },
];
const context = vm.createContext({
  notes: {}, noteTimes: {}, cloudUser: { id: 'test-user' }, cloudSyncing: false,
  cloud: { from: () => ({ select: () => ({ in: async () => ({ data: remote, error: null }) }) }) },
  updateAuthUI() {}, setCloudStatus() {}, showToast() {}, persistNotes() {}, refreshNotesOnScreen() {},
  async upsertCloudNotes(rows) { uploads.push(...rows); return { error: null }; },
});
vm.runInContext(article + '\n' + app.slice(0, app.indexOf('const STORAGE =')) + '\n' +
  app.slice(app.indexOf('async function syncAllNotes()'), app.indexOf('async function initializeCloud()')), context);
(async () => {
  await context.syncAllNotes();
  assert.equal(context.notes[1], 'Existing book note');
  assert.equal(context.notes['thesis-whisperer-prompt:1'], 'Article note');
  assert.equal(uploads.length, 0);
  await context.syncNoteToCloud('thesis-whisperer-prompt:1', 'New article note', '2026-10-27T00:00:00Z');
  assert.equal(uploads[0].book_id, 'thesis-whisperer-prompt');
  assert.equal(uploads[0].chapter_id, 1);
  await context.syncNoteToCloud(1, 'New book note', '2026-10-27T00:00:00Z');
  assert.equal(uploads[1].book_id, 'creswell');
  assert.equal(uploads[1].chapter_id, 1);
  remote = [];
  uploads.length = 0;
  await context.syncAllNotes();
  assert.equal(uploads.length, 2);
  assert.equal(new Set(uploads.map(row => row.book_id)).size, 2);
  console.log('PASS: remote merge, local upload and individual saves keep book/article notes separate.');
})().catch(error => { console.error(error); process.exitCode = 1; });
