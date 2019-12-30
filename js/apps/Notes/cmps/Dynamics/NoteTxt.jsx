import BtnsPanel from '../BtnsPanel.jsx'
export default class Txt extends React.Component {

  onEdit = () => {
    this.props.onEdit(this.props.cmp)
  }

  onTextChange = (ev) => {
    this.props.onTextChange(ev)
  }

  onShift = () =>{
    this.props.onShift(this.props.cmp)
  }

  onShift = () =>{
    this.props.onShift(this.props.cmp)
  }


  render() {
    const { cmp, onDelete, onUpdate, onChangeBcColor, onEdit, onCopy, onShift } = this.props;

    let bcColor = (cmp.style.bccolor)
    // let noteInfo = (cmp.info)
    return (<React.Fragment>
     
      <div  className="Note swing-in-top-fwd" style={{ backgroundColor: bcColor }} >
      <button  className="pinBtn" onClick={this.onShift}><i className="fas fa-map-pin fa-lg"></i></button>
        <div className="note-content" onClick={this.onEdit}>
            <textarea className="txtTA" onChange={this.onTextChange} defaultValue={cmp.info}></textarea>
        </div>
        <div>
          <BtnsPanel cmp={cmp} onDelete={onDelete} onCopy={onCopy} onChangeBcColor={onChangeBcColor} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
        </div>
      </div>
    </React.Fragment>
    )
  }
}



// onBlur={onSave}



