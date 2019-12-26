import AddNote from "./AddNote.js"
import storageService from "../../services-general/storageService.js";

export default {
  getNotes,
  saveNote,
  createNotes,
  deleteNote,
  getNoteById
}

let gNotes = storageService.load('notes') || createNotes();

function createNotes() {
  const notes = [new AddNote('NoteTxt'), new AddNote('NoteTxt')];
  storageService.store('notes', notes)
  return notes
}


function getNotes() {
  return Promise.resolve([...gNotes]);
}


function saveNote(noteDetails) {
  let note;
  if (!noteDetails.id) { note = new AddNote; }
 
  note = new AddNote(noteDetails.type, noteDetails.isPinned, noteDetails.info, noteDetails.id, noteDetails.isEdit)
  gNotes = [...gNotes, note]
  storageService.store('notes', gNotes)
  console.log('gNotes', gNotes)
  return Promise.resolve(note)
}


function getNoteById(noteId) {
  const note = gNotes.find(note => note.id === noteId)
 return Promise.resolve(note)
}

function deleteNote(note) {
  gNotes = gNotes.filter((currNote) => currNote.id !== note.id)
  storageService.store('notes', gNotes)
  return Promise.resolve(true)
}

