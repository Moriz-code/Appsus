import BtnsPanel from '../BtnsPanel.jsx'


export default class Video extends React.Component {

  onEdit = () => {
    this.props.onEdit(this.props.cmp)
  }

  getUrlId = () => {
    let url = this.props.cmp.info;
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp)

    if (match && match[2].length == 11) {
      return 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1">'
    }
    else {
      return 'Ooops! Are you sure it is the correct link?'
    }

  }

  render() {
    const { cmp, onDelete, onUpdate, onChangeBcColor, onEdit } = this.props;
    
    let url = this.props.cmp.info;
    if (url.includes('youtube')) {
      const videoEmbdedUrl = this.getUrlId()
      return (<div onClick={this.onEdit} ><iframe width="420" height="345" src={videoEmbdedUrl}></iframe>
          <BtnsPanel cmp={cmp} onDelete={onDelete} onChangeBcColor={onChangeBcColor} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
         </div>
         )
    }
    else {
      return ( 
        <div>
        <source src={url} type="video/mp4"/>
        <BtnsPanel cmp={cmp} onDelete={onDelete} onChangeBcColor={onChangeBcColor} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
        </div>
      )
    } 
  }
}

