import AddNote from "./AddNote.js"
import storageService from "../../services-general/storageService.js";

export default {
  getNotes,
  saveNote,
  createNotes
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
  const note = new AddNote(noteDetails.type, noteDetails.info);
  gNotes = [...gNotes, note]
  storageService.store('notes', gNotes)
  return Promise.resolve(note)
}


function getNoteById(noteId) {
  const note = gNotes.find(note => note.id === noteId)
 return Promise.resolve(noteId)
}

