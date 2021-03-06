function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait() {
    await sleep(200);
}

export async function speak(text, language = "Google US English") {
    var msg = new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    wait();
    voices = speechSynthesis.getVoices();
    wait();
    // Set the text.
    msg.text = text;

    // Set the attributes.
    msg.volume = parseFloat(20);
    msg.rate = parseFloat(1);
    msg.pitch = parseFloat(1);

    msg.voice = voices[0];
    for(let i = 0; i < voices.length ; i++) {
        if(voices[i].name === language) {
            msg.voice = voices[i];
        }
    }

    console.log(msg.voice);

    // Queue this utterance.
    window
        .speechSynthesis
        .speak(msg);
};

speak("System ready");