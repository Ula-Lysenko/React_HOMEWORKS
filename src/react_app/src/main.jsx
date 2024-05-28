import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import MarkdownEditor from "./components/MarkdownEditor.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MarkdownEditor onContentChange={console.log} />
      10 Celebrities Whose Children Have Ordinary Jobs.
  </React.StrictMode>,
);
