//= require jquery

var orderCardData = [];
var currentCardData = {};
var orderData = [];
var orderItemData = [];
var agencyData = [];
var campaignData = [];

function fetchOrders() {
  $.ajax({
    url: "/orders",
    type: "get",
    dataType: "json",
    success: function (data) {
      orderData = data,
        console.log(data),
        compileCardData()
    }
  });
}

function fetchOrderDetails(orderIndex) {
  for (i = 0; i < orderCardData.length; i++) {
    console.log(orderIndex);
  }
}

function fetchCampaign(orderIndex) {
  var orderIndex = orderIndex;
  var campaignID = orderCardData[orderIndex].orderData.campaign_id;
  console.log(campaignID);
  console.log(orderIndex);
  $.ajax({
    url: "/campaign?campaign_id=" + campaignID,
    type: "get",
    dataType: "json",
    success: function (data) {
      console.log(data),
      console.log(orderCardData[orderIndex]);
      orderCardData[orderIndex].campaignData = data,
        $('#order-title' + orderIndex).html("Agency Name" + (data.address != undefined ? ": " + data.address:"")+ (data.suburb_name != undefined ? ", " + data.suburb_name:""));
    }
  })
}

function compileCardData() {

  for (i = 0; i < orderData.length; i++) {

    currentCardData = {
      orderID: "",
      orderData: {},
      agencyData: {},
      campaignData: {},
      orderItems: {}
    };

    currentCardData.orderID = orderData[i].id;
    currentCardData.orderData = orderData[i];
    orderCardData.push(currentCardData);
  }
  console.log(orderCardData);
  renderCards();
}

function renderCards() {
  console.log(orderCardData);
  for (i = 0; i < orderCardData.length; i++) {
    $(".order-list").append('<div class="order-container" id="order-container' + i + '">');
    $("#order-container" + i).append('<div class="order-title-container"><h5 class="order-title" id="order-title' + i + '">Loading...</h5></div>');
    $("#order-container" + i).append('<div class="order-details-container" id="order-details-container' + i + '"></div>');
    $("#order-details-container" + i).append('<div class="order-item-name"><span>Order Item Name</span></div>');
    $("#order-details-container" + i).append('<div class="order-item-functions" id="order-item-functions' + i + '"></div>');
    $("#order-item-functions" + i).append('<span class="order-download-link">Download Artwork</span><span class="order-line-break"> | </span><span class="order-status-change">Change Status</span><span class="order-line-break"> | </span><span class="order-status">Current Order Status</span>');
    fetchCampaign(i);
  }
}

function generateOrdersPage() {
  console.log("Called generate orders page!");
  fetchOrders();
}