import utils from "../../services-general/utils.js"

export default class Email {
    constructor(subject, body, isRead, sentAt) {
        this.id= utils.getRandomID(),
        this.subject = subject,
        this.body = body,
        this.isRead = isRead,
        this.sentAt = sentAt
    }
}
