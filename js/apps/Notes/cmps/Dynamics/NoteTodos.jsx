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



  render() {
    const { cmp, onDelete, onUpdate, onChangeBcColor } = this.props;
    let bcColor = (cmp.style.bccolor)
    
    return (<React.Fragment>
      <div className="Note" style={{ backgroundColor: bcColor }} onClick={this.onEdit}>
        <div>
        <textarea className="txtTA" defaultValue={this.props.cmp.info}></textarea>
       
        </div>
        
              {/* <textarea onChange={this.onTextChange} defaultValue={this.props.cmp.info}></textarea> */}
       <BtnsPanel cmp={cmp} onChangeBcColor={onChangeBcColor} onDelete={onDelete} onUpdate={onUpdate}></BtnsPanel>
      </div>

    </React.Fragment>)
          }
        
        }
        
        
        
// export default function (props){
//   // console.log('Arrived to Todos comp.' , props);
//   return 
// }