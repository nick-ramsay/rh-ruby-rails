//= require jquery

var orderCardData = [];
var currentCardData = {};
var orderData = [];
var agencyData = [];
var campaignData = [];

function fetchOrders() {
  $.ajax({
    url: "/orders",
    type: "get",
    dataType: "json",
    success: function (data) { orderData = data, console.log(data), fetchAgencies()}
    //complete: fetchAgencies()
  });
}


function fetchAgencies() {
  $.ajax({
    url: "/agencies",
    type: "get",
    dataType: "json",
    success: function (data) { agencyData = data; console.log(data), fetchCampaign() }
    //complete: fetchCampaign()
  });
}

function fetchCampaign() {
  $.ajax({
    url: "/campaigns",
    type: "get",
    dataType: "json",
    success: function (data) { campaignData = data; console.log(data), compileCardData() }
  })
}

function compileCardData() {

  for (i = 0; i < orderData.length; i++) {
    console.log(!orderData[i].campaign_id ? "No campaign ID" : campaignData[campaignData.findIndex(campaign => campaign.id === orderData[i].campaign_id)]);
    currentCardData = {
      orderData: orderData[i],
      agencyData: agencyData[agencyData.findIndex(agency => agency.id === orderData[i].agency_id)],
      campaignData: campaignData[campaignData.findIndex(campaign => campaign.id === orderData[i].campaign_id)]
    }
    orderCardData.push(currentCardData);
    console.log(orderCardData)
  }
  renderCards();
}

function renderCards() {
  for (i = 0; i < orderCardData.length; i++) {
    $(".order-list").append('<div class="order-container" id="order-container' + i + '">');
    $("#order-container" + i).append('<div class="order-title-container"><h5 class="order-title">' + orderCardData[i].agencyData.title /* + " - " + orderCardData[i].campaignData && orderCardData[i].campaignData.address + ', ' + orderCardData[i].campaignData && orderCardData[i].campaignData.suburb */ + '</h5></div>');
    $("#order-container" + i).append('<div class="order-details-container" id="order-details-container' + i + '"></div>');
    $("#order-details-container" + i).append('<div class="order-item-name"><span>Order Item Name</span></div>');
    $("#order-details-container" + i).append('<div class="order-item-functions" id="order-item-functions' + i + '"></div>');
    $("#order-item-functions" + i).append('<span class="order-download-link">Download Artwork</span><span class="order-line-break"> | </span><span class="order-status-change">Change Status</span><span class="order-line-break"> | </span><span class="order-status">Current Order Status</span>');
  }
}

function generateOrdersPage() {
  console.log("Called generate orders page!");
  fetchOrders();
}