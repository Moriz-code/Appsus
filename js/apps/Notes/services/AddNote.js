import utils from '../../services-general/utils.js';

export default {
  createNote
}

function createNote(type = 'NoteTxt', isPinned = false, info = '', id = utils.getRandomID(), isEdit = false) {
  let note = {
    type,
    isPinned,
    id,
    info,
    isEdit
  }
  return note
}




