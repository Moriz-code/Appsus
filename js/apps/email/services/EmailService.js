import Email from "./Email.js";
import storageService from "../../services-general/storageService.js";

export default {
    getEmails,
    getEmailById,
    ChangeBcgColor,
    deleteEmail,
    starEmail,
    saveEmail
}



let gEmail = storageService.load('emails') || createEmails();


function createEmails() {
    const emails = [new Email('Booking', 'Coral Solomon', 'Tel Aviv has some last-minute deals!', 'Recommended destinations- We have gathered the best deals in our most popular destinations', false, '1551133930594', false),
    new Email('Eged', 'Coral Solomon', 'Rav-Kav Online password reset request', 'We received a request to reset the password for this email address.To complete the action, type the verification code into the page, or follow the link below.If you did not request to reset your Rav-Kav Online password, please ignore this message.', false, '1551136630594', false),
    new Email('FreeIT', 'Coral Solomon', '📢 UA FAMILY: Get $30 Off Orders $100+', '25% OFF the best fleece in the game give the gift warmth ', true, '15523133930594', false),
    new Email('University', 'Coral Solomon', 'Student ID', 'Verify your student status to access the Apple Music Student Membership', true, '15523133930594', false),
    new Email('Gameinr', 'Coral Solomon', 'Learn How to Create Your Own Video Game‏', 'Whether you’re starting a career as a game developer or just want a fun way to learn the fundamentals of JavaScript — we have a new Skill Path for you.', false, '15523133930594', false),
    new Email('Tooliron', 'Coral Solomon', 'What design tools do you use?‏', 'Hello Coral,I have another great tip for you.Did you know that you can sync designs without ever leaving your favorite design tool?It can be Sketch, Adobe XD, Photoshop or Illustrator.Yep, that’s right - we support them all.Just download and install Avocode desktop app, and our plugins will be automatically added to your favorite design tools.', false, '15523133930594', false)];
    storageService.store('emails', emails)
    return emails;
}

function getEmails() {
    // return [...gEmail]
    return Promise.resolve([...gEmail]);
}

function getEmailById(emailId) {
    const email = gEmail.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function ChangeBcgColor(emailId) {
    getEmailById(emailId).then(email => {
        email.isRead = !email.isRead
    })
}

function deleteEmail(emailId) {
    gEmail = gEmail.filter((email) => email.id !== emailId)
    storageService.store('emails', gEmail)
    return Promise.resolve(true)
}

function starEmail(emailId) {
    getEmailById(emailId).then(email => {
        email.isStar = !email.isStar
    })
    // return Promise.resolve(true)
}


function saveEmail(EmailDetails) {
    const email = new Email('Coral Solomon',EmailDetails.to, EmailDetails.subject,EmailDetails.body,true,Date.now(),false)
    gEmail = [...gEmail, email];
    storageService.store('emails', gEmail)
    return Promise.resolve(email)
}


// this.id = utils.getRandomID()
// this.from = from
// this.to = to
// this.subject = subject
// this.body = body
// this.isRead = isRead
// this.sentAt = sentAt
// this.isStar = isStar

