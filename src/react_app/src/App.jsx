import DefinitionsList from "./components/DefinitionsList.jsx";

function App() {
  const definitions = [
    { dt: 'Coffee', dd: 'Black hot drink', id: 1 },
    { dt: 'Milk', dd: 'White cold drink', id: 2 },
  ];

  return (
    <>
      <div className='App'>
        <h2>List</h2>
        <DefinitionsList data={definitions} />
      </div>
    </>
  )
}

export default App
