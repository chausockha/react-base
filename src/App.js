
import TodoFeature from './features/Todo'

//false, '', 0, null , NAN use ||
//null or undifined use ??

function App() {
  return (
    <div style={{ padding: 32 }} className="App">

      <TodoFeature></TodoFeature>
    </div>
  );
}

export default App;
