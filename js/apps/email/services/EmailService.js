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
    const emails = [new Email('Booking', 'Coral Solomon', 'Tel Aviv has some last-minute deals!', 'Recommended destinations- We have gathered the best deals in our most popular destinations', false, '27-12-2019', false, false),
    new Email('Eged', 'Coral Solomon', 'Rav-Kav Online password reset request', 'We received a request to reset the password for this email address.To complete the action, type the verification code into the page, or follow the link below.If you did not request to reset your Rav-Kav Online password, please ignore this message.', false, '27-12-2019', false, false),
    new Email('FreeIT', 'Coral Solomon', '📢 UA FAMILY: Get $30 Off Orders $100+', '25% OFF the best fleece in the game give the gift warmth ', true, '27-12-2019', false, false),
    new Email('University', 'Coral Solomon', 'Student ID', 'Verify your student status to access the Apple Music Student Membership', true, '27-12-2019', false, false),
    new Email('Gameinr', 'Coral Solomon', 'Learn How to Create Your Own Video Game‏', 'Whether you’re starting a career as a game developer or just want a fun way to learn the fundamentals of JavaScript — we have a new Skill Path for you.', false, '27-12-2019', false, false),
    new Email('Tooliron', 'Coral Solomon', 'What design tools do you use?‏', 'Hello Coral,I have another great tip for you.Did you know that you can sync designs without ever leaving your favorite design tool?It can be Sketch, Adobe XD, Photoshop or Illustrator.Yep, that’s right - we support them all.Just download and install Avocode desktop app, and our plugins will be automatically added to your favorite design tools.', true, '27-12-2019', false, false),
    new Email('Tooliron', 'Coral Solomon', 'What design tools do you use?‏', 'Hello Coral,I have another great tip for you.Did you know that you can sync designs without ever leaving your favorite design tool?It can be Sketch, Adobe XD, Photoshop or Illustrator.Yep, that’s right - we support them all.Just download and install Avocode desktop app, and our plugins will be automatically added to your favorite design tools.', false, '27-12-2019', false, false),
    new Email('Tooliron', 'Coral Solomon', 'What design tools do you use?‏', 'Hello Coral,I have another great tip for you.Did you know that you can sync designs without ever leaving your favorite design tool?It can be Sketch, Adobe XD, Photoshop or Illustrator.Yep, that’s right - we support them all.Just download and install Avocode desktop app, and our plugins will be automatically added to your favorite design tools.', true, '27-12-2019', false, false),
    new Email('Tooliron', 'Coral Solomon', 'What design tools do you use?‏', 'Hello Coral,I have another great tip for you.Did you know that you can sync designs without ever leaving your favorite design tool?It can be Sketch, Adobe XD, Photoshop or Illustrator.Yep, that’s right - we support them all.Just download and install Avocode desktop app, and our plugins will be automatically added to your favorite design tools.', false, '27-12-2019', false, false)];
    storageService.store('emails', emails)
    return emails;
}

function getEmails(filterBy, searchBy) {
    console.log('getemailsssss', filterBy)
    var filteredEmails;
    if (searchBy === '') {


        if (!filterBy || filterBy === 'inbox' || filterBy === 'all' || filterBy === 'sentMail') filteredEmails = ([...gEmail]);
        else if (filterBy === 'starred') {
            // console.log(gEmail.filter(email => email.isStar));

            filteredEmails = (gEmail.filter(email => email.isStar));
        }
        else if (filterBy === 'read') filteredEmails = (gEmail.filter(email => email.isRead));
        else if (filterBy === 'unread') filteredEmails = (gEmail.filter(email => !email.isRead));
        else if (filterBy === 'trash') filteredEmails = (gEmail.filter(email => email.isTrash));

        return Promise.resolve(filteredEmails)
    }

    else {
        if (!filterBy || filterBy === 'inbox' || filterBy === 'all' || filterBy === 'sentMail') filteredEmails = ([...gEmail]);
        else if (filterBy === 'starred') {
            // console.log(gEmail.filter(email => email.isStar));

            filteredEmails = (gEmail.filter(email => email.isStar));
        }
        else if (filterBy === 'read') filteredEmails = (gEmail.filter(email => email.isRead));
        else if (filterBy === 'unread') filteredEmails = (gEmail.filter(email => !email.isRead));
        else if (filterBy === 'trash') filteredEmails = (gEmail.filter(email => email.isTrash));

        return Promise.resolve(filteredEmails.filter(email => {
            console.log('service else')
            return ((email.to.includes(searchBy)) || (email.subject.includes(searchBy)) || (email.body.includes(searchBy)))
        }))
    }
}




    // function getEmails(filterBy,searchBy) {
    //     console.log('getemailsssss', filterBy)
    //     if (!filterBy || filterBy === 'inbox' || filterBy === 'all' || filterBy === 'sentMail') return Promise.resolve([...gEmail]);
    //     else if (filterBy === 'starred'){
    //         console.log(gEmail.filter(email => email.isStar));

    //         return Promise.resolve(gEmail.filter(email => email.isStar));
    //     }
    //     else if (filterBy === 'read') return Promise.resolve(gEmail.filter(email => email.isRead));
    //     else if (filterBy === 'unread') return Promise.resolve(gEmail.filter(email => !email.isRead));
    //     else if (filterBy === 'trash') return Promise.resolve(gEmail.filter(email => email.isTrash));

    //     else return Promise.resolve( gEmail.filter(email => {
    //         console.log('service else')
    //         return ((email.to.includes(searchBy)) || (email.subject.includes(searchBy)) || (email.body.includes(searchBy)))
    //     }))
    // }

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
        storageService.store('emails', gEmail)

        // return Promise.resolve(true)
    }



    function formatDate(date) {
        var day = date.getDate()
        var month = date.getMonth() + 1
        var year = date.getFullYear()
        return day + '-' + month + '-' + year
    }


    function saveEmail(EmailDetails) {
        const email = new Email('Coral Solomon', EmailDetails.to, EmailDetails.subject, EmailDetails.body, true, formatDate(new Date), false)
        gEmail = [...gEmail, email];
        storageService.store('emails', gEmail)
        return Promise.resolve(email)
    }


