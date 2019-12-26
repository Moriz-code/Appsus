export default class NotePreview extends React.Component {

  onDelete = () => {
    this.props.onDelete(this.props.note)
  }

  onEdit = () => {
    this.props.onEdit(this.props.note)
  }


  render() {
    return <div>
      {this.props.note.info.txt}
      <div onClick={this.onEdit} className="AllNotes">
        <button onClick={this.onDelete}>Delete</button>
      </div>

    </div>
  }
}


