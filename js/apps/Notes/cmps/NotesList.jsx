// import Note from "../services/AddNote"
import NotePreview from './NotePreview.jsx'
import MapDynamicComponents from './Dynamics/mapDynamicComponents.js'

export default class NotesList extends React.Component {

  getComponent = () => {
    if (this.state.selectedNote) {
      // console.log(this.state.selectedNote.type);
      return mapDynamicComponents[this.state.selectedNote.type]
    }
    else {
      return 'NoteTxt'
    }
  }

render(){
  const {allNotes} = this.props
  // console.log(this.props);
  var noteCmps = allNotes.map(cmp => <MapDynamicComponents cmp={cmp}/>)
  return ( noteCmps)
}
}
