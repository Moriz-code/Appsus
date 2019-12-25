import NoteService from '../services/NoteService.js'
import mapDynamicComponents from '../cmps/Dynamics/mapDynamicComponents.js'
import NotesList from '../cmps/NotesList.jsx'
// import AddNote from '../cmps/AddNote.jsx'



export default class NotesPage extends React.Component {

  state = {
    // isPinned: false,
    // id: 1, 
    info: '',
    type: 'NoteTxt',
    allNotes: []
    // filterBy: null
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    NoteService.getNotes().then(response => {
      this.setState({ allNotes: response })
      // console.log('allNots', this.state.allNotes)

    })
  }

  setComponent = (ev) => {
    this.setState({ type: ev.target.value })
  }

  getComponent() {
    return mapDynamicComponents[this.state.type] 
  }

  onTextChange = (ev) => {
    this.setState({info: ev.target.value})
  }

  onSave = () => {
    NoteService.saveNote(this.state).then(console.log('Saved'))
    this.loadNotes();
  }


  render() {
    
    const Cmp = this.getComponent();

    return (<React.Fragment>

      <button className="addBtnNotes" onClick={this.onSave}><img src="..\assets\imgs\Notes-imgs\plusIcon.png" /></button>

      <input type="text" onChange={this.onTextChange} />

      
      <Cmp></Cmp>
      <select onChange={this.setComponent}>
        <option value="NoteTxt">T</option>
        <option value="NoteImg">Image</option>
        <option value="NoteTodos">To-Do</option>
        <option value="NoteVideo">Video</option>
      </select>


      <ul>{this.state.allNotes.map((Note,i) => <NotesList key={i} note={Note}></NotesList>)}</ul>

    </React.Fragment>
    )
  }
}
