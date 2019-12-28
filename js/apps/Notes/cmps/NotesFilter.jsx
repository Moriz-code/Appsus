
export default class NotesFilter extends React.Component {

  onSearch = (ev) => {
    const field = ev.target.name;
    const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
    this.props.onFilter(field,value)
  }


  render() {
    return <div>
        {/* <input type="text" value={props.filterBy.name} name="name" onChange={inputChange}></input> */}

      <input type="text" placeholder="looking for specific note?" value={this.props.filterBy.name}
        onChange={this.onSearch} name="name"></input>
    </div>
  }
}




