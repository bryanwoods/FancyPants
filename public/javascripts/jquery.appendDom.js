/**
*
* appendDom - Extremely flexible tool for dynamic dom creation.
*   http://byron-adams.com/projects/jquery/appendDom
*
* Copyright (c) 2007 Byron Adams (byron.adams54@gmail.com)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL (GPL-LICENSE.txt) licenses.
*
* 11/03/09 - Bugs fixed by Patricio Palladino pato89 (at) gmail (dot)com
*
*/
jQuery.fn.appendDom = function(template) {
  return this.each(function() {
    for (element in template) {
      var el = (typeof(template[element].tagName) === 'string') ?
        document.createElement(template[element].tagName) :
        document.createTextNode('');
      delete template[element].tagName;
      for (attrib in template[element]){
        if(attrib == 'className'){
          jQuery(el).addClass(template[element][attrib]);
          delete template[element].className;
        }
        switch ( typeof(template[element][attrib]) ) {
          case 'string' :
            if ( typeof(el[attrib]) === 'string' ) {
              el[attrib] = template[element][attrib];
            } else {
              el.setAttribute(attrib, template[element][attrib]);
            }
            break;
          case 'function':
            el[attrib] = template[element][attrib];
            break;
          case 'object' :
            if (attrib === 'childNodes') jQuery(el).appendDom(template[element][attrib]);
            break;
        }
      }
      this.appendChild(el);
    }
  });
};