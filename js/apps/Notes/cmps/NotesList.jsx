// import Note from "../services/AddNote"

export default function NotesList(props) {
  return <li key={props.note.id}>{props.note.info.txt}</li>
}


