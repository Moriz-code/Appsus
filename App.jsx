import Home from './pages/Home.jsx'
import NavBar from './cmps-general/NavBar.jsx'
import NotesApp from './js/apps/Notes/NotesApp.jsx'
import EmailsPage from './js/apps/email/pages/EmailsPage.jsx'
import About from './pages/About.jsx'
import EmailsDetailsPage from './js/apps/email/pages/EmailDetailsPage.jsx'
// import EmailAdd from './js/apps/email/cmps/EmailAdd.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()


class App extends React.Component {

  render() {
    return (
      <main>
        <Router history={history}>
          <NavBar></NavBar>
          <Switch>
            <Route component={Home} path="/" exact></Route>
            <Route component={NotesApp} path="/notes" exact></Route>
            <Route component={EmailsPage} path="/emails" exact></Route>
            <Route component={EmailsDetailsPage} path="/emails/:id" exact></Route>
            {/* <Route component={EmailAdd} path="/emails/compose"></Route> */}

            {/* <Route component={BooksApp} path="/books" exact></Route> */}
            <Route component={About} path="/about" exact></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)