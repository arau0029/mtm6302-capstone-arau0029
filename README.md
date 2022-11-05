Gabriela Angel Araujo de Rezende Silva
Student no. 041039011
Project: Astronomy Picture of the Day Search

Font-family used:

https://fonts.google.com/specimen/Poppins?query=poppin

All icons were taken from Bootstrap:

https://icons.getbootstrap.com/

All images used were taken from NASA, including the current APOD website:

https://apod.nasa.gov/apod/ap221101.html
https://www.nasa.gov/multimedia/imagegallery/index.html

Challenges faced:

- Creating the 'add favourite' button

    In the beginning, I was confused about how to create a button that could mark the user's favourite images. I needed to make a button that fitted the design proposed and that the user could toggle, so they could add or remove images from their favourites list. 
    I figured I could use a checkbox input to achieve the toggle effect, but I still did not know how I could change the design of the input to a heart icon. After doing some research, I found the demo linked below that helped me understand what I should do to achieve the desired look. Finally, I was able to replace the original input look with an SVG icon from Bootstrap.

    http://jsfiddle.net/362c9n1x/1/

- Adding a zoom icon when hovering the daily image

    The assignment requires the web application to display a high-definition version of the APOD image when it is clicked. To make that action more intuitive, I wanted to add a "Zoom In" icon on top of the image when hovered. I concluded that could be achieved by using the CSS position property, but every time I tried to move the icon to the center of the image, it would disappear.

    With the help of the demo linked below, I realized I was targeting the wrong elements for the 'position:relative'. After changing the targets, I was able to achieve the desired look.

    http://jsfiddle.net/huseyinbabal/5bDKz/