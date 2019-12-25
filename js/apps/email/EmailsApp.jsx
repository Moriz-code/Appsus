import EmailsPage from "../email/pages/EmailsPage.jsx"

export default class EmailsApp extends React.Component {

    render() {
        return (
            <section>
                <h1>EmailsApp</h1>
                <EmailsPage></EmailsPage>
            </section>
        )
    }
}

// import EmailsPage from './pages/EmailsPage.jsx'
// import EmailsDetailsPage from './pages/EmailDetailsPage.jsx'



// const Router = ReactRouterDOM.HashRouter
// const { Route, Switch } = ReactRouterDOM
// const { createBrowserHistory } = History
// const history = createBrowserHistory()
// class App extends React.Component {

//     render() {
//         return (
//             <main>
//                 <Router history={history}>
//                     <Switch>
//                         <Route component={EmailsPage} path="/" exact></Route>
//                         {/* <Route component={EmailsDetailsPage} path="/:id" exact></Route> */}

//                     </Switch>
//                 </Router>

//             </main>
//         )
//     }
// }


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )