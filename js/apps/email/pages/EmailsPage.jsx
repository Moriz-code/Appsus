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

    render() {
        // console.log (this.state.emails)
        return (
            <section>
                <div className="flex space-between">
                    <SideNav emails={this.state.emails} ></SideNav>
                    <EmailList emails={this.state.emails}></EmailList>
                </div>
            </section>

        )
    }
}