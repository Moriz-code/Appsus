
export default class Txt extends React.Component {


  onDelete = () => {
    this.props.onDelete(this.props.cmp)
  }

  onEdit = (ev) => {
      // console.log('edit' , ev.target.value);
      let editedInfo = ev.target.value
      this.props.onEdit(this.props.cmp, ev)
  }

  onUpdate = () => {
    this.props.onUpdate(this.props.cmp)

  }


  render() {
    return (
      <div onClick={this.onEdit}>
        <textarea onChange={this.onEdit} defaultValue={this.props.cmp.info}></textarea>
        <button onClick={this.onDelete}>Delete</button>
        <button onClick={this.onUpdate}>Update</button>
      </div>
    )
  }
}

// onBlur={onSave}



