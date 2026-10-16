// This is optional. I added this code to the personal.html page.

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "harlon's personal app is under construction.";
    speechSynthesis.speak(voice);
}
