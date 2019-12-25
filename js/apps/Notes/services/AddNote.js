import utils from '../../services-general/utils.js';

export default class AddNote {
  static nextId = 1;
  constructor(type = 'NoteTxt', info = {}) {
      this.type = type,
      this.isPinned = false,
      this.id = utils.getRandomID(),
      this.info = info
  }
}


