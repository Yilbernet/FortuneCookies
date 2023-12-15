import { useState } from 'react';
import './App.css';
import phrases from './utils/phrases.json';
import getRandomFromArr from './services/getRandomFromArr';
import Phrase from './components/Phrase';
import ButtonPhrase from './components/ButtonPhrase';
import bgImages from './utils/bgImages.json';

function App() {

  const [phraseRandom, setPhraseRandom] = useState(getRandomFromArr(phrases));
  const [bgImageRandom, setBgImageRandom] = useState(getRandomFromArr(bgImages));
  const styleBackground = {
    backgroundImage: `url(./assets/fondo${bgImageRandom}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className='container' style={styleBackground}>
      {/* <h1>Galleta de la fortuna</h1> */}
      <Phrase
        phraseRandom={phraseRandom}
      />
      <ButtonPhrase
        setPhraseRandom={setPhraseRandom}
        setBgImageRandom={setBgImageRandom}
      />
    </div>
  )
}

export default App;
