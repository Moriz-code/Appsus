// import Note from "../services/AddNote"
import NotePreview from './NotePreview.jsx'

export default class NotesList extends React.Component {
  render() {
    const { onEdit, selectedNote, onDelete, allNotes } = this.props
    return (
      (allNotes && <div>
        {allNotes.map(note => <NotePreview note={note} onEdit={onEdit} selectedNote={selectedNote} onDelete={onDelete}></NotePreview>)}
      </div>)
    )
  }
}


