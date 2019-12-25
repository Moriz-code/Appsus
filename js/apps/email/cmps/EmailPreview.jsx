const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    render() {
        const props = this.props;
        return <li>
            <h2>{props.email.subject} </h2>
            <p>{props.email.body}</p>
            <p>{props.email.sentAt}</p>
        </li>
    }
}

// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
