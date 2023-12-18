import './App.css';
import Button from './components/Button';
import ImageCLass from './components/Img';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button nameB="Click me" />
      <ImageCLass src="https://media.vanityfair.com/photos/5e8f9f875752fb00088317c4/16:9/w_1280,c_limit/The-Art-of-Making-Art-About-a-Plague.jpg" />
      <Button nameB="Secondo bottone" />
      </header>
      
    </div>
  );
}

export default App;
