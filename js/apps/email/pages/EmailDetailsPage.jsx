import EmailDetails from '../cmps/EmailDetails.jsx'
import EmailService from '../services/EmailService.js';

export default class EmailDetailsPage extends React.Component {

    state = {
        email: null
    }

  
    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail();
        }
    }

    loadEmail() {
        console.log('@@@@@')

        console.log(this.props)
        const { id } = this.props.match.params;
        EmailService.getEmailById(id).then(email => {
            this.setState({ email })
            console.log(this.props.match.params)
        })
    }

    
    render() {
        // return         console.log('@@@@@')
        // console.log(this.state.book);
        if (!this.state.email) return <div className="loading">Loading...</div>
        return <EmailDetails email={this.state.email} ></EmailDetails>
    }
}