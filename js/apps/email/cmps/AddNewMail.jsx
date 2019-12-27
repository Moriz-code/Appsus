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
        return <form className="flex column">
            <input type="text" value={this.state.to} name="to" placeholder="To" onChange={this.inputChange}></input>
            {/* <input type="email" placeholder="Cc"></input> */}
            {/* <input type="email" placeholder="Bcc"></input> */}
            <input type="text" value={this.state.subject} name="subject" placeholder="Subject" onChange={this.inputChange}></input>
            <textarea rows="4" value={this.state.body} name="body" cols="50" onChange={this.inputChange}></textarea>
            <button onClick={this.onSaveEmail}>Send</button>
        </form>
    }
}
