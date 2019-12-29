

export default class EmailDetails extends React.Component {

    onGoBack = () => {
        this.props.onGoBack()
    }

    
    // onDeleteEmail = () => {
    //     this.props.onDeleteEmail(this.props.email.id)
    //     // console.log('child', this.props.email.id)

    // }

    // onStarEmail = () => {
    //     this.props.onStarEmail(this.props.email.id)
    //     console.log('child', this.props.email.id)

    // }


    render() {
        return <div>
            <li className=" email-details clean-list">
                <h2  className="subject-details">{this.props.email.subject}</h2>
                {/* <button className="delete-email-details" onClick={this.onDeleteEmail}><i className="rotate-center far fa-trash-alt"></i></button> */}
                {/* <button className="star-email-details" onClick={this.onStarEmail}>{this.props.email.isStar ? <i className="rotate-center fas fa-star"></i> : <i className="rotate-center far fa-star"></i>}</button> */}
                <p className="sent-at-details">{this.props.email.sentAt}</p>
                <p className=" email-details-body">{this.props.email.body}</p>
                {/* <button className="read-email" onClick={this.}>{this.props.email.isRead ? <i className=" rotate-center fas fa-bookmark"></i> : <i className="rotate-center far fa-bookmark"></i>}</button> */}
               
                <button className="go-back-btn" onClick={this.onGoBack}>Back</button>
            </li>
        </div>
    }
}


// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
