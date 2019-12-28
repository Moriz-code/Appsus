
// const { Link } = ReactRouterDOM
export default class SideNav extends React.Component {

    countOfUnRead(props) {
        var counter;
        let newEmails = this.props.emails.filter(function (email) {
            if (!email.isRead) return true
            else false
        })
        counter = newEmails.length;
        return counter;
    }


    countOfStars() {
        var counter;
        let newEmails = this.props.emails.filter(function (email) {
            if (email.isStar) return true
            else false
        })
        counter = newEmails.length;
        return counter;
    }


    filterEmails=(ev)=>{
        // debugger;
        const field = ev.target.name;
        console.log('side nav' , field )
        console.log(this.props)
        this.props.onSetFilter(field)
    }


    render() {
        return <div className="sideNav flex column">
            <img className="email-profile-pic" src="assets/imgs/Email-imgs/profile.jpg"/>
            <h4 className="user-name">Coral Solomon</h4>
            <div className="compose-btn">
            <button onClick={this.props.toggleIsComposing}>Compose <i className="fas fa-plus"></i></button>
            </div>
           <div className="side-nav-3btn">
            <button className="inbox" onClick={this.filterEmails} name="inbox"> <i className="inbox fas fa-inbox"></i> Inbox{this.countOfUnRead()}</button>
            <button className="starred" onClick={this.filterEmails} name="starred" ><i className="starred fas fa-star"></i> Starred({this.countOfStars()})</button>
            <button className="sentMail" onClick={this.filterEmails} name="sentMail"> <i className="sentMail fas fa-paper-plane"></i> Sent mail</button>
            <button className="trash"><i className="trash far fa-trash-alt"></i> Trash</button>
            </div>
        </div>
    }
}

// onClick={AddNewMail.toggleModal()}

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

