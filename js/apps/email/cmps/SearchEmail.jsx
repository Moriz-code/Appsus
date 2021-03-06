export default class SearchEmail extends React.Component {

    changeInput = (ev) => {
        const field = ev.target.name;
        let value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
        console.log(field);
        console.log(value);
        
        this.props.onFilterSearch({[field]:value})       
    }

    render() {
        return <div className="search-email flex align-center">
        <input className="search-input"  type="text"  name="searchBy" value={this.props.searchBy} placeholder="Search..." onChange={this.changeInput}></input>
        <a><i className="mag-input fas fa-search"></i></a>
        </div>
    }
}