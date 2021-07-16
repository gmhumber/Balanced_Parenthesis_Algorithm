function analyzeSequence() {
    const resultSpan = document.querySelector("#result-span");
    let bracketSequence = document.querySelector("#user-input").value;
    let sequenceLength = bracketSequence.length;
    let resultText = "";
    
    if (sequenceLength % 2 !== 0) {
      resultText = "Sequence is NOT BALANCED";
      resultSpan.innerText = resultText;
      return;
    }

    if (sequenceLength === 0) {
        resultText = "The balance property of nothingness cannot be defined";
        resultSpan.innerText = resultText;
        return;
    }
    
    while (sequenceLength > 0) {
      bracketSequence = bracketSequence.replace(/\(\)|\[\]|\{\}/g, "");
      if (bracketSequence.length === sequenceLength) {
        break;
      } else {
        sequenceLength = bracketSequence.length;
      }
    }
    
    if (sequenceLength > 0) {
      resultText = "Sequence is NOT BALANCED";
      resultSpan.innerText = resultText;
    } else {
      resultText = "Sequence is BALANCED";
      resultSpan.innerText = resultText;
    }
}