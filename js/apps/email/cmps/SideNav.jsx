
// const { Link } = ReactRouterDOM

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
        return <div className="flex column">
            <button>Compose</button>
            <button>Inbox ({this.countOfUnRead()})</button>
            <button>Starred</button>
            <button>Sent mail</button>
            <button>Draft</button>
        </div>

    }
}

// const { NavLink } = ReactRouterDOM

// export default class SideNav extends React.Component {

//     countOfUnRead(props) {
//         console.log(this.props.emails)
//         var counter;
//         let newEmails = this.props.emails.filter(function (email) {
//             if (!email.isRead) return true
//             else false
//         })
//         counter = newEmails.length;
//         return counter;
//     }

//     render() {
//         return <nav className = "flex" >
//             <ul className = " sideNav clean-list">
//                 <li><NavLink activeClassName="Compose" to="/emails/compose" >Compose</NavLink></li>
//                 <li><NavLink activeClassName="Inbox" to="/emails">Inbox({this.countOfUnRead()})</NavLink></li>
//                 <li><NavLink activeClassName="Starred" to="">Starred</NavLink></li>
//                 <li><NavLink activeClassName="Sent mail" to="">Sent mail</NavLink></li>
//                 <li><NavLink activeClassName="Draft" to="">Draft</NavLink></li>
//             </ul>
//         </nav>
//     }
// }

