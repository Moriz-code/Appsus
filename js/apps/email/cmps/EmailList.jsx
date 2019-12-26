import EmailPreview from '../cmps/EmailPreview.jsx'


export default function EmailList(props) {
    return <ul className = "emails-list-container clean-list" >{props.emails.map((email,i) =><EmailPreview key={i} email={email} ></EmailPreview>)}</ul>
}
