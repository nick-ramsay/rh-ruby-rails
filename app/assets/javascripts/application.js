//= require jquery

function testFunction() {
  var testData;
  $.ajax({
    url: "/orders",
    type: "get",
    dataType: "json",
    success: function (data) { testData = data }
  }).then(function () {
    console.log(testData);
  })
}