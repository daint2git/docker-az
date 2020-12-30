import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
  const [data1, setData1] = React.useState({});
  const [data2, setData2] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const [res1, res2] = await Promise.all([
        axios.get('http://localhost/service_a'),
        axios.get('http://localhost/service_b'),
      ]);

      setData1(res1.data);
      setData2(res2.data);
    })();
  }, []);

  return (
    <div>
      <h3>service a</h3>
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      <br />
      <h3>service b</h3>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
