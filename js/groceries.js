jQuery(document).ready(function() {
  $("#blanks form").submit(function(event){
    // event.preventDefault();
    var input1 = $("input#item1").val()
    var input2 = $("input#item2").val()

    var groceries = [input1,input2];

    // var blanks = ["item1", "item2"];
    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    //   endList = [];
    //   var groceryList = blanks.map(function(item){
    //     endList.push(item.toUpperCase());

    });


    // var groceries = [];
    // var endList = [];



  });

  endList.sort();

  alert(endList);

});
});
