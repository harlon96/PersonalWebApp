// You can code JavaScript here

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "harlon's personal app is under construction.";
    speechSynthesis.speak(voice);
}
