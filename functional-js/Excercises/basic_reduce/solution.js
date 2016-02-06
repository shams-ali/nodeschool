    function countWords(inputWords) {
      return inputWords.reduce(function(countMap,curr){
      	countMap[curr] = ++countMap[curr] || 1
      	return countMap
      },{})
    }

    module.exports = countWords