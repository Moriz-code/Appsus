const { Link } = ReactRouterDOM
import utils from '../../services-general/utils.js'
export default class EmailPreview extends React.Component {

    checkIfRead() {
        const props = this.props;
        if (!props.email.isRead) return 'unread'
        return 'read'
    }


    onChangeBcgColor = (ev) => {
        ev.stopPropagation();
        // console.log(this.props.email.isRead)
        this.checkIfRead()
        this.props.onChangeBcgColor(this.props.email.id)
        // console.log('child', this.props.email.id)
    }

    onDeleteEmail = (ev) => {
        ev.stopPropagation();
        this.props.onDeleteEmail(this.props.email.id)
        // console.log('child', this.props.email.id)

    }

    onStarEmail = (ev) => {
        ev.stopPropagation();
        this.props.onStarEmail(this.props.email.id)
        console.log('child', this.props.email.id)

    }

    onSetSelectedEmail = () => {
        
        
        console.log('child emailpreview', this.props.email.id)
        this.props.onSetSelectedEmail(this.props.email.id)
    }


    render() {
        const props = this.props;
        console.log('coral', props.email.from)
        console.log('coral', props.email.from.substring(0, 1))

        return <div className={`email-and-btn-container flex`}onClick={this.onSetSelectedEmail}>

            {/* <Link to={`/emails/${props.email.id}`}> */}

            <li className={`email-container flex space-between align-center ${this.checkIfRead()} `} >
                <div className="flex align-center">
                    {/* <span style={{ backgroundColor: utils.getRandomColor() }} className="round-name"> */}
                    <span className="round-name">
                        <span className="round-name-text"> {props.email.from.substring(0, 1)}</span>
                    </span>

                    <p className="email-from">{props.email.from}</p>
                    <p className="email-subject">{props.email.subject} </p>
                    <p className="email-body">{(props.email.body).substring(0, 100) + '...'}</p>
                </div>
                <p className="email-date">{props.email.sentAt}</p>
            </li>
            {/* </Link> */}


            <div className={`email-btn flex ${this.checkIfRead()}`}>
                <button className="read-email" onClick={(ev)=>this.onChangeBcgColor(ev)}>{this.props.email.isRead ? <i className=" rotate-center fas fa-bookmark"></i> : <i className="rotate-center far fa-bookmark"></i>}</button>
                <button className="delete-email" onClick={(ev)=>this.onDeleteEmail(ev)}><i className="rotate-center far fa-trash-alt"></i></button>
                <button className="star-email" onClick={(ev)=>this.onStarEmail(ev)}>{this.props.email.isStar ? <i className="rotate-center fas fa-star"></i> : <i className="rotate-center far fa-star"></i>}</button>
            </div>


        </div>
    }
}

// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }
