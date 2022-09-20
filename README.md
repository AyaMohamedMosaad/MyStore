RO2YA #Home#  Ecommerce Application
Simple Ecommerce App Created with AngularJs and Json as database

Table of Contents

General info
Technologies
setup
Functionalities
Features 

General Info
This project is a simple e-commerce project for selling furniture online.
This project contains a group of product sections, including:
1.chairs
2.lighting
3.mirrors
4.Tables
This allows the user to choose the product and quantity He puts it in his cart and after he finishes the purchase he will go to his cart and let him make some adjustments to his products before sending the data to the server

Technologies
Let's write down the languages I used, the libraries and its versions. 
For example:
Bootstrap v-5
AngularJs 13
Setup
To run this project, install it locally using npm:

npm install
MyStore>json-server --w Database/db.json (to watch Database)
MyStore>ng serve -o (to run the App)

Functionalities
The most important functions that are available in the project
1.Allows the user to see all the products on one page.
2.The user can choose one category to display based on the dropdown list with all the category and then display specific products.
3.The user can place the appropriate product by pressing the add button, and an input will appear for him to determine the appropriate quantity for him and then press the cart.
4.If the user tries to enter the same product again, a message will appear that this product is already in the cart.
5.The user can see the details of the product before purchasing by clicking either on the product image or on the eye icon.
6.When the user has finished selecting his products, he can go to his cart through the card button that is located in the NavBar.
7.The user will see the total price of all the selected products and the total price of each individual product multiplied by the quantity and the number of items in the cart.
8.The user will see all the products that he previously selected, and he can make some modifications to them before sending them to the backend.
9. He can clear all the products in the cart through the “Clear Shopping Cart” Button.
10.He can delete one product he does not want to buy through “Delete” Button.
11. He can increase or decrease the quantity of the product that was previously selected.
After completing the above, he must fill in a set of data such as
Full name: It must be no less than three letters.
Title: It must be at least 6 characters.
Credit Card: It must be 16 digit.
After completing all the data correctly, the Order Now button will activated and you can press it.
If the cart contains at least one product, it will appear to the user that he has registered his data successfully
If the cart is empty, the “Order Now” button does not appear

Features 
The User Can Filter the Products Depends on the Categories
