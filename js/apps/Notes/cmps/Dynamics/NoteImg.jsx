import BtnsPanel from '../BtnsPanel.jsx'

export default class Img extends React.Component {
  onEdit = () => {
    this.props.onEdit(this.props.cmp)
  }

  onTextChange = (ev) => {
    this.props.onTextChange(ev)
  }

  render() {
    const { cmp, onDelete, onUpdate, onSetBcColor } = this.props;
    let bcColor = (cmp.style.bccolor)
    return (<React.Fragment>
      <div style={{ backgroundColor: bcColor }} onClick={this.onEdit}>
        <div className="notesImgs"><img src={cmp.info} /></div>
        {/* <textarea onChange={this.onTextChange} defaultValue={this.props.cmp.info}></textarea> */}
        <BtnsPanel cmp={cmp} onSetBcColor={onSetBcColor} onDelete={onDelete} onUpdate={onUpdate}></BtnsPanel>
      </div>

    </React.Fragment>)
  }
}

