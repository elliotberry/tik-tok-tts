import {getAudio, Voices} from './api.js';
import play from './play.js';

async function main(text) {
  try {
 
    if (!text) {
      console.error('need textttt');
      process.exit(1);
    }
    let buf = await getAudio(text);

    await play(buf);
  } catch (e) {
    console.error(`error ${e.message}`);
    process.exit(1);
  }
}

export default main
