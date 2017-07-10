/**
* This is the description for my class
*
*@class MyClass
*@constructor
*/
function MyClass(){

/**
* My property descrition. Like other pieces of your comment blocks
* this can span multiple lines
* 
* @property name
* @type {Object}
* @default "foo"
*/	
this.name = 'test';

/**
* My method description. Like other pieces of your comment blocks,
* this can span multiple lines.
* @method Fn
* @param {String} foo Argument 1
* @param {Object} config A config object
* @param {String} config.name The name on the config object
* @param {Function} config.callback A callback function on the config object
* @param {Boolean} [extra=false] Do extra,optional work
* @return {Boolean} Returns true on success
*/
this.fn = function(){
	alert(1);
	
};
	
}