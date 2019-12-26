import NoteService from '../services/NoteService.js'
import mapDynamicComponents from '../cmps/Dynamics/mapDynamicComponents.js'
import NotesList from '../cmps/NotesList.jsx'
// import AddNote from '../cmps/AddNote.jsx'



export default class NotesPage extends React.Component {
  state = {

    isPinned: false,
    info: '',

    selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: '', isSelected: false },

    //render all notes
    allNotes: [],

  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    NoteService.getNotes().then(response => {
      this.setState({ allNotes: response })
    })
  }

  setComponent = (ev) => {
    let type = ev.target.value;
    this.setState(prevState => ({ currentNote: { ...prevState.currentNote, type } }))
    this.loadNotes();
  }


  getComponent() {
    return mapDynamicComponents[this.state.selectedNote.type]
  }

  onTextChange = (ev) => {
    let info = ev.target.value
    this.setState(prevState => ({ currentNote: { ...prevState.currentNote, info: info } })),
    this.loadNotes();
  }

  onSave = () => {
    NoteService.saveNote(this.state).then(console.log('Saved'))
    this.loadNotes();
  }

  onDelete = (note) => {
    NoteService.deleteNote(note).then(console.log('deleted'))
    this.loadNotes();
  }

  onEdit = (note) => {
    //changing the edit mode to on 
    // set state to the notes
    this.setState(({ currentNote: note }), console.log('seletedNote', note)
    )
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


      <NotesList onEdit={this.onEdit} selectedNote={this.state.seletedNote} onDelete={this.onDelete} allNotes={this.state.allNotes}></NotesList>

    </React.Fragment>
    )
  }
}


