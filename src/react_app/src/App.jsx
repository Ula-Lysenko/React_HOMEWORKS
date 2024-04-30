import './App.css'

import Progress from "./components/Progress.jsx";

function App() {

    return (
        <>
            <div className='App'>
                <h3>Progress</h3>
                <Progress percentage={40} />
            </div>
        </>
    )
}

export default App
