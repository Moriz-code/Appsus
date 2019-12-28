import NoteService from '../services/NoteService.js'
import mapDynamicComponents from '../cmps/Dynamics/mapDynamicComponents.js'
import NotesList from '../cmps/NotesList.jsx'
import NotesFilter from '../cmps/NotesFilter.jsx'
// import AddNote from '../cmps/AddNote.jsx'

export default class NotesPage extends React.Component {
  state = {
    selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: null, style: { bccolor: '' } },
    //render all notes
    allNotes: [],
    filterBy: ''

  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    NoteService.getNotes(this.state.filterBy).then(notes => { this.setState({ allNotes: notes }) }),
      this.render()
  }

  onFilter = (changeFilterField) => {
    this.setState(prevState => ({ filterBy: prevState.filterBy, ...changeFilterField }), this.loadNotes)

  }

  setComponent = (ev) => {
    let type = ev.target.value;
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, type } }), this.loadNotes)
  }


  onTextChange = (ev) => {
    let info = ev.target.value
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, info: info } }), this.loadNotes)
  }

  onChangeBcColor = (ev) => {
    let color = ev.target.value
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, style: { bccolor: color } } }), this.loadNotes)
  }


  onAdd = () => {
    NoteService.saveNote(this.state.selectedNote)
      .then(() => {
        this.cleanSelectedNote();
        this.loadNotes();
      })
  }


  onUpdate = () => {
    let updatedInfo = this.state.selectedNote
    NoteService.editNote(updatedInfo).then(() => {
      this.cleanSelectedNote();
      this.loadNotes();
    })
  }

  onDelete = (note) => {
    NoteService.deleteNote(note)
      .then(() => {
        this.loadNotes();
        this.cleanSelectedNote();
      })
  }

  onEdit = (note) => {
    this.setState({ selectedNote: note }), this.loadNotes()
  }

  cleanSelectedNote = () => {
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, isPinned: false, info: '', id: null, style: { bccolor: '' }, isSelected: false } }), this.loadNotes)
  }


  render() {
    return <React.Fragment>

<h1 className="notes-container">Miss Notes</h1> <NotesFilter filterBy={this.state.filterBy} onFilter={this.onFilter}></NotesFilter>

<div className="addNotePanel">

      <input type="text" className="addInputPanel" onFocus={this.cleanSelectedNote} onChange={this.onTextChange} />
  

      <div id="radio" className="addNoteBtns" onChange={this.setComponent}>
        <input type="radio" id="radio1" value="NoteTxt" name="radio" />
        <label htmlFor="radio1"><i className="far fa-sticky-note fa-lg"></i></label>
        <input type="radio" id="radio2" value="NoteImg" name="radio"/>
        <label htmlFor="radio2"><i className="far fa-images fa-lg"></i></label>
        <input type="radio" id="radio3" value="NoteTodos" name="radio" />
        <label htmlFor="radio3"><i className="fas fa-list-ul fa-lg"></i></label>
        <input type="radio" id="radio4" value="NoteVideo" name="radio" />
        <label htmlFor="radio4"><i className="fab fa-youtube-square fa-lg"></i></label>
      </div>
   
    <button className="addBtnNotes" onClick={this.onAdd}><i className="fas fa-plus-circle fa-lg"></i></button>
    </div>
      <div className="notes-container">
        {this.state.allNotes.length > 0 && <NotesList onTextChange={this.onTextChange} onUpdate={this.onUpdate} onChangeBcColor={this.onChangeBcColor}
          onEdit={this.onEdit} selectedNote={this.state.seletedNote} onDelete={this.onDelete} allNotes={this.state.allNotes}></NotesList>
        }
      </div>

    </React.Fragment>
  }
}



