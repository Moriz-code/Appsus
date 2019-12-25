import AddNote from "./AddNote.js"
import storageService from "../../services-general/storageService.js";


export default {
  getNotes,
  saveNote,
  createNotes
}


let gNotes = createNotes();

function createNotes() {
  const notes = [new AddNote('NoteTxt', {txt: 'first Note!' }) , new AddNote('NoteTxt', {txt: 'sec Note!' })];
  storageService.store('notes', notes)
  return notes
}



function getNotes() {
  return Promise.resolve([...gNotes]);
}


function saveNote(noteDetails) {
  const note = new Note[noteDetails.type, noteDetails, info],
  gNotes = [...gNotes, note]
  storageService.store('notes', gNotes)
  return Promise.resolve(note)
}