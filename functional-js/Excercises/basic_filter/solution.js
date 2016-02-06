    function getShortMessages(messages) {
      return messages.filter(function(i){
      	return i.message.length < 50
      }).map(function(j){
      	return j.message
      })
    }

    module.exports = getShortMessages