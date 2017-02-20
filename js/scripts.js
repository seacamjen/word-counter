$(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var inputString;
    var splitArray = [];

    inputString = $("#formInput").val();
    console.log(inputString);
    splitArray = inputString.match(/[a-z]+/gi);
    console.log(splitArray);

    var wordCount = splitArray.reduce(function(allWords, word){
      if(word in allWords){
        allWords[word]++;
      } else{
        allWords[word] = 1;
      }
      return allWords;
    }, {});
    console.log(wordCount);
  });
});
