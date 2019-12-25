// import EmailsPage from "../email/pages/EmailsPage.jsx"

// export default class EmailsApp extends React.Component {

//     render() {
//         return (
//             <section>
//                 <h1>EmailsApp</h1>
//                 <EmailsPage></EmailsPage>
//             </section>
//         )
//     }
// }

import EmailsPage from './pages/EmailsPage.jsx'
import EmailsDetailsPage from './pages/EmailsDetailsPage.jsx'



const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
class EmailApp extends React.Component {

    render() {
        console.log('emailApp routes')
        return (
            <main>
                <Router history={history}>
                    <Switch>
                        {/* <Route component={EmailsPage} path="/emails" exact></Route> */}
                        <Route component={EmailsDetailsPage} path="/emails/:id"></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <EmailApp />,
    document.getElementById('root')
)