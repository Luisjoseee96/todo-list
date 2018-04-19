// Adds the completed effect


function addItem(text){

  var text = document.getElementById('new-task').value;
  if (text.length === 0) {

  } else {
    var newLi = document.createElement('li');
    var newTask = document.createTextNode(text);
    newLi.appendChild(newTask);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newLi);
    document.getElementById('new-task').value = '';
  }

};

function completedItem(){

}

// function jadenCase(text) {
//   var text = document.getElementById('original').value;
//   //getting the text from the input field, set it equal to variable text
//
//     var newText = text.split(" ").map(function(x){
//       //create a variable newText.  newText is equal to the result of calling the split method on text, and calling the map
//       // method on the resulting array
//       return x[0].toUpperCase() + x.slice(1);
//       //return the first letter of each element in the array (x[0])
//       //concatenate it with the rest of the letters in each element (x.slice(1))
//     }).join(" ");
//     //turn the array back into a sentence
//
//     document.getElementById("editedText").innerHTML = newText;
//     //insert the newText into the document
// };
