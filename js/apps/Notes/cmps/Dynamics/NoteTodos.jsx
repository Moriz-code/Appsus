// import NoteService from '../../services/NoteService.js'
import BtnsPanel from '../BtnsPanel.jsx'

export default class Todos extends React.Component {

  onEdit = () => {
    this.props.onEdit(this.props.cmp)
  }

  onTextChange = (ev) => {
    this.props.onTextChange(ev)
  }

  // createToDo = () =>{
  //   NoteService.createToDo(this.props.cmp.info)
  // }


  onShift = () =>{
    this.props.onShift(this.props.cmp)
  }



  render() {
    const { cmp, onDelete, onUpdate, onChangeBcColor, onShift } = this.props;
    let bcColor = (cmp.style.bccolor)
    
    return (<React.Fragment>
      <div className="Note" style={{ backgroundColor: bcColor }} onClick={this.onEdit}>
      <button className="pinBtn" onClick={this.onShift}><i className="fas fa-map-pin fa-lg"></i></button>
        <div>
        <textarea className="txtTA" defaultValue={this.props.cmp.info}></textarea>
       
        </div>
        
              {/* <textarea onChange={this.onTextChange} defaultValue={this.props.cmp.info}></textarea> */}
       <BtnsPanel cmp={cmp} onShift={onShift} onChangeBcColor={onChangeBcColor} onShift={onShift} onDelete={onDelete} onUpdate={onUpdate}></BtnsPanel>
      </div>

    </React.Fragment>)
          }
        
        }
        
        
        
// export default function (props){
//   // console.log('Arrived to Todos comp.' , props);
//   return 
// }