//Given a non-empty list of words, return the k most frequent elements.
//Your answer should be sorted by frequency from highest to lowest.
//If two words have the same frequency, then the word with the lower alphabetical order comes first.
//topfrequent

var topKFrequent = function (words, k) {
    //create an object
    const mappings = {}
    for (let i = 0; i < words.length; i++) {
        mappings[words[i]] = mappings[words[i]] + 1 || 1
    }
    const sorted = Object.keys(mappings).sort((a, b) => {
        if (mappings[b] === mappings[a]) {
            return a > b ? 1 : -1
        }
        return mappings[b] - mappings[a]
    })
    return sorted.slice(0, k)


};