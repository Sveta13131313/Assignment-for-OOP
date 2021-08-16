'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    DomElement.prototype.createElementDiv = function (text) {
        this.text = text;
        this.selector = this.selector.slice(1);
        this.notification = document.createElement('div');
        this.notification.style.width = this.width + 'px';
        this.notification.style.height = this.height + 'px';
        this.notification.style.backgroundColor = this.bg;
        this.notification.style.fontSize = this.fontSize + 'px';
        this.notification.innerHTML = this.text;

        if (this.selector[0] == '.') {
            this.notification.classList.add(this.selector);
        } else if (this.selector[0] == '#') {
            this.notification.setAttribute('id', this.selector);
        }
        document.body.append(this.notification);
    }
}
   
const newDiv = new DomElement('.block', '400', '400', 'blue', '30');
newDiv.createElementDiv('Привет мир!');

const newId = new DomElement('#best', '400', '400', 'green', '30');
newId.createElementDiv('Привет мир!');