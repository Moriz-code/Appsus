import EmailDetails from '../cmps/EmailDetails.jsx'
import EmailService from '../services/EmailService.js';
import SideNav from '../cmps/SideNav.jsx'

export default class EmailDetailsPage extends React.Component {

    state = {
        email: null
    }


    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
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
        return <div>
            {/* <SideNav emails={this.state.emails} ></SideNav> */}
            <EmailDetails email={this.state.email} ></EmailDetails>
        </div>
    }
}