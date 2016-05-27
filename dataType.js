/*
判断数据类型
2015-05-16
*/

(function(w){
var toString = Object.prototype.toString,
	dataType = function(o){
		var rets = /^\[object\s([a-zA-Z]+)\]$/ig.exec( toString.call(o) );
		if(rets) return rets[1].toLowerCase();
	};
	dataType.isUndefined = function(o){return typeof o === 'undefined';};
	dataType.isNull = function(o){return o === null || type(o) === 'null';};
	dataType.isString = function(o){return o === '' || typeof o === 'string' || type(o) === 'string';};
	dataType.isNumber = function(o){return o === 0 || typeof o === 'number' || type(o) === 'number';};
	dataType.isBoolean = function(o){return o === true || o === false || type(o) === 'boolean';};
	dataType.isArray = function(o){return Array.isArray(o) || type(o) === 'array';};
	dataType.isLikeArray = function(o){return o && ( isArray(o) || (typeof o === 'object' && 'length' in o && o.length >= 0) );};
	dataType.isObject = function(o){return o && type(o) === 'object';};
	dataType.isFunction = function(o){return o && ( typeof o === 'function' || type(o) === 'function' );};
	dataType.isDate = function(o){return o && type(o) === 'date';};
	dataType.isRegExp = function(o){return o && type(o) === 'regexp';};
	dataType.isElement = function(o){return o && typeof o === 'object' && Element.prototype.isPrototypeOf(o);};
	dataType.isWindow = function(o){return o && o === o.window;};
w.dataType = type;
}(window));
