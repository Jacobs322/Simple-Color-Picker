var parent = document.getElementById('color');
var display = document.getElementById('displayColor')

var color_picker = new colorPicker(['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'navy', 'brown', 'gray', 'lightgreen', 'orange', 'yellow']);

color_picker.create(parent);
color_picker.start();

display.style.backgroundColor = color_picker.getColor();

parent.addEventListener('click', function(){
    
    display.style.backgroundColor = color_picker.getColor();
    
})