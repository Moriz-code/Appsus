import utils from "../../../../services-general/utils.js"

export default class Email {
    // static emailId = utils.getRandomID();
    constructor(subject, body, isRead, sentAt) {
        // id = emailId;
        this.subject = subject;
        this.body = body;
        this.isRead = isRead;
        this.sentAt = sentAt;
    }
}
