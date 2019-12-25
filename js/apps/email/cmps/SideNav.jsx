
const { Link } = ReactRouterDOM

export default class SideNav extends React.Component {

    countOfUnRead (props) {
        console.log(this.props.emails)
        var counter;
        let newEmails = this.props.emails.filter(function (email) {
            if (!email.isRead) return true
            else false
        })
        counter = newEmails.length;
        return counter;
    }



    render() {
        return <div>
            <button>Compose</button>
            <button>Inbox ({this.countOfUnRead()})</button>
            <button>Starred</button>
            <button>Sent mail</button>
            <button>Draft</button>
        </div>

    }
}
