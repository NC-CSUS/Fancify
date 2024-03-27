function doAlert(){
    alert("Hello World!");
    document.getElementById("textarea").style.fontSize = "24px";
}

function moo() {
    var textarea = document.getElementById("textarea");
    var str = textarea.value;
    var sentences = str.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        var words = sentence.split(" ");

        for (var j = 0; j < words.length; j++) {
            if (words[j].trim() !== "") {
                words[j] = words[j] + "-Moo";
            }
        }

        sentences[i] = words.join(" ");
    }
    str = sentences.join(". ");
    textarea.value = str;
}



function changeFontSize() {
    var radioButtons = document.getElementsByName("option");
    var textarea = document.getElementById("textarea");

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            if (radioButtons[i].value === "FancyShmancy") {
                textarea.style.fontSize = "24px";
                textarea.style.color = "blue";
                textarea.style.textDecoration = "underline";
                textarea.style.fontWeight = "bold";
            } else if (radioButtons[i].value === "BoringBetty") {
                textarea.style.fontSize = "12px";
                textarea.style.color = "black";
                textarea.style.textDecoration = "none";
                textarea.style.fontWeight = "normal";
            }
        }
    }
}
