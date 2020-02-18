//= require jquery

function renderData() {
  var orderData;
  $.ajax({
    url: "/orders",
    type: "get",
    dataType: "json",
    success: function (data) { orderData = data }
  }).then(function () {
    console.log(orderData);
    for (i = 0; i < orderData.length; i++) {
    $(".order-list").append('<div class="order-container" id="order-container' + i +'">');
    $("#order-container" + i).append('<div class="order-title-container"><h5 class="order-title">Agency Name - Campaign, Address, Suburb</h5></div>');
    $("#order-container" + i).append('<div class="order-details-container" id="order-details-container' + i +'"></div>');
    $("#order-details-container" + i).append('<div class="order-item-name"><span>Order Item Name</span></div>');
    $("#order-details-container" + i).append('<div class="order-item-functions" id="order-item-functions'+ i +'"></div>');
    $("#order-item-functions" + i).append('<span class="order-download-link">Download Artwork</span><span class="order-line-break"> | </span><span class="order-status-change">Change Status</span><span class="order-line-break"> | </span><span class="order-status">Current Order Status</span>');
  }
  })
}