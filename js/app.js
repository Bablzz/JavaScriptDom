'use strict';

let itemMenu = [
    {
        title: "Главная"
    }, {
        title: "Резюме"   
    }, {
        title: "О нас"
    }
]

let myMenu = new Menu({
    element: document.querySelector('[data-component="js-menu"]'),
    data: itemMenu
});