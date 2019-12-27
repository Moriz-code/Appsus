const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    checkIfRead() {
        const props = this.props;
        if (!props.email.isRead) return 'unread'
        return 'read'
    }


    onChangeBcgColor = () => {
        // console.log(this.props.email.isRead)
        this.checkIfRead()
        this.props.onChangeBcgColor(this.props.email.id)
        // console.log('child', this.props.email.id)
    }

    onDeleteEmail = () => {
        this.props.onDeleteEmail(this.props.email.id)
        // console.log('child', this.props.email.id)

    }

    onStarEmail = () => {
        this.props.onStarEmail(this.props.email.id)
        console.log('child', this.props.email.id)

    }


    render() {
        const props = this.props;
        return <div className=""> <Link to={`/emails/${props.email.id}`}>
            <li className={`email-container flex space-between ${this.checkIfRead()}`}>
                <p>{props.email.from}</p>
                <p>{props.email.subject} </p>
                <p>{props.email.sentAt}</p>
            </li>
        </Link>
            <button onClick={this.onChangeBcgColor}>read/unread</button>
            <button onClick={this.onDeleteEmail}>Delete</button>
            <button onClick={this.onStarEmail}>Star/UnStar</button>
        </div>
    }
}

// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
