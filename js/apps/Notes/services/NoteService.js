import AddNote from "./AddNote.js"
import storageService from "../../services-general/storageService.js";


export default {
  getNotes,
  saveNote,
  createNotes
}



let gNotes = createNotes();

function createNotes() {
  const defaultNotes = [new AddNote('NoteTxt', { txt: 'first Note!' }), new AddNote('NoteTxt', { txt: 'second note' })]
  storageService.store('notes', defaultNotes)
  return defaultNotes
}


function getNotes() {
  const notes = [...gNotes]
  return Promise.resolve(notes)
}


function saveNote(noteDetails) {
  const note = new Note(noteDetails.type, noteDetails, info)
  gNotes = [...gNotes, note]
  storageService.store('pets', gNotes)
  return Promise.resolve(note)
}