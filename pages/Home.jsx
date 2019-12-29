const { Link } = ReactRouterDOM

export default class Home extends React.Component {

    render() {
        return (
            <section className="pic-links flex ">
                <Link to={`/notes`}> <img className="note-homepage-pic" src="assets/imgs/Email-imgs/11146.jpg" />
                </Link>
                <Link to={`/emails`}><img className="email-homepage-pic" src="assets/imgs/Email-imgs/233.jpg" />
                </Link>
            </section>
        )
    }
}