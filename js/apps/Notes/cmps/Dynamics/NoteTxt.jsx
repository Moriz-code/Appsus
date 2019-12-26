export default function Txt(props){
  console.log('Arrived to Txt comp.' , props);
  return <div>{props.cmp.id}</div>
}