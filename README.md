# Collaborative Text Editor

This project is a simple collaborative text editor built with [Quill](https://quilljs.com/), [Yjs](https://yjs.dev/), [y-webrtc](https://github.com/yjs/y-webrtc), [y-quill](https://github.com/yjs/y-quill), and [quill-cursors](https://github.com/quilljs/quill-cursors). It allows multiple users to edit the same document in real-time using peer-to-peer WebRTC connections.

## Features

- Real-time collaborative editing
- Multiple user cursors with names and colors
- Basic rich text formatting (headers, bold, italic, underline, images, code blocks)
- Undo/redo support (local only)
- Peer-to-peer communication (no server required)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server (requires [Vite](https://vitejs.dev/)):

   ```sh
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal) in multiple browser tabs or devices to test collaboration.

## Project Structure

- [`index.html`](index.html): Main HTML file with the editor container.
- [`index.js`](index.js): JavaScript entry point that initializes Quill, Yjs, and collaborative features.
- [`package.json`](package.json): Project metadata and dependencies.

## How It Works

- The Quill editor is initialized in the `#editor` div.
- Yjs creates a shared document (`Y.Doc`) and synchronizes it using `y-webrtc`.
- The Quill editor is bound to the shared Yjs text type via `y-quill`, enabling real-time collaboration.
- `quill-cursors` displays the cursors of other users in the editor.

## License

This project is licensed under the ISC License.

---

**References:**
- [Quill Documentation](https://quilljs.com/docs/)
- [Yjs Documentation](https://docs.yjs.dev/)
- [y-webrtc](https://github.com/yjs/y-webrtc)
- [y-quill](https://github.com/yjs/y-quill)
