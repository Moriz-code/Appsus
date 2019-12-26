import utils from '../../services-general/utils.js';
export default class Note {
  constructor(type = 'NoteTxt', info = '') {
    this.type = type,
      this.isPinned = false,
      this.id = utils.getRandomID(),
      this.info = {txt: info}
  }
}

