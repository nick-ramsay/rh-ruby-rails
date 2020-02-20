# Realhub Rails Project

## Overview

This application is for demonstration purposes. The application pulls 50 orders via the Realhub API and renders information about each order, along with supplemental data from the agency, campaign, order item, and status collections. Once loaded, users can download associated order item artwork or toggle the status of each order item.

## Installation & Prerequisites

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/rh-ruby-rails/dependent-gems.jpg?raw=true)

The Realhub Rails application is a Ruby version 2.6.5 application. The application utilizes a number of Ruby Gems:

 1. Rails
 2. Excon
 3. Figaro
 4. Pusher

On the front-end, jQuery is used for rendering the application's elements and running the required functions.

If you have cloned the repository, these Ruby Gems can be installed using the ```bundle install``` command.

## Instructions

Realhub Rails Project is deployed on Heroku for usage [here](http://rh-ruby-rails.herokuapp.com/).

Upon loading, the application will make API requests to fetch the order data. Once the API response is received, the order cards will render...

![Realhub Rails Project Starting Page](https://github.com/nick-ramsay/readme-images/blob/master/rh-ruby-rails/starting-page.jpg?raw=true)

If artwork exists for an order item, users can select the "Download Artwork" link to download the artwork...

![Realhub Rails Project Download Artwork](https://github.com/nick-ramsay/readme-images/blob/master/rh-ruby-rails/download-artwork.jpg?raw=true)

Users can also click the "Change Status" link which will toggle the status to that of their choosing...

![Realhub Rails Project Change Status](https://github.com/nick-ramsay/readme-images/blob/master/rh-ruby-rails/change-status.jpg?raw=true)


## Built With
- Realhub Rails Project application was built using Ruby, Ruby on Rails, jQuery, and the following Ruby Gems...
 
 1. Rails
 2. Excon
 3. Figaro
 4. Pusher

## Authors 
- Developer: Nick Ramsay (@nick-ramsay)

