# Dragon Clicker Reflections

## Single Dragon

I displayed a single unicode dragon image with increased font size. It was displayed div based card that included a button for clicking and and output element to show the number of clicks. I used the html onclick on the button to identify the function to run. HTML elements were added to the DOM by appending them other DOM elements that had been identify using either the querySelector or getElementByID methods of the document.

## Double Dragons

Here I changed how I stored the dragon data. I created an array of objects, one for each dragon. The Objects contained the type of dragon, the class used to style the object, and the number of clicks. In addition I changed the dragon from a Unicode character to an image, and included included some filters to alter how the dragons image was styled.

I let the array control the number and order of dragons displayed, looping through the array, calling a factory style method and passing the array index.

## Dragon Arena

The navbar links are display dynamically in the drawMenuItem(id) function using the dragon_type of the arry of dragon objects.

I recoded the dragon factory using string template literals so that
dragons could be display using the inner HTML of the container. I also moved the background array into the dragon array, adding a background attribute to each dragon.

Using the array of objects as a basis for creating unique dragons seems to work well. Scaling just requires adding more dragon objects to the array. Using the array of objects combined with the dragonFactory resulted in very little code duplication.

That said, getting the right quotes in the right places is a little tedious and error prone.

## MVC

Reimplemented dragon area solution following MVC conventions.

The dragon type view was still implemented as a filter. Added an All dragon type to facilitate showing all existing dragon types at once.

Adding new dragons types, and dragon instances involved editing the model

## Modal version

Separated javascript into separate files for model, view and controller.

Menu bar reimplemented to allow dynamic creation of new dragons, based on user selected attributes through modal dialog box.
Initial set of 5 dragons are provided.

Dragon arena are now shows all dragons for all selected dragon types all the time. The 'All' button functionality was removed.
Dragon cards now include a delete link.
