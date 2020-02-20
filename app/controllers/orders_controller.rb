class OrdersController < ApplicationController
    def index
    end


  def request_api(url)
    response = Excon.get(
      url,
      headers: {
        'x-api-token' =>  ENV["realhub_api_token"],
        'include_order_items' => true,
        'include_order_agency' => true
      }
    )
      
    @orders = (response.body)
    respond_to do |format|
      format.json { render json: @orders }
    end
  end

  def find_orders
    request_api(
      "https://app.realhublive.com/api/v2/orders.json?include_order_items=true&include_order_agency=true&include_order_campaign=true"
    )
    puts "Called find orders!"
  end
end

  

