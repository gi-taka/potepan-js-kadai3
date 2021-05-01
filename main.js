$(document).ready(function() {
  let input_value = "";
  let item_keyword = "";
  const item_numbers = ["one", "two", "three", "four"];
  $(".item-search").on("input", function(event) {
    input_value = $(".item-search").val();
    for (let index = 0; index < item_numbers.length; index++) {
      item_keyword = $("." + item_numbers[index]).text();
      if (item_keyword.includes(input_value) == false) {
        $("." + item_numbers[index]).parent().addClass("hidden");
      }
      else {
        $("." + item_numbers[index]).parent().removeClass("hidden");
      }
    }
  });
});
