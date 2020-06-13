import delayer from './utils/delayer';
import textInjector from './utils/text_injector';

import lyrics from './constants/lyrics';

async function main() {
  const lyrics_text_length = lyrics.length;
  let new_line_counter = 0;
  let terminalElement = document.getElementById('terminal');

  try {
    for(let i=0; i < lyrics_text_length; ++i) {
      let nextText = null;
      if (lyrics[i] === '\n') {
        new_line_counter+=1;
        nextText = '<br/>';
        await delayer(333 + new_line_counter * 333);
      } else {
        new_line_counter=0;
        nextText = lyrics[i];
      }
      await delayer(100);
      textInjector(nextText, terminalElement);
    }
  } catch(e) {

  }
}

main();