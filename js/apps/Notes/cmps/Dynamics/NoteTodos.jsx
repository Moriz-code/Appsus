import BtnsPanel from '../BtnsPanel.jsx'

export default class Todos extends React.Component {
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
      <div className="Note" style={{ backgroundColor: bcColor }} onClick={this.onEdit}>
        <div>
          <ul>
            <li>{cmp.info}</li>
            <li>{cmp.info}</li>
            <li>{cmp.info}</li>
          </ul>
        </div>
        {/* <textarea onChange={this.onTextChange} defaultValue={this.props.cmp.info}></textarea> */}
        <BtnsPanel cmp={cmp} onSetBcColor={onSetBcColor} onDelete={onDelete} onUpdate={onUpdate}></BtnsPanel>
      </div>

    </React.Fragment>)
  }

}



// export default function (props){
//   // console.log('Arrived to Todos comp.' , props);  
//   return 
// }