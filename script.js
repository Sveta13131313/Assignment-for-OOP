'use strict'

const DomElement = function (id,height, width, bg, position) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.position = position;
this.selector=id;



    DomElement.prototype.createElementDiv = function () {
        this.notification = document.createElement('div');
        this.notification.setAttribute('id',this.selector);
        this.notification.style.width = this.width + 'px';
        this.notification.style.height = this.height + 'px';
        this.notification.style.backgroundColor = this.bg;
        this.notification.style.fontSize = this.fontSize + 'px';
        this.notification.style.position = this.position;
        document.body.append(this.notification);
    }

}

document.body.style.position = 'relative';
const newDiv = new DomElement('block','100', '100', 'blue', ' absolute');
document.addEventListener("DOMContentLoaded", function () {
    newDiv.createElementDiv();
});



document.addEventListener('keydown', function (event) {
    let block=document.getElementById('block');
        switch (event.code) {
            case 'ArrowRight': {
               block.style.left = (block.offsetLeft+10) + 'px';
                break;
            }
            case 'ArrowDown': {
                block.style.top =(block.offsetTop+10) + 'px';
                console.log(newDiv)
                break;
            }
            case 'ArrowUp': {
                block.style.top =(block.offsetTop - 10) + 'px';
                break;
            }
            case 'ArrowLeft': {
                block.style.left =(block.offsetLeft-10) + 'px';
                break;
            }
        }
    }
   
);
