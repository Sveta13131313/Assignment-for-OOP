'use strict'

const DomElement = function (height, width, bg, position) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.position = position;


    DomElement.prototype.createElementDiv = function () {
        this.notification = document.createElement('div');
        this.notification.classList.add(this.selector);
  
        this.notification.style.width = this.width + 'px';
        this.notification.style.height = this.height + 'px';
        this.notification.style.backgroundColor = this.bg;
        this.notification.style.fontSize = this.fontSize + 'px';
        document.body.append(this.notification);
    }

}

const newDiv = new DomElement('100', '100', 'blue', ' absolute');
document.addEventListener("DOMContentLoaded", function() {
    newDiv.createElementDiv();
  });



document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowUp' ) {
            newDiv.notification.style.top += 10 + 'px';
        }
        if (event.code == 'ArrowLeft') {
            newDiv.notification.style.left += 10 + 'px';
        }
        if (event.code == 'ArrowRight') {
            newDiv.notification.style.left -= 10 + 'px';
        }
        if (event.code == 'ArrowDown') {
            newDiv.notification.style.top -= 10 + 'px';
        }

    });
