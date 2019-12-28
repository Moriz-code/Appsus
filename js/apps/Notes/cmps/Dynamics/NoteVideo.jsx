import BtnsPanel from '../BtnsPanel.jsx'


export default class Video extends React.Component {

  getUrlId = () => {

    let url = this.props.cmp.info;
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp)

    if (match && match[2].length == 11) {
      return match[2]
    }
    else {
      return 'Ooops! Are you sure it is the correct link?'
    }
  }

    render (){
      console.log(this.getUrlId());
      
      return(<div><iframe width="420" height="345"> </iframe></div>)
    }
 

  
}




//   render() {
//     const { cmp, onDelete, onUpdate, onChangeBcColor, onEdit } = this.props;

//     let bcColor = (cmp.style.bccolor)
//     // let noteInfo = (cmp.info)
//     return (<React.Fragment>
//       <div style={{backgroundColor: bcColor}} >
//         <textarea onChange={this.onTextChange} onClick={this.onEdit} value={cmp.info}></textarea>
//         <BtnsPanel cmp={cmp} onDelete={onDelete} onChangeBcColor={onChangeBcColor} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
//       </div>
//     </React.Fragment>
//     )
//   }
// }

