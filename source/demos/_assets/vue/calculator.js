// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	  var OP = ['+', '-', '*', '/'];
	  module.exports = {
	    data: {
	      result: '',
	      inputs: []
	    },
	    methods: {
	      input: function(e) {
	        var value = e.target.attr['value'];
	        var inputs = this.inputs;
	        var lastOne = inputs.length ? inputs[inputs.length - 1] : '';
	        if (OP.indexOf(lastOne) > -1 && OP.indexOf(value) > -1) {
	          return;
	        }
	        inputs.push(value);
	        var buf = [], char;
	        for (var i = 0; i < inputs.length; i++) {
	          char = inputs[i];
	          if (OP.indexOf(char) > -1) {
	            char = ' ' + char + ' ';
	          }
	          buf.push(char);
	        }
	        this.result = buf.join('');
	      },
	      calculate: function() {
	        var result = eval(this.result);
	        this.inputs = [result];
	        this.result = result;
	      },
	      clear: function() {
	        this.inputs = [];
	        this.result = '';
	      }
	    }
	  }

	module.exports.style = {
	  "row": {
	    "flexDirection": "row"
	  },
	  "result": {
	    "textAlign": "right",
	    "backgroundColor": "#666666",
	    "fontSize": 40,
	    "color": "#FFFFFF",
	    "height": 100,
	    "padding": 30,
	    "margin": 5
	  },
	  "btn": {
	    "flex": 1,
	    "textAlign": "center",
	    "backgroundColor": "#eeeeee",
	    "fontSize": 36,
	    "height": 100,
	    "padding": 30,
	    "margin": 5
	  },
	  "btn-operator": {
	    "backgroundColor": "#666699",
	    "fontSize": 40,
	    "color": "#FFFFFF"
	  }
	}
	module.exports.render = function() {with(this){return _h(_e('div',{staticStyle:{padding:"5px"}}),[_h(_e('text',{staticClass:["result"]}),[(_s(result))]),_h(_e('div',{staticClass:["row"]}),[_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("1")]),_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("2")]),_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("3")]),_h(_e('text',{staticClass:["btn","btn-operator"],on:{"click":input}}),[_t("+")])]),_h(_e('div',{staticClass:["row"]}),[_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("4")]),_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("5")]),_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("6")]),_h(_e('text',{staticClass:["btn","btn-operator"],on:{"click":input}}),[_t("-")])]),_h(_e('div',{staticClass:["row"]}),[_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("7")]),_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("8")]),_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("9")]),_h(_e('text',{staticClass:["btn","btn-operator"],on:{"click":input}}),[_t("*")])]),_h(_e('div',{staticClass:["row"]}),[_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t("0")]),_h(_e('text',{staticClass:["btn"],on:{"click":input}}),[_t(".")]),_h(_e('text',{staticClass:["btn"],on:{"click":clear}}),[_t("AC")]),_h(_e('text',{staticClass:["btn","btn-operator"],on:{"click":calculate}}),[_t("=")])])])}}
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);