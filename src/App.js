import React from 'react';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
