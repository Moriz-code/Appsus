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
    return (
      <div>
        <NotesFilter filterBy={this.state.filterBy} onFilter={this.onFilter}></NotesFilter>

        <button className="addBtnNotes" onClick={this.onAdd}><img src="..\assets\imgs\Notes-imgs\plusIcon.png" /></button>

        <input type="text" onFocus={this.cleanSelectedNote} onChange={this.onTextChange} />

        {/* <ul onChange={this.setComponent}>
          <li value="NoteTxt">Txt</li>
          <li value="NoteImg">Img</li>
          <li value="NoteTodos"></li>
          <li value="NoteVideo"></li>
        </ul> */}

        <div class="icon-bar">
          <a class="active" href="#"><i class="fa fa-home"></i></a>
          <a><i class="fa fa-search"></i></a>
          <a><i class="fa fa-envelope"></i></a>
          <a><i class="fa fa-globe"></i></a>
          <a><i class="fa fa-trash"></i></a>
        </div>

        {/* <select onChange={this.setComponent}>
          <option value="NoteTxt">T</option>
          <option value="NoteImg"></option>
          <option value="NoteTodos">To-Do</option>
          <option value="NoteVideo">Video</option>
        </select> */}

        {this.state.allNotes.length > 0 && <NotesList onTextChange={this.onTextChange} onUpdate={this.onUpdate} onChangeBcColor={this.onChangeBcColor}
          onEdit={this.onEdit} selectedNote={this.state.seletedNote} onDelete={this.onDelete} allNotes={this.state.allNotes}></NotesList>
        }
      </div>
    )
  }
}



