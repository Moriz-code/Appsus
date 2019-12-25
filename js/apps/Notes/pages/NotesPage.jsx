import NoteService from '../services/NoteService.js'
import mapDynamicComponents from '../cmps/Dynamics/mapDynamicComponents.js'
import NotesList from '../cmps/NotesList.jsx'
import NotesApp from '../NotesApp.jsx';

export default class NotesPage extends React.Component {

  state = {
    // type: '',
    // isPinned: false,
    // id: 1, 
    // info: '',
    componentName: 'NoteTxt',
    allNotes: []
    // filterBy: null
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    NoteService.getNotes().then(response => {
      console.log('response', response)
      this.setState({ allNotes: response })
      console.log('allNots', this.state.allNotes)

    })
  }

  setComponent = (ev) => {
    console.log('setComponent', ev.target.value);
    this.setState({ componentName: ev.target.value })
  }

  getComponent() {
    console.log('getComponent', this.state.componentName);
    return mapDynamicComponents[this.state.componentName]
  }

  onTextChange = (ev) => {
    console.log(ev.target.value);
  }



  render() {
    const Cmp = this.getComponent();
    console.log(this.state.allNotes);
    return (<React.Fragment>

      <button className="addBtnNotes"><img src="..\assets\imgs\Notes-imgs\plusIcon.png" /></button>
      <div>{this.state.notes}</div>
      <input type="text" onChange={this.onTextChange} />
      <Cmp></Cmp>

      <select onChange={this.setComponent}>
        <option value="NoteTxt">T</option>
        <option value="NoteImg">Image</option>
        <option value="NoteTodos">To-Do</option>
        <option value="NoteVideo">Video</option>
      </select>

<NotesList></NotesList>
   

    </React.Fragment>
    )
  }
}
