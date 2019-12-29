const { Link } = ReactRouterDOM
import utils from '../../services-general/utils.js'
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
        console.log('coral', utils.getRandomColor())
        return <div className={`email-and-btn-container flex `}>

            <Link to={`/emails/${props.email.id}`}>

                <li className={`email-container flex space-between align-center ${this.checkIfRead()} `}>
                    <div className="flex align-center">
                        <span style={{ backgroundColor: utils.getRandomColor() }} className="round-name">
                            <span className="round-name-text">{props.email.from.substring(0, 1)}
                            </span>
                        </span>

                        <p className="email-from">{props.email.from}</p>
                        <p className="email-subject">{props.email.subject} </p>
                        <p className="email-body">{(props.email.body).substring(0, 100) + '...'}</p>
                    </div>
                    <p className="email-date">{props.email.sentAt}</p>
                </li>
            </Link>


            <div className={`email-btn flex ${this.checkIfRead()}`}>
                <button className="read-email" onClick={this.onChangeBcgColor}>{this.props.email.isRead ? <i className=" rotate-center fas fa-bookmark"></i> : <i className="rotate-center far fa-bookmark"></i>}</button>
                <button className="delete-email" onClick={this.onDeleteEmail}><i className="rotate-center far fa-trash-alt"></i></button>
                <button className="star-email" onClick={this.onStarEmail}>{this.props.email.isStar ? <i className="rotate-center fas fa-star"></i> : <i className="rotate-center far fa-star"></i>}</button>
            </div>


        </div>
    }
}

// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
