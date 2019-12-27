import EmailService from '../services/EmailService.js'
import EmailList from '../cmps/EmailList.jsx'
import SideNav from '../cmps/SideNav.jsx';
import AddNewMail from '../cmps/AddNewMail.jsx'
import Email from '../services/Email.js';
import SearchEmail from '../cmps/SearchEmail.jsx'


export default class EmailsPage extends React.Component {
    state = {
        emails: [],
        isComposing: false,
        filterBy:null

    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        EmailService.getEmails(this.state.filterBy).then(emails => {
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
    }

    onSetFilter = (filterName) => {
        // this.setState({ isComposing: true})
        this.setState({filterBy: filterName})
        console.log(this.state);
        
        // this.loadEmails;

    }


    render() {
        return <div className="main-email-app">
            <SearchEmail></SearchEmail>
            {!this.state.isComposing ? (<div className="flex space-between">
                <SideNav emails={this.state.emails} onSetFilter={this.onSetFilter} toggleIsComposing={this.toggleIsComposing} ></SideNav>
                <EmailList emails={this.state.emails} onStarEmail={this.onStarEmail} onDeleteEmail={this.onDeleteEmail} onChangeBcgColor={this.onChangeBcgColor}></EmailList>
            </div>) : (<div className="flex column">
                <SideNav onSetFilter={this.onSetFilter} emails={this.state.emails} toggleIsComposing={this.toggleIsComposing}></SideNav>
                <AddNewMail loadEmails={this.loadEmails}></AddNewMail>
            </div>)}

        </div>
    }
}