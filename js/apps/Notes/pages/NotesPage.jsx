import NoteService from '../services/NoteService.js'
import mapDynamicComponents from '../cmps/Dynamics/mapDynamicComponents.js'
import NotesList from '../cmps/NotesList.jsx'
// import AddNote from '../cmps/AddNote.jsx'

export default class NotesPage extends React.Component {
  state = {
    selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: null, isSelected: false },
    //render all notes
    allNotes: [],
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    NoteService.getNotes().then(response => { this.setState({ allNotes: response }) }, console.log('done - loadNotes', this.state))
  }

  setComponent = (ev) => {
    let type = ev.target.value;
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, type } }), this.loadNotes(), console.log('done - setComponent', this.state))
  }


  onTextChange = (ev) => {
    let info = ev.target.value
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, info: info } }), this.loadNotes)
  }

  onAdd = () => {
    NoteService.saveNote(this.state.selectedNote)
    .then(() =>{
      this.loadNotes();
      // this.cleanSelectedNote();
    })
  }


  onUpdate = (note) => {
    var updatedInfo = this.state.selectedNote
    console.log('onUpdate - this.state.selectedNote', updatedInfo);
    NoteService.editNote(note, updatedInfo).then(() =>{

      this.loadNotes();
      this.cleanSelectedNote();
    })
 
  }

  onDelete = (note) => {
    NoteService.deleteNote(note)
    .then(() =>{
      this.loadNotes();
      this.cleanSelectedNote();
    })  
   
  }

  onEdit = (note, ev) => {
    this.setState({ selectedNote: note}),(this.onTextChange(ev))
  }

  cleanSelectedNote = () => {
    this.setState({ selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: null, isSelected: false }})
  }



  render() {
    return (
      <div>
        <button className="addBtnNotes" onClick={this.onAdd}><img src="..\assets\imgs\Notes-imgs\plusIcon.png" /></button>

        <input type="text" onFocus={this.cleanSelectedNote} onChange={this.onTextChange} />


        <select onChange={this.setComponent}>
          <option value="NoteTxt">T</option>
          <option value="NoteImg">Image</option>
          <option value="NoteTodos">To-Do</option>
          <option value="NoteVideo">Video</option>
        </select>

        {this.state.allNotes.length > 0 && <NotesList onUpdate={this.onUpdate} onEdit={this.onEdit} selectedNote={this.state.seletedNote} onDelete={this.onDelete} allNotes={this.state.allNotes}></NotesList>
        }
      </div>
    )
  }
}



