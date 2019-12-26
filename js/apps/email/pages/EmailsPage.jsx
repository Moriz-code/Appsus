import EmailService from '../services/EmailService.js'
import EmailList from '../cmps/EmailList.jsx'
import SideNav from '../cmps/SideNav.jsx';
import AddNewMail from '../cmps/AddNewMail.jsx'


export default class EmailsPage extends React.Component {
    state = {
        emails: [],
        isComposing: false
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        EmailService.getEmails().then(emails => {
            this.setState({ emails })
        })
    }


    onChangeBcgColor = (emailId) => {
        EmailService.ChangeBcgColor(emailId)
        // console.log('grandpa', emailId)
        this.loadEmails();
    }


    onDeleteEmail = (emailId) => {
        // console.log('grandpa', emailId)
        EmailService.deleteEmail(emailId).then(() => {
            this.props.history.push('/emails')
            this.loadEmails()

        });
    }


    onStarEmail = (emailId) => {
        EmailService.starEmail(emailId)
        console.log('grandpa', emailId)
        this.loadEmails();

    }

    toggleIsComposing = () => {
        this.setState(prevState => ({
            isComposing: !prevState.isComposing
        }), () => console.log(this.state.isComposing)
        )
        // this.loadEmails();
        // this.state.isComposing = !this.state.isHide

    }


    render() {
        return <section className="main-email">
            {!this.state.isComposing ? (<div className="flex space-between">
                <SideNav emails={this.state.emails} toggleIsComposing={this.toggleIsComposing} ></SideNav>
                <EmailList emails={this.state.emails} onStarEmail={this.onStarEmail} onDeleteEmail={this.onDeleteEmail} onChangeBcgColor={this.onChangeBcgColor}></EmailList>
            </div>) : (<div className="flex column">
                <SideNav emails={this.state.emails} toggleIsComposing={this.toggleIsComposing} ></SideNav>
                <AddNewMail loadEmails={this.loadEmails}></AddNewMail>
            </div>)}
        </section>
    }
}