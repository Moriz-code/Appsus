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

  onShift = () =>{
    this.props.onShift(this.props.cmp)
  }




  render() {
    const { cmp, onDelete, onUpdate, onChangeBcColor, onEdit ,onTextChange ,onShift} = this.props;
    let bcColor = (cmp.style.bccolor)
    let url = this.props.cmp.info;
    if (url.includes('youtube')) {
      const videoEmbdedUrl = this.getUrlId()
      return (

      <div className="Note swing-in-top-fwd" style={{ backgroundColor: bcColor }} onClick={this.onEdit}>
      <button className="pinBtn" onClick={this.onShift}><i className="fas fa-map-pin fa-lg"></i></button>
        <iframe src={videoEmbdedUrl}></iframe> 
        <BtnsPanel cmp={cmp} onDelete={onDelete} onTextChange={onTextChange} onChangeBcColor={onChangeBcColor} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
      </div>
      )
    }
    else {
      return (
        <div>
          <source src={url} type="video/mp4" />
          <BtnsPanel cmp={cmp} onDelete={onDelete} onShift={onShift} onChangeBcColor={onChangeBcColor} onCopy={onCopy} onEdit={onEdit} onUpdate={onUpdate}></BtnsPanel>
        </div>
      )
    }
  }
}



