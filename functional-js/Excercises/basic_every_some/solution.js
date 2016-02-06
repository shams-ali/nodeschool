    function countWords(inputWords) {
      return inputWords.reduce(function(acc,curr){
      	if(acc[curr] = curr){
      		return ++acc[curr]
      	}else{acc[curr] = 1}
      },{})
    }

    module.exports = countWords