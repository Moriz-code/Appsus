export default class BtnsPanel extends React.Component {

  onUpdate = () => {
    this.props.onUpdate(this.props.cmp)
  }

  onDelete = () => {
    console.log('dlete', this.props.cmp);
    this.props.onDelete(this.props.cmp)
  }


  onChangeBcColor = (ev) => {
    console.log(ev.target.value);
    this.props.onChangeBcColor(ev)
  }






  render() {

    return (
      <div>
        <button onClick={this.onDelete}>Delete</button>
        <button onClick={this.onUpdate}>Update</button>

        <div className="color" onChange={this.onChangeBcColor}>

          <input type="radio" name="color" id="red" value="red" value="red" />
          <label><span className="red"></span></label>

          <input type="radio" name="color" id="green" value="green" />
          <label htmlFor="green"><span className="green"></span></label>

          <input type="radio" name="color" id="yellow" value="yellow" />
          <label htmlFor="yellow"><span className="yellow"></span></label>

          <input type="radio" name="color" id="olive" value="olive" />
          <label htmlFor="olive"><span className="olive"></span></label>

          <input type="radio" name="color" id="orange" value="orange" />
          <label htmlFor="orange"><span className="orange"></span></label>
        </div>

      </div>
    )
  }
}


