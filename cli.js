import {getAudio, Voices} from './api.js';
import play from './play.js';
async function main() {
  try {
    let text = process.argv[2];
    if (!text) {
      console.error('Usage: tts <text>');
      process.exit(1);
    }
    let buf = await getAudio(text);

    await play(buf);
  } catch (e) {
    console.error(`error ${e.message}`);
    process.exit(1);
  }
}

main();
