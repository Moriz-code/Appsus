

export default class EmailDetails extends React.Component {



    render() {
        return <div>
            <li className="clean-list">
                <h2>{this.props.email.subject}</h2>
                <p>{this.props.email.sentAt}</p>
                <p>{this.props.email.body}</p>
                <button>Back</button>
            </li>
        </div>
    }
}


// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
