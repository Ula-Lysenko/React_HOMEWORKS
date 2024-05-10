import './App.css'
import CardBox from "./components/CardBox.jsx";

function App() {
  const title = 'Eurovision 2024';
  const text = 'Malmö Arena will host the 68th Eurovision Song Contest in May 2024, following Loreen\'s win in Liverpool.'

  return (
    <>
      <div className='App'>
        <CardBox title={title} text={text}></CardBox>
      </div>
    </>
  )
}

export default App
