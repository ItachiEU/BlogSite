import React, {useEffect, useState} from 'react';

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/app/test").then(result => result.text()).then(text => setResponse(text));
  }, []);

  return (
      <div>
        <h1>Hello world!</h1>
        <h3>Server says: {response}</h3>
      </div>
  );
}

export default App;
