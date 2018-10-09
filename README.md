# Simple Color Picker

I've build a very simple color picker with plain javascript.
It's very easy to implement and use!

You can checkout how it looks on this JSFiddle [Demo](https://jsfiddle.net/Jacobs322/p8s19f5u/)

# Documentation

1. Include simple-color-picker.js in the <head> of your html document
2. In your body create a parent element for the color picker

```HTML

<div id='colorContainer'>
</div>

```

3. In your main javascript file, create a colorPicker object:

```javascript

var color_picker = new colorPicker(Colors *Array*, Size *Int*, Padding X *INT*, Padding Y *INT*, CustomColors *Boolean*);

```

4. Create the color picker using the colorPicker.create(*parent element*) method and pass the parent element as argument

```javascript

color_picker.create(parent);

```

5. Start the color picker using the colorPicker.start() method with no arguments.
This adds event listeners to the buttons so they are interactive

```javascript

color_picker.start();

```

6. You can access the currently selected color by calling the color_picker.getColor() method, which returns the currently selected color

```javascript

var currentColor = color_picker.getColor();

```


