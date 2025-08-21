import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { QuillBinding } from 'y-quill'
import Quill from 'quill'
import QuillCursors from 'quill-cursors'

Quill.register('modules/cursors', QuillCursors)//used because QuillCursors is a module that provides collaborative cursors for the Quill editor. It allows multiple users to see each other's cursors in real-time, enhancing the collaborative experience.

const quill = new Quill(document.querySelector('#editor'), {
  modules: {
    cursors: true,
    toolbar: [
      // adding some basic Quill content features
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ],
    history: {
      // Local undo shouldn't undo changes
      // from remote users
      userOnly: true
    }
  },
  placeholder: 'Start collaborating...',
  theme: 'snow' // 'bubble' is also great
})

// A Yjs document holds the shared data
const ydoc = new Y.Doc()

const provider = new WebrtcProvider('quill-demo-room', ydoc)

// Define a shared text type on the document
const ytext = ydoc.getText('quill')

// "Bind" the quill editor to a Yjs text type.
const binding = new QuillBinding(ytext, quill, provider.awareness)

// Remove the selection when the iframe is blurred
window.addEventListener('blur', () => { quill.blur() })
//The above syntax is used because....(down)
// User Experience: Preventing accidental edits when the user is not actively interacting with the editor.
// Consistency: Ensuring the editor behaves predictably when the user switches between tabs or applications.
// For example, if a user is typing in the editor and switches to another tab, this code will remove the cursor and selection from the editor. When the user returns, they will need to click back into the editor to continue typing.
