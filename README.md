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

var color_picker = new colorPicker(colors *Array*, size *Int*, paddingX *INT*, paddingY *INT*, customColors *Boolean*);

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
# Customization

You can customize the looks of the color picker by changing the simple-color-picker.css file.

# Methods and Attributes

**1. colorPicker constructor**
```javascript

var color_picker = new colorPicker(colors *Array*, size *Int*, paddingX *INT*, paddingY *INT*, customColors *Boolean*);

```
colors = Array of colors in strings, either names, HEX codes, RGB
size = width and height of a single square color element
paddingX = space between colors on the X axis
paddingY = space between colors on the Y axis
*customColors* - will be added in the future

**2. colorPicker.create()**





