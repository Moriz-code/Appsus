import Note from "./AddNote.js"
import storageService from "../../services-general/storageService.js";

export default {
  getNotes,
  saveNote,
  createNotes,
  deleteNote,
  getNoteById,
  editNote,
  createToDo,
  CopyToClipboard,
  shiftNote, 
  getIndexNoteById

}

 let gNotes = storageService.load('notes') || createNotes();


function createNotes() {
  const gNotes = [new Note('NoteTxt', false, 'Find a professional dish washer', {bccolor: '#FF8B94'} , false),
  new Note('NoteVideo', false, 'https://www.youtube.com/watch?v=m_-Qtz70_z4', {bccolor: '#7AB5B5'} , false),
  new Note('NoteImg', false, 'https://media.viralemon.com/sites/default/files/inline-images/arubabeach.jpg', {bccolor: '#fbbd08'} , false),
  new Note('NoteVideo', false, 'https://www.youtube.com/watch?v=ianBdZbU_jk', {bccolor: '#FFD3B6'} , false),
  new Note('NoteImg', false, 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/80885391_10220003557495040_895155636428341248_o.jpg?_nc_cat=105&_nc_ohc=4I1MODXV7HIAQkp9Si8IW3NfptLnwM_obXS8dw64DJUihhwf8E2SYKhNA&_nc_ht=scontent.ftlv2-1.fna&oh=27ea93e9552a66d0cf3fb7969f827bc2&oe=5EA32A39', {bccolor: '#fbbd08'} , false),
  new Note('NoteTxt', false, 'tell mom and dad i wont come to friday dinner this weekend (and pray for good)', {bccolor: '#FF8B94'} , false),
  new Note('NoteVideo', false, 'https://www.youtube.com/watch?v=Vn8phH0k5HI', {bccolor: '#BA89DB'} , false), 
  new Note('NoteImg', false, 'https://image.jimcdn.com/app/cms/image/transf/none/path/s9524a0afdc5b40b0/image/ibbafdc07d1bcd659/version/1482337241/why-you-should-travel-to-the-philippines-photo-kids-in-siargao-philippines-sabrina-iovino-via-just1wayticket.jpg', {bccolor: '#BA89DB'} , false), 
]
  
  storageService.store('notes', gNotes)
  return gNotes
}


function getNotes(filterBy) {
  // let gNotes = storageService.load('notes') || createNotes();
  if (filterBy) return Promise.resolve(gNotes.filter(note =>{
    return note.info.includes(filterBy)
  }))
  else{
    return Promise.resolve([...gNotes])
  }
  
}


function saveNote(noteDetails) {
  let note = new Note(noteDetails.type, noteDetails.isPinned, noteDetails.info ,noteDetails.style, noteDetails.isEdit)
  gNotes = [...gNotes, note]
  storageService.store('notes', gNotes)
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

function getIndexNoteById(currentnote){
  return  gNotes.findIndex(note => note.id === currentnote.id)
}

function editNote(updatedNote) {
  let noteIdx = getIndexNoteById(updatedNote);
  let notes = [...gNotes]
  notes[noteIdx] = updatedNote
  gNotes = notes;
  storageService.store('notes', gNotes)
  return Promise.resolve(editNote)
}

function createToDo(list){
  var checkboxs = list.split(',');
  console.log(checkboxs);
}


function CopyToClipboard(info){
  var copyText = info
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
 return alert("Copied the text: " + copyText.value);
}


function shiftNote(note){
  
  deleteNote(note)
  let notes = [...gNotes]
  notes.unshift(note)
  gNotes = notes;
  storageService.store('notes', gNotes)
  return Promise.resolve(true)

}


