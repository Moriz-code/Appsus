import NoteImg from './NoteImg.jsx'
import NoteTodos from './NoteTodos.jsx'
import NoteTxt from './NoteTxt.jsx'
import NoteVideo from './NoteVideo.jsx'

const MapDynamicComponents = (props) => {
  const selectedNote = props.cmp
  switch (selectedNote.type) {
    case 'NoteImg':
      return <NoteImg {...props} />
    case 'NoteTodos':
      return <NoteTodos {...props} />
    case 'NoteTxt':
      return <NoteTxt {...props} />
    case 'NoteVideo':
      return <NoteVideo {...props} />
  }
}

export default MapDynamicComponents