jQuery(document).ready(function() {
  var groceries = ["milk","olive oil","frozen pizza","peppercorns","eggs"];
  var endList = [];

  var groceryLists = groceries.map(function(item){
    endList.push(item.toUpperCase());

  });

  endList.sort();

  alert(endList);

});
