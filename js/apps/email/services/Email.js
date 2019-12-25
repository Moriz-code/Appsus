export default class Email {
    constructor(subject, body, isRead, sentAt) {
        this.subject = subject;
        this.body = body;
        this.isRead = isRead;
        this.sentAt = sentAt;
    }
}
