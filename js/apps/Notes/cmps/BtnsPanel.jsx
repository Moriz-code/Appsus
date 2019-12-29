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
      <React.Fragment>
      <div className="BtnPanel">

        <button><i className="fas fa-map-pin fa-lg"></i></button>
        <button><i className="far fa-copy fa-lg"></i></button>

        <button onClick={this.onUpdate}><i className="far fa-save fa-lg"></i></button>

        <button onClick={this.onDelete}><i className="far fa-trash-alt fa-lg"></i></button>

      </div>
      <div className="color" onChange={this.onChangeBcColor}>

        <input type="radio" name="color" id="red" value="red" value="#FF8B94" />
        <label><span className="red"></span></label>
      
        <input type="radio" name="color" id="yellow" value="#fbbd08" />
        <label htmlFor="yellow"><span className="yellow"></span></label>
        
        <input type="radio" name="color" id="orange" value="#FFD3B6" />
        <label htmlFor="orange"><span className="orange"></span></label>

        <input type="radio" name="color" id="green" value="#7AB5B5" />
        <label htmlFor="green"><span className="green"></span></label>

        <input type="radio" name="color" id="blue" value="#476eca" />
        <label htmlFor="blue"><span className="blue"></span></label>
        
        <input type="radio" name="color" id="pink" value="#F7B5DF" />
        <label htmlFor="pink"><span className="pink"></span></label>

        <input type="radio" name="color" id="purple" value="#BA89DB" />
        <label htmlFor="purple"><span className="purple"></span></label>

      </div>

      </React.Fragment>
    )
  }
}
