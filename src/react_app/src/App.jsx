import './App.css'

import Collapse from "./components/Collapse.jsx";

function App() {
    const text =
        `And, no woman, no cry.
         No woman, no cry`;

  return (
    <>
      <div className='App'>
          <Collapse text={text} opened={true} />
      </div>
    </>
  )
}

export default App
