'use strict';

/**
Menu class for create menu
@constructor
@options {object} element for menu and list item for menu
*/
class Menu {
    constructor(options) {
      this._el = options.element;
      this._menu = options.data;
          
      this._el.innerHTML = `
            <ul data-menu="js-list"></ul> 
            `;
        
      this._itemListMenu = this._el.querySelector('[data-menu="js-list"]');
      this._createMenu();        
    }
    
    
    _createMenu() {
        this._menu.forEach(menuData => {
            let menuHtml = `
                    <li>
                        ${menuData.title}
                    </li>
                `;
            
            this._itemListMenu.insertAdjacentHTML('beforeEnd', menuHtml);
        });
    }
}