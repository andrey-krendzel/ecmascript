import logo from './logo.svg';
import './App.css';
import exportedFunction from './Exports';
import {notDefault as exportedFunction2} from './Exports';
import Product from './domain/Product';
import {Category, Football} from './domain/Category';

function App() {

  // In PDFList.js, I try out all the features from the PDF
  // In here (App.js), I do the actual products task

  const classProduct1 = new Product("Test product", 10, "08/09", 15, Football);
  console.log(classProduct1.toString());




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
