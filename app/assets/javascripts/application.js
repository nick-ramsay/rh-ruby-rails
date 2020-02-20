//= require jquery

var orderData = [];
var orderStatuses = [];

function fetchStatuses() {
  $.ajax({
    url: "/statuses",
    type: "get",
    dataType: "json",
    success: function (data) {
      console.log(data),
        orderStatuses = data
    }
  });
}

function fetchOrders() {
  $.ajax({
    url: "/orders",
    type: "get",
    dataType: "json",
    success: function (data) {
      orderData = data,
        renderCards()
    }
  });
}

function renderCards() {
  console.log(orderData);
  $(".order-list").empty();
  for (i = 0; i < orderData.length; i++) {
    $(".order-list").append('<div class="order-container" id="order-container' + i + '">');
    $("#order-container" + i).append('<div class="order-title-container"><div class="order-title" id="order-title' + i + '">' + orderData[i].agency.title + (!orderData[i].campaign ? " " : ': ' + orderData[i].campaign.address + ', ' + orderData[i].campaign.suburb_name) + '</div></div>');
    $("#order-container" + i).append('<div class="order-details-container" id="order-details-container' + i + '"></div>');
    for (j = 0; j < orderData[i].items.length; j++) {
      console.log("Order item loop called...");
      var orderLineDiv = $("<div>").addClass("order-item-line").attr("id", "order" + i + "-item" + j);
      if (j > 0) {
        $(orderLineDiv).css("border-top", "1px dashed #d8d9d9");
      }
      var orderItemNameDiv = '<span class="order-item-name"><span>' + orderData[i].items[j].title + '</span>';
      var orderItemFunctionDiv = '<div class="order-item-functions" id="order-item-functions' + i + '">' + ((orderData[i].items[j].artwork && orderData[i].items[j].status.title !== "Pending") ? '<a href="' + orderData[i].items[j].artwork.links.download_url + '" class="order-download-link">Download Artwork</a><span class="order-line-break"> | </span>' : "") + '<span class="order-status-change" id="order-status-change-' + i + j + '"data-current-status="' + orderData[i].items[j].status.id + '" data-status-id="order-status' + i + j + '">Change Status</span><span class="order-line-break"> | </span><span class="order-status" id="order-status' + i + j + '">' + orderData[i].items[j].status.title + '</span></div>';

      $(orderLineDiv).append(orderItemNameDiv);
      $(orderLineDiv).append(orderItemFunctionDiv);

      $("#order-details-container" + i).append(orderLineDiv);
    }
  }
  $(".order-status-change").on("click", function () {
    var nextStatusID;
    var nextStatusTitle;
    var currentStatusIndex;
    console.log(orderStatuses);
    var clickedDivID = $(this).attr("id");
    console.log(clickedDivID);
    var orderStatusElementID = $(this).data("status-id");
    console.log(orderStatusElementID)
    var orderCurrentStatus = $(this).data("current-status");
    console.log(orderCurrentStatus);
    for (i = 0; i < orderStatuses.length; i++) {
      if (orderStatuses[i].id === orderCurrentStatus) {
        currentStatusIndex = i;
        break;
      }
    }

    console.log(orderStatuses.length);

    if (currentStatusIndex + 1 == orderStatuses.length) {
      nextStatusID = orderStatuses[0].id;
      nextStatusTitle = orderStatuses[0].title;
    } else {
      nextStatusID = orderStatuses[currentStatusIndex + 1].id;
      nextStatusTitle = orderStatuses[currentStatusIndex + 1].title;
    }

    $('#' + clickedDivID).data("current-status", nextStatusID);
    $('#' + orderStatusElementID).text(nextStatusTitle);

  })
}

function generateOrdersPage() {
  console.log("Called generate orders page!");
  fetchStatuses();
  fetchOrders();
}