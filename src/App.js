import { useState } from 'react';
import './app.css';
import RecipeList from './components/recipeList';
import Home from './layouts/home';
import Nav from './layouts/nav';

function App() {

  const [result, setResult] = useState('');

  const handleResult = (data) => {
    setResult(data);
  }

  return (
    <div className="App">
      {result ? <Nav handleResult={handleResult}/> : <Home handleResult={handleResult}/>}
      {result !== '' ? <RecipeList data={result}/> : null}
    </div>
  );
}

export default App;
