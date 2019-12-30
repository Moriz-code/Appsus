import NoteService from '../services/NoteService.js'
import NotesList from '../cmps/NotesList.jsx'
import NotesFilter from '../cmps/NotesFilter.jsx'
// import AddNotePanel from '../cmps/AddNotePanel.jsx'
// import AddNote from '../cmps/AddNote.jsx'

export default class NotesPage extends React.Component {
  state = {
    selectedNote: { type: 'NoteTxt', isPinned: false, info: '', id: null, style: { bccolor: '' }, isOnEdit: false },
    placeholder: 'Enter your TEXT...',
    //render all notes
    allNotes: [],
    filterBy: '',
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    NoteService.getNotes(this.state.filterBy).then(notes => { this.setState({ allNotes: notes }) }),
      this.render;
  }

  onFilter = (changeFilterField) => {
    this.setState(prevState => ({ filterBy: prevState.filterBy, ...changeFilterField }), this.loadNotes)

  }

  setComponent = (ev) => {
    let type = ev.target.value;
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, type } }), this.setPlaceholder)
  }

  onTextChange = (ev) => {
    let info = ev.target.value
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, info: info } }), this.loadNotes)
  }


  onChangeBcColor = (ev) => {
    let color = ev.target.value
    this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, style: { bccolor: color } } }), this.onUpdate)
  }


  onAdd = () => {
    NoteService.saveNote(this.state.selectedNote)
      .then(() => {
        this.loadNotes();
        this.cleanSelectedNote();
        
      })
  }

  onShift = (note) => {
  let editedNote = { ...note, isPinned: true }
  this.setState({selectedNote: editedNote}, () =>{
    NoteService.shiftNote(editedNote).then(()=>{
      this.loadNotes();
      this.cleanSelectedNote();
    })
  })
 
  }


  onCopy = (updatedInfo) => {
        console.log('copy', this.state.selectedNote);
        // let updatedInfo = this.state.selectedNote
        // (updatedInfo).select();
        document.execCommand('copy');
      }


  onUpdate = () => {
        this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, isOnEdit: false } }), () => {
          let updatedInfo = this.state.selectedNote
          NoteService.editNote(updatedInfo).then(() => {
            // this.cleanSelectedNote();
            this.loadNotes();
            this.cleanSelectedNote();
          })
        })

      }

  onEdit = (note) => {
        console.log('note.isOnEdit', note.isOnEdit);
        let editedNote;
        if (this.state.selectedNote.isOnEdit) {
          editedNote = { ...note, isOnEdit: false }
          this.cleanSelectedNote();
        }
        else {
          editedNote = { ...note, isOnEdit: true }
        }

        this.setState({ selectedNote: editedNote }, () => {
          NoteService.editNote(editedNote).then(() => {
            this.loadNotes();
            
          })
        })

      }

  onDelete = (note) => {
        NoteService.deleteNote(note)
          .then(() => {
            this.loadNotes();
            this.cleanSelectedNote();
          })
      }

 

  cleanSelectedNote = () => {
        this.setState(prevState => ({ selectedNote: { ...prevState.selectedNote, type: 'NoteTxt', isPinned: false, info: '', id: null, style: { bccolor: '' }, isOnEdit: false } }), this.loadNotes)
      }

  setPlaceholder = () => {
        const noteType = (this.state.selectedNote.type)
        switch (noteType) {
          case 'NoteVideo':
            return this.setState({ placeholder: 'Enter youtube URL...' });
          case 'NoteImg':
            return this.setState({ placeholder: 'Enter image URL...' })
          case 'NoteTodos':
            return this.setState({ placeholder: 'Enter your TODO title...' })
          case 'NoteTxt':
            return this.setState({ placeholder: 'Enter your TEXT...' })
        }
      }

  render() {

      let noteType = (this.state.selectedNote.type)
    return<React.Fragment >

      < div className = "addNotePanel heartbeat" >
      <input type="text" className="addInputPanel heartbeat" placeholder={this.state.placeholder} onChange={this.onTextChange} />

      <div id="radio" className="addNoteBtns" onChange={this.setComponent}>
        <input type="radio" id="radio1" value="NoteTxt" name="radio" />
        <label htmlFor="radio1"><i style={{ color: noteType === 'NoteTxt' ? '#476eca' : '' }} className="far fa-sticky-note fa-lg"></i></label>

        <input type="radio" id="radio2" value="NoteImg" name="radio" />
        <label htmlFor="radio2"><i style={{ color: noteType === 'NoteImg' ? '#476eca' : '' }} className="far fa-images fa-lg"></i></label>

        <input type="radio" id="radio3" value="NoteTodos" name="radio" />
        <label htmlFor="radio3"><i style={{ color: noteType === 'NoteTodos' ? '#476eca' : '' }} className="fas fa-list-ul fa-lg"></i></label>

        <input type="radio" id="radio4" value="NoteVideo" name="radio" />
        <label htmlFor="radio4"><i style={{ color: noteType === 'NoteVideo' ? 'red' : '' }} className="fab fa-youtube-square fa-lg"></i></label>
      </div>

      <button className="addBtnNotes" onClick={this.onAdd}><i className="fas fa-plus-circle fa-lg"></i></button>

      </div >
      <NotesFilter filterBy={this.state.filterBy} onFilter={this.onFilter}></NotesFilter>
      <div className="notes-container">
        {this.state.allNotes.length > 0 && <NotesList onTextChange={this.onTextChange} onUpdate={this.onUpdate} onChangeBcColor={this.onChangeBcColor}
          onEdit={this.onEdit} onCopy={this.onCopy} onShift={this.onShift} selectedNote={this.state.seletedNote} onDelete={this.onDelete} allNotes={this.state.allNotes}></NotesList>
        }
      </div>

    </React.Fragment >
  }
}



