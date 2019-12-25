import EmailService from '../services/EmailService.js'
import EmailList from '../cmps/EmailList.jsx'


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
                <div>
                    <EmailList emails={this.state.emails}></EmailList>
                </div>
            </section>

        )
    }
}