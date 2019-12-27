export default function Img(props){
  // console.log('Arrived to Img comp.' , props);
  return <div className="notesImgs"><img src={props.cmp.info}/></div>
}