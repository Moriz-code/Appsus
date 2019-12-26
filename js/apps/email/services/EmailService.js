import Email from "./Email.js";
import storgeService from '../../services-general/storageService.js'
import storageService from "../../services-general/storageService.js";

export default {
    getEmails,
    getEmailById,
    ChangeBcgColor,
    deleteEmail

}



let gEmail = storageService.load('emails') || createEmails();


    function createEmails() {
        const emails = [new Email('Tel Aviv has some last-minute deals!', 'Recommended destinations- We have gathered the best deals in our most popular destinations', false, '1551133930594'),
        new Email('Rav-Kav Online password reset request', 'We received a request to reset the password for this email address.To complete the action, type the verification code into the page, or follow the link below.If you did not request to reset your Rav-Kav Online password, please ignore this message.', false, '1551136630594'),
        new Email('📢 UA FAMILY: Get $30 Off Orders $100+', '25% OFF the best fleece in the game give the gift warmth ', true, '15523133930594'),
        new Email('Student ID', 'Verify your student status to access the Apple Music Student Membership', true, '15523133930594'),
        new Email('Learn How to Create Your Own Video Game‏', 'Whether you’re starting a career as a game developer or just want a fun way to learn the fundamentals of JavaScript — we have a new Skill Path for you.', false, '15523133930594'),
        new Email('What design tools do you use?‏', 'Hello Coral,I have another great tip for you.Did you know that you can sync designs without ever leaving your favorite design tool?It can be Sketch, Adobe XD, Photoshop or Illustrator.Yep, that’s right - we support them all.Just download and install Avocode desktop app, and our plugins will be automatically added to your favorite design tools.', false, '15523133930594')];
        storageService.store('emails', emails)
        return emails;
    }


// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }


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


