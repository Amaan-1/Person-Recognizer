Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    png_quality: 500
})

var live_camera = document.getElementById("camera");

Webcam.attach("#camera");

function snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='taken_snapshot' src='" + data_uri + "'>";
    });
}

console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gGNxL-MeA/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}