import EmailService from '../services/EmailService.js'
import EmailList from '../cmps/EmailList.jsx'
import SideNav from '../cmps/SideNav.jsx';


export default class EmailsPage extends React.Component {
    state = {
        emails:[]
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        EmailService.getEmails().then(emails=>{
            this.setState({emails})
        })
    }


    onChangeBcgColor = (emailId) => {
        EmailService.ChangeBcgColor(emailId)
        console.log('grandpa', emailId)
        this.loadEmails();
    }


    onDeleteEmail = (emailId)=>{
        console.log('grandpa', emailId)
        
        EmailService.deleteEmail(emailId).then(()=>{
            this.props.history.push('/emails')
            this.loadEmails()

        });
    }

    render() {
        return (
            <section>
                <div className="flex space-between">
                    <SideNav emails={this.state.emails} ></SideNav>
                    <EmailList emails={this.state.emails} onDeleteEmail={this.onDeleteEmail} onChangeBcgColor={this.onChangeBcgColor}></EmailList>
                </div>
            </section>

        )
    }
}