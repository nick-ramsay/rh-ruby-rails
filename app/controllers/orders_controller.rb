class OrdersController < ApplicationController
    def index
    end


  def request_api(url)
    response = Excon.get(
      url,
      headers: {
        'x-api-token' =>  ENV["realhub_api_token"]
      }
    )
    @responseData = (response.body)
    respond_to do |format|
      format.json { render json: @responseData }
    end
  end

  def find_orders
    request_api(
      "https://app.realhublive.com/api/v2/orders.json?include_order_items=true&include_order_agency=true&include_order_campaign=true&include_order_item_artwork=true&include_order_status=true&include_order_item_status=true"
    )
    puts "Called find orders!"
  end

=begin
  def find_statuses
    request_api(
      "https://www.realhubapp.com/api/v2/statuses.json"
    )
    puts "Called find statuses!"
  end
=end
end

  

