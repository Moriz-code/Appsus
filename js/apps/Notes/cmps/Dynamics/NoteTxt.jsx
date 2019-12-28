import BtnsPanel from '../BtnsPanel.jsx'
export default class Txt extends React.Component {

 

  onEdit = () => {
    this.props.onEdit(this.props.cmp)
  }

  onTextChange = (ev) => {
    this.props.onTextChange(ev)
  }


  render() {
    const { cmp, onDelete, onUpdate, onChangeBcColor, onEdit } = this.props;

    let bcColor = (cmp.style.bccolor)
    // let noteInfo = (cmp.info)
    return (<React.Fragment>
      <div className="Note" style={{backgroundColor: bcColor}} >
        <textarea onChange={this.onTextChange} onClick={this.onEdit} defaultValue={cmp.info}></textarea>
        <BtnsPanel cmp={cmp} onDelete={onDelete} onChangeBcColor={onChangeBcColor} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
      </div>
    </React.Fragment>
    )
  }
}



// onBlur={onSave}



