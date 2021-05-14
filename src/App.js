import './App.css';
import Header from './components/Header';
import StartButton from './components/StartButton';

function App() {
  return (
    <div className="App">
      <Header />
      <StartButton />
    </div>
  );
}

export default App;

// Setup components
// Header, Start Button, Man, Word, Keyboard, Clue
// Components functionality:
// Start Button - generate a word - display that word blanked out in Word component
