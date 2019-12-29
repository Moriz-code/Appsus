import AddNote from "./AddNote.js"
import storageService from "../../services-general/storageService.js";

export default {
  getNotes,
  saveNote,
  createNotes,
  deleteNote,
  getNoteById,
  editNote,
}

 let gNotes = [AddNote.createNote('NoteTxt', false, 'Add your first note...')];

function createNotes() {
  storageService.store('createNotes', gNotes)
  return gNotes
}


function getNotes(filterBy) { 
  if (filterBy) return Promise.resolve(gNotes.filter(note =>{
    return note.info.includes(filterBy)
  }))
  else{
    return Promise.resolve([...gNotes])
  }
  
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
  console.log('updatedNote' , updatedNote);
  
  let noteIdx = gNotes.findIndex(note => note.id === updatedNote.id)
  let notes = [...gNotes]
  notes[noteIdx] = updatedNote
  gNotes = notes;
  storageService.store('notes', gNotes)
  console.log('gNotes' , gNotes);
  return Promise.resolve(editNote)
}

