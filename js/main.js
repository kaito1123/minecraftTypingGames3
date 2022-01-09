'use strict';

{
  const target = document.getElementById('target');

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }
  
  const words = [
    'CREATIVEMODE',
    'SURVIVALMODE',
    'ENCHANT',
    'COMMAND',
    'SKELETONRIDER',
  ];

  let word;
  let loc = 0;
  let startTime;
  let isPlaying;

  document.addEventListener('click', () => {
    const disabled = document.getElementById('disabled');
    disabled.remove();
    
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedaTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedaTime} seconds!`;
        return;
      }

      setWord();
    }
  });
}