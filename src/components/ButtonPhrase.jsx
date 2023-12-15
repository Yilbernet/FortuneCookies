import React from 'react';
import getRandomFromArr from '../services/getRandomFromArr';
import phrases from '../utils/phrases.json';
import bgImages from '../utils/bgImages.json';

const ButtonPhrase = ({setPhraseRandom, setBgImageRandom}) => {

    const handleChangePhrase = () => {
        const newPhrase = getRandomFromArr(phrases);
        setPhraseRandom(newPhrase);
        const newBg = getRandomFromArr(bgImages);
        setBgImageRandom(newBg);
    }

  return (
    <button
      className='btn'
      onClick={handleChangePhrase}
    >Ver otro</button>
  )
}

export default ButtonPhrase;