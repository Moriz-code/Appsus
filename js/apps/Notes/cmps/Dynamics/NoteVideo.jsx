export default function Video(props) {
  // console.log('Arrived to Video comp.' , props);
  let videoSrc = {}
  return <div> <iframe width="420" height="345" src={props.cmp.info}>
  </iframe></div>
}
