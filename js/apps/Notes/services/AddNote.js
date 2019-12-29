import utils from '../../services-general/utils.js';

export default {
  createNote
}

function createNote(type = 'NoteTxt', isPinned = false, info = '', id = utils.getRandomID(), style = {bccolor: ''}, isOnEdit = false) {
  let note = {
    type,
    isPinned,
    id,
    info,
    style,
    isOnEdit
  }
  return note
}



// selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: null, style: { bccolor: 'black' } },
