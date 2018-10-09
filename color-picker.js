class colorPicker{

    constructor(colors, size=50, padX=15, padY=10, custom_colors=false){

        this.amount_of_colors = colors.length;
        this.colors = colors;
        this.size = size;
        this.padX = padX;
        this.padY = padY;
        this.displayColor = 'white'; // Actual currently selected color code
        this.colorChildren = []; // array of child elements
        this.startColor = 'red';

        var link = document.createElement('link');
        link.href = '/css/color-picker-default.css';
        link.rel = 'stylesheet';
        link.type = 'text/css';

        document.getElementsByTagName('head')[0].appendChild(link);

    }

    // Interface for getting selected color
    getColor(){

        console.log(this.displayColor);
        return this.displayColor;

    }

    setColor(color){

        console.log('Setting display color with ' + color + ' replacing ' + this.displayColor);
        this.displayColor = color;
        console.log(this.displayColor);

    }

    create(parent, startColor=this.startColor){
        console.log('CREATEEEEEEEEEEEEEEEEEEEE');
        this.root = document.createElement('div');
        for(var x = 0; x < this.colors.length; x++){

            let color_element = document.createElement('div');
            color_element.classList.add('color-child');
            color_element.style.backgroundColor = this.colors[x];
            this.colorChildren.push(color_element);
            console.log(this.colorChildren);

            this.root.appendChild(color_element);

        }

        console.log('Adding class');
        this.root.classList.add('color-root');
        parent.appendChild(this.root);

        // Set starting color
        console.log('Start color: ' + startColor);
        var startIndex = this.colors.indexOf(startColor);
        console.log('Start index - ' + startIndex);
        this.colorChildren[startIndex].classList.add('color-child-selected');
        this.displayColor = this.colorChildren[startIndex].style.backgroundColor;

        // Calculate number of rows and columns
        this.calculate_grid();

    }

    calculate_grid(){

        console.log('Amount: ' + this.amount_of_colors);
        console.log(Math.sqrt(this.amount_of_colors));

        var rows = Math.sqrt(this.amount_of_colors);

        console.log('Square root is: ' + rows);

        if(Number.isInteger(rows)){



        }else{

            rows = Math.floor(rows);
            console.log('Floored' + rows);

        }

        while(true){

            console.log('Loop runs');
            this.result = this.amount_of_colors / rows;
            console.log('Try' + this.rows);

            if(Number.isInteger(this.result)){

                console.log('ROWS: ' + rows);
                break;

            }else{

                rows -= 1;
                console.log('New try: ' + rows);

            }

        }

        let columns = this.amount_of_colors / rows;
        var template_grid = '';

        for(var j = 0; j < columns; j++){

            template_grid = template_grid.concat(this.size + 'px ');

        }

        this.root.style.gridTemplateColumns = template_grid;

        template_grid = '';

        for(var k = 0; k < rows; k++){

            template_grid = template_grid.concat(this.size + 'px ');

        }

        this.root.style.gridTemplateRows = template_grid;

        // Modify the width and height of the root element
        var root = document.getElementsByClassName('color-root')[0];
        var minRootWidth = columns * this.size;
        var minRootHeight = rows * this.size;
        console.log('Minimal HEIGHT: ' + minRootHeight);
        console.log('Minimal WIDTH: ' + minRootWidth);
        var totalRootWidth = minRootWidth + (columns+1)*this.padX;
        var totalRootHeight = minRootHeight + (rows+1)*this.padY;
        console.log('Total HEIGHT: ' + totalRootHeight);
        console.log('Total WIDTH: ' + totalRootWidth);
        root.style.width = totalRootWidth + 'px ';
        root.style.height = totalRootHeight + 'px ';

    }

    // Add event listener for the colo picker items, so a color can be chosen
    start(){

        for(var k = 0; k < this.colorChildren.length; k++){

            var self = this;
            this.colorChildren[k].addEventListener('click', function(){

                var selected = document.getElementsByClassName('color-child-selected')[0];
                if(selected){
                    selected.classList.remove('color-child-selected');
                }
                this.classList.add('color-child-selected');
                console.log('Selected element background: ' + this.style.backgroundColor);
                self.setColor(this.style.backgroundColor);

            })

        }

    }

}
