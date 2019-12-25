import Home from './pages/Home.jsx'
import NavBar from './js/cmps-general/NavBar.jsx'
import NotesApp from './js/apps/Notes/NotesApp.jsx'
import EmailsApp from './js/apps/email/EmailsApp.jsx'
import About from './pages/About.jsx'

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
            <Route component={EmailsApp} path="/email" exact></Route>
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