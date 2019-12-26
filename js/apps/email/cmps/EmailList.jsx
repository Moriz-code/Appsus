import EmailPreview from '../cmps/EmailPreview.jsx'


export default class EmailList extends React.Component {


    onChangeBcgColor = (emailId) => {
        this.props.onChangeBcgColor(emailId)
        console.log('dad', emailId)
    }

    onDeleteEmail = (emailId) => {
        this.props.onDeleteEmail(emailId)
        console.log('dad', emailId)

    }

    render() {
        const props = this.props;
        return <ul className="emails-list-container clean-list" >{props.emails.map((email, i) => <EmailPreview onDeleteEmail={this.onDeleteEmail} onChangeBcgColor={this.onChangeBcgColor}  key={i} email={email} ></EmailPreview>)}</ul>
    }



}