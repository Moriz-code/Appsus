import NoteService from '../services/NoteService.js'
import mapDynamicComponents from '../cmps/Dynamics/mapDynamicComponents.js'
import NotesList from '../cmps/NotesList.jsx'
// import AddNote from '../cmps/AddNote.jsx'

export default class NotesPage extends React.Component {
  state = {
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
    console.log('this.state.selectedNote' , ev.target.value);
    let type = ev.target.value;
    
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, type}}),  this.loadNotes())  
    
  }


  onTextChange = (ev) => {
    let info = ev.target.value
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, info: info } })),
      this.loadNotes();
  }

  onSave = () => {
    NoteService.saveNote(this.state.selectedNote).then(console.log('Saved')),
    this.loadNotes();
  }

  onDelete = (note) => {
    NoteService.deleteNote(note).then(console.log('deleted'));
    this.loadNotes();
  }

  onEdit = (note) => {
    NoteService.getNoteById(note.id).then(selectedNote => (this.setState({ selectedNote })))
    // console.log('edit', this.state.selectedNote);
  }


  render() {
    return (
      <div>
        <button className="addBtnNotes" onClick={this.onSave}><img src="..\assets\imgs\Notes-imgs\plusIcon.png" /></button>
        <input type="text" onChange={this.onTextChange} />

     
        <select onChange={this.setComponent}>
          <option value="NoteTxt">T</option>
          <option value="NoteImg">Image</option>
          <option value="NoteTodos">To-Do</option>
          <option value="NoteVideo">Video</option>
        </select>


        {this.state.allNotes.length > 0 && <NotesList onEdit={this.onEdit} selectedNote={this.state.seletedNote} onDelete={this.onDelete} allNotes={this.state.allNotes}></NotesList>
        }
      </div>
    )
  }
}



