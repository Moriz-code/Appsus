import EmailService from '../services/EmailService.js'

export default class AddNewMail extends React.Component {
    state = {
        to: '',
        subject: '',
        body: '',
        isHide: true

    }

    onSaveEmail = (ev) => {
        ev.preventDefault();
        EmailService.saveEmail({ ...this.state }).then(() => {
            this.props.loadEmails();
        })
    }

    inputChange = (ev) => {
        ev.preventDefault();
        console.log(ev.target.value)
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ [field]: value })
        console.log(field, value)
    }



    render() {
        return <form className="new-mail-form flex column">
            <p class="new-mail-form-header">New Massage</p>
            <input className="mail-to" type="text" value={this.state.to} name="to" placeholder="To" onChange={this.inputChange}></input>
            {/* <input type="email" placeholder="Cc"></input> */}
            {/* <input type="email" placeholder="Bcc"></input> */}
            <input className="mail-subject" type="text" value={this.state.subject} name="subject" placeholder="Subject" onChange={this.inputChange}></input>
            <textarea placeholder="Enter your text here" className="mail-text-area" rows="20" value={this.state.body} name="body" cols="40" onChange={this.inputChange}></textarea>
            <button className="send-new-mail" onClick={this.onSaveEmail}>Send</button>
        </form>
    }
}
