import utils from '../../services-general/utils.js';

// export default {
//   createNote
// }

// function createNote(type = 'NoteTxt', isPinned = false, info = '', id = utils.getRandomID(), style = {bccolor: ''}, isOnEdit = false) {
//   let note = {
//     type,
//     isPinned,
//     id,
//     info,
//     style,
//     isOnEdit
//   }
//   return note
// }


export default class Note {
  constructor(type, isPinned = false, info = '', style = {bccolor: ''}, isOnEdit = false){
    this.type = type,
    this.isPinned - isPinned,
    this.id=utils.getRandomID();
    this.info = info,
    this.style = style,
    this.isOnEdit = isOnEdit

  }
}



// selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: null, style: { bccolor: 'black' } },

