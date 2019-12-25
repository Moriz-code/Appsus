import NoteService from '../services/NoteService.js'
import mapDynamicComponents from '../cmps/Dynamics/mapDynamicComponents.js'

export default class NotesPage extends React.Component {

  state = {
    notes: '',
    componentName: 'NoteTxt',
    filterBy: null
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    var currNote = NoteService.getNotes()
    console.log('Notes', currNote);
  }

  setComponent = (ev) => {
    console.log('setComponent', ev.target.value);
    this.setState({ componentName: ev.target.value })
  }

  getComponent() {
    console.log('getComponent', this.state.componentName);
    return mapDynamicComponents[this.state.componentName]
  }


  render() {
    const Cmp = this.getComponent();
   
    return (<React.Fragment>
      <div>{this.state.notes}</div>
      <Cmp></Cmp>
      <select onChange={this.setComponent}>
        <option value="NoteTxt">T</option>
        <option value="NoteImg">Image</option>
        <option value="NoteTodos">To-Do</option>
        <option value="NoteVideo">Video</option>
      </select>
    </React.Fragment>
    )
  }
}
