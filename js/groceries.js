jQuery(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var input1 = $("#item1").val()
    var input2 = $("#item2").val()

    var groceries = [input1, input2];
    groceries.sort();

    var groceryList = groceries.map(function(grocery) {
      return grocery.toUpperCase();


    });
    groceryList.forEach(function(grocery){
      $(".groceryList").append("<li>"+grocery+"</li>");
    });

  });
});
