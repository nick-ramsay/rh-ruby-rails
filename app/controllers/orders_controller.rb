class OrdersController < ApplicationController
    def index
    end
  end

  def request_api(url)
    response = Excon.get(
      url,
      headers: {
        'x-auth-token' => 'PtaLEEuLVByvLmYA21xb'
      }
    )
    return nil if response.status != 200
    JSON.parse(response.body)
  end
  def find_orders
    request_api(
      "https://www.realhubapp.com/api/v2/orders.json"
    )
  end

  

