import utils from "../../services-general/utils.js"

export default class Email {
    constructor(from, to, subject, body, isRead, sentAt, isStar,isDelete) {
        this.id = utils.getRandomID()
        this.from = from
        this.to = to
        this.subject = subject
        this.body = body
        this.isRead = isRead
        this.sentAt = sentAt
        this.isStar = isStar
        this.isDelete = isDelete
    }
}


