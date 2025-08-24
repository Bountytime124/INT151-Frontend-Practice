function getFreqOfWords(sentence) {
    if (sentence == null || sentence == undefined) {
        return undefined;
    }
    let arr = sentence.split(" ");
    let words = [];
    let counts = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        if (words.includes(arr[i].toLowerCase())) {
            continue;
        } else {
            words.push(arr[i].toLowerCase());
            for (let j = i; j < arr.length; j++) {
            if (arr[i].toLowerCase() == arr[j].toLowerCase()) {
                count++;
            }
        }
        }
        counts.push(count);
    }
    let result = {};
    for (let i = 0; i < words.length; i++) {
        result[words[i]] = counts[i];
    }
    return result;

}
console.log(getFreqOfWords("Today is present and present is your gift"));
console.log(getFreqOfWords("Do you best just do it"));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));
