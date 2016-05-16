/*
数据类型
2015-05-16
*/

(function(w){
var toString = Object.prototype.toString,
	type = function(o){
		var rets = /^\[object\s([a-zA-Z]+)\]$/ig.exec( toString.call(o) );
		if(rets) return rets[1].toLowerCase();
	};
	type.isUndefined = function(o){ return typeof o === 'undefined'; };
	type.isNull = function(o){ return o === null || type(o) === 'null'; };
	type.isString = function(o){
		return (o || o === '') && ( typeof o === 'string' || o.constructor === String || type(o) === 'string' );
	};
	type.isNumber = function(o){
		return (o || o === 0) && ( typeof o === 'number' || o.constructor === Number || type(o) === 'number' );
	};
	type.isBoolean = function(o){
		return (o || o === false) && ( typeof o === 'boolean' || o.constructor === Boolean || type(o) === 'boolean' );
	};
	type.isArray = function(o){
		return o && ( Array.isArray(o) || type(o) === 'array' );
	};
	type.isLikeArray = function(o){
		return o && typeof o === 'object' && ( this.isArray(o) || ('length' in o && o.length >= 0) ) || false;
	};
	type.isObject = function(o){
		return o && ( o.constructor === Object || type(o) === 'object' );
	};
	type.isFunction = function(o){
		return o && ( typeof o === 'function' || o.constructor === Function || type(o) === 'function' );
	};
	type.isDate = function(o){ return o && ( o.constructor === Date || type(o) === 'date' ); };
	type.isRegExp = function(o){ return o && ( o.constructor === RegExp || type(o) === 'regexp' ); };
	type.isElement = function(o){
		return o && ( typeof o === 'object' && 'nodeName' in o && 'nodeType' in o && o.nodeType === 1 && o.ownerDocument === document );
	};
	type.isWindow = function(o){ return o != null && o != undefined && o === o.window; };

w.type = type;

}(window));
