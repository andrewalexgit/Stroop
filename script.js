// Game settings
var words = [ "Red", "Green", "Blue", "Yellow", "Purple" ];
var colors = [ "#ff0000", "#00ff00", "#0000ff", "#faff00", "#f400fc" ];
var usedWords = [ "", "", "", "", "" ];
var ans = "Red";
var sameElem = 0;

// Time settings
var startTime = 0;
var endTime = 0;
var finalTime = 0;
var avgMatchedTotal = 0;
var avgUnMatchedTotal = 0;
var avgMatchedCount = 0;
var avgUnMatchedCount = 0;

function generateRandom() {

    document.getElementById("btnAns").value = "Randomize";

    var now = new Date();
    var utc_now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    startTime = utc_now.getTime();

    for (i = 1; i <= 5; i++) {

        var n = Math.floor(Math.random() * 5);
        var k = Math.floor(Math.random() * 5);

        sameElem = (n == k) ? "elements matching" : "elements not matching";

        document.getElementById("link" + i).style.color = colors[n];
        document.getElementById("link" + i).innerHTML = words[k];
        usedWords[i-1] = words[k];

    }

    ans = usedWords[Math.floor(Math.random() * 5)];

    document.getElementById("questionStr").innerHTML = "Choose the object labeled " + ans;

}

function check(elem) {

    var now = new Date();
    var utc_now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    if (elem.innerHTML === ans) {
        endTime = utc_now.getTime();
        finalTime = endTime - startTime;
        document.getElementById("statsStr").innerHTML = "Last task completed in " + finalTime + " milliseconds with " + sameElem;

        if (sameElem == "elements matching") {
            avgMatchedCount++;
            avgMatchedTotal += finalTime;
        } else {
            avgUnMatchedCount++;
            avgUnMatchedTotal += finalTime;
        }

        document.getElementById("avgMatched").innerHTML = "Average time (matching colors and text): " + (avgMatchedTotal/avgMatchedCount);
        document.getElementById("avgUnMatched").innerHTML = "Average time (un-matched colors and text): " + (avgUnMatchedTotal/avgUnMatchedCount);
        document.getElementById("totalQuestions").innerHTML = "Total questions finished: " + (avgMatchedCount + avgUnMatchedCount);

        generateRandom();
    } else {
        alert("You've chosen the wrong object, try again!");
    }

}