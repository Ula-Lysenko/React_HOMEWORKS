import './App.css'

import ListGroup from "./components/ListGroup.jsx";

function App() {

  return (
      <>
          <div className='App'>
              <h4>What do you want now?</h4>
              <ListGroup>
                  <p>Kosta Rika</p>
                  <p>Jamaica</p>
                  <p>Mauritius</p>
              </ListGroup>
          </div>
      </>
  )
}

export default App
