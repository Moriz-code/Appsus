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
        return <div className="email-and-btn-container flex space-between "> <Link to={`/emails/${props.email.id}`}>
            <div className="">
            <li className={`email-container flex space-between  ${this.checkIfRead()}`}>
                <p className="email-from">{props.email.from}</p>
                <p className="email-subject">{props.email.subject} </p>
                <p className="email-date">{props.email.sentAt}</p>
            </li>
            </div>
        </Link>
        <div>
            <button className="read-email" onClick={this.onChangeBcgColor}>{this.props.email.isRead ? <i className="fas fa-bookmark"></i> : <i className="far fa-bookmark"></i>}</button>
            <button className="delete-email" onClick={this.onDeleteEmail}><i className="far fa-trash-alt"></i></button>
            <button className="star-email" onClick={this.onStarEmail}>{this.props.email.isStar ? <i className="far fa-star"></i> : <i className="fas fa-star"></i>}</button>
            </div>
        </div>
    }
}

// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
