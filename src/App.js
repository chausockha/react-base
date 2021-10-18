import { useState } from 'react';
import { useEffect } from 'react';
import Content from './conten'

//false, '', 0, null , NAN use ||
//null or undifined use ??

function App() {
  const [show, setShow] = useState();



  return (
    <div style={{ padding: 32 }} className="App">

      <button onClick={() => setShow(!show)}> Click</button>

      {show && < Content />}



    </div>
  );
}

export default App;
