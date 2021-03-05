import Welcome from './Welcome';

function App() {
  const style={
    backgroundColor : 'black',
    color:'aqua',
    fontSize:'50px',
    fontWeight:'bold',
    padding:6,
  }

  return (
    <div >
      <Welcome style={style}>class</Welcome>
      <Welcome name="React">function</Welcome>
      <Welcome name="React Component">arrow function</Welcome>
    </div>
  );
}

export default App;
