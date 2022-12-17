# Development


### Goal and Value of the Application

I designed a clothing store website. This website is one that users can use to buy shirts, pants, jackets, blouses, and skirts. It has value to the user because it is failry easy to use. 



### Usability Principles Considered
I considered learnability. I used simple logos so that the user knows what each part of the website is. I also put the cart on the side so that the user is able to qucikly see what changes their actions has, which would help them learn how to use the website faster. 



### Organization of Components
App.js is the main component. The nav bar componenet, clothing item componenet, and cart component all use variables that are updated in App.js.




### How Data is Passed Down Through Components

Data is passed down the components using props. Props is used so that the cart has access to the cart and total variable, which are both updated in App.js. Likewise, the clothing item componenet also takes in prop so that it has access to the clothes variable and to the add/remove functions whose logic is found in App.js. 



### How the User Triggers State Changes
The user can trigger state changes by adding and removing items from the cart.The user will be able to see the total number of items in the cart go up as well as the price. Furthermore, if the user clicks on one of the drop down menu's they will be able to either sort the clothing items by price or filter the clothing items by type of clothes. 

