import React, { Suspense } from 'react';
import './App.css';
import ExampleComponent from './ExampleComponent';

function App() {
  return (
    // Even though this is not an SSR app, if it was, Suspense would have worked as well
    <Suspense fallback={<p>Loading...</p>}>
      <div className="App">
        <ExampleComponent />
      </div>
    </Suspense>

  );
}

export default App;
