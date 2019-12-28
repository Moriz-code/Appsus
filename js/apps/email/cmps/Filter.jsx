
export default class Filter extends React.Component {

    onChangefilter = (ev) => {
        const field = ev.target.value;
        this.props.onSetFilter(field)
        // console.log(field)
    }

    render() {
        return <div>
            <select class="select-filter" onChange={this.onChangefilter}>
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
        </div>
    }

}