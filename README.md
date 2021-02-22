# Introduction

This project was made as the final project of [RE_Start Developer](https://pt.primaverabss.com/pt/formacao-2/acoes-em-destaque/restart/)'s training course for the JavaScript Frameworks' module. It's an academic project made with no intention to be used as a real front-end for an eCommerce store. It's a complete beginner project, made with limited time. Should you decide to use any of this code in prodution, be very aware of its caveats.

# OK Computer

An on-line store but as if we were in the 80s! Some of the features implemented:

* The top menu changes whether the user is logged in or not;
* The front page has featured products;
* One of the featured products has more emphasis;
* There's a search functionality with filters;
* There's a menu with categories;
* The products can be ordered by certain criteria;
* Only logged in users can make orders and checkout.

> You can log in with the email `email@email.com` and the password `1234`. You can also register for an account or manually add a user to the db.json file.

## Install the dependencies

To try it out for yourself, install all the dependecies. You'll also need to have Angular installed.

    npm install

## Development server

Launch the development server:
    
    ng serve -o

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Fake REST API

Launch [JSON Server](https://www.npmjs.com/package/json-server):
    
    npx json-server --watch db.json

The API runs by default in `http://localhost:3000`. The resources are located in:

* `http://localhost:3000/users`
* `http://localhost:3000/products`
* `http://localhost:3000/categories`
* `http://localhost:3000/paymentMethods`
* `http://localhost:3000/shippingMethods`
* `http://localhost:3000/messages`

You can check the file `db.json` to learn how it was structured.

## Copyright information

All images by ***docubyte / INK***, [Check out their awesome work here.](https://www.docubyte.com/works/guide-to-computing/)

## Improvements I'll probably do

* Store the user session
* Create the API from scratch in Express or .NET, or both
* Add a relacional or a NoSQL database or both
* Add a back-end to manage the store
* Add Stripe for payments
* ...