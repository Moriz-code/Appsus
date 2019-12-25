const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    checkIfRead() {
        const props = this.props;
        if (!props.email.isRead) return 'unread'
        return ''
    }



    render() {
        const props = this.props;
        return<li className={this.checkIfRead()}>
                <h2>{props.email.subject} </h2>
                {/* <p>{props.email.body}</p> */}
                <p>{props.email.sentAt}</p>
            </li>
        // <Link to={`/${props.email.id}`}></Link>
    }
}

// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
