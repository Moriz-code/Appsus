import utils from '../../services-general/utils.js';
export default class Note {
  constructor(type = 'NoteTxt', isPinned = false, info = '' , id = utils.getRandomID(), isEdit = false) {
      this.type = type,
      this.isPinned = isPinned,
      this.id = id,
      this.info = {txt: info},
      this.isEdit = false
  }
}

