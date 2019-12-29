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
      <div className="Note swing-in-top-fwd">
        <div onClick={this.onEdit} className="note-content" style={{ backgroundColor: bcColor }} >
            <textarea onChange={this.onTextChange} defaultValue={cmp.info}></textarea>
        </div>
        <div>
          <BtnsPanel cmp={cmp} onDelete={onDelete} onChangeBcColor={onChangeBcColor} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
        </div>
      </div>
    </React.Fragment>
    )
  }
}



// onBlur={onSave}



