import utils from '../../services-general/utils.js';

export default {
  createNote
}

function createNote(type = 'NoteTxt', isPinned = false, info = '', id = utils.getRandomID(), style = {bccolor: ''}) {
  let note = {
    type,
    isPinned,
    id,
    info,
    style
  }
  return note
}



// selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: null, style: { bccolor: 'black' } },
