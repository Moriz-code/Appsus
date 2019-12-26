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
      <div onClick={this.props.onEdit} className="editBtnsNote">
        <button onClick={this.props.onDelete}>Delete</button>
      </div>

    </div>
  }
}


