import AddNote from "./AddNote.js"
import storageService from "../../services-general/storageService.js";

export default {
  getNotes,
  saveNote,
  createNotes,
  deleteNote,
  getNoteById,
  editNote
}

 let gNotes = [];

function createNotes() {
  // gNotes = storageService.load('notes') || [AddNote.createNote() , AddNote.createNote()]
  storageService.store('createNotes', gNotes)
  return gNotes
}


function getNotes() { 
  if (!gNotes) createNotes();
  return Promise.resolve([...gNotes])
}


function saveNote(noteDetails) {
  let note = AddNote.createNote(noteDetails.type, noteDetails.isPinned, noteDetails.info, noteDetails.isEdit)
  gNotes = [...gNotes, note]
  storageService.store('saveNote', gNotes)
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

function editNote(updatedNote) {
  let editNote = gNotes.find(note => note.id === updatedNote.id);
  editNote = { ...editNote, updatedNote}

  gNotes = gNotes.map(note => note.id === updatedNote.id ? editNote : note)
  storageService.store('notes', gNotes)
  return Promise.resolve(editNote)
}

