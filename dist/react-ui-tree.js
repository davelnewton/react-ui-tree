(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactUiTreeCss = exports.default = undefined;
	
	var _node = __webpack_require__(1);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _reactUiTree = __webpack_require__(5);
	
	var _reactUiTree2 = _interopRequireDefault(_reactUiTree);
	
	var _tree = __webpack_require__(6);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ReactUiTreeCss = __webpack_require__(8);
	
	exports.default = _reactUiTree2.default;
	exports.ReactUiTreeCss = ReactUiTreeCss;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stopEventPropagation = function stopEventPropagation(e) {
	  return e.stopPropagation();
	};
	
	var Node = function (_Component) {
	  _inherits(Node, _Component);
	
	  function Node() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Node);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Node.__proto__ || Object.getPrototypeOf(Node)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'UITreeNode', _this.handleCollapse = function (e) {
	      e.stopPropagation();
	      var nodeId = _this.props.index.id;
	      if (_this.props.onCollapse) _this.props.onCollapse(nodeId);
	    }, _this.handleMouseDown = function (e) {
	      var dom = _this.refs.inner,
	          nodeId = _this.props.index.id;
	
	      if (_this.props.onDragStart) {
	        _this.props.onDragStart(nodeId, dom, e);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Node, [{
	    key: 'renderCollapse',
	    value: function renderCollapse() {
	      var index = this.props.index;
	
	
	      if (!(index.children && index.children.length)) {
	        return null;
	      }
	
	      var collapsed = index.node.collapsed;
	
	      return _react2.default.createElement('span', {
	        className: (0, _classnames2.default)('collapse', collapsed ? 'caret-right' : 'caret-down'),
	        onMouseDown: this.stopEventPropagation,
	        onClick: this.handleCollapse });
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this2 = this;
	
	      var _props = this.props,
	          index = _props.index,
	          tree = _props.tree,
	          dragging = _props.dragging;
	
	
	      if (!(index.children && index.children.length)) {
	        return null;
	      }
	
	      var childrenStyles = {};
	      if (index.node.collapsed) childrenStyles.display = 'none';
	      childrenStyles['paddingLeft'] = this.props.paddingLeft + 'px';
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'children', style: childrenStyles },
	        index.children.map(function (child) {
	          var childIndex = tree.getIndex(child);
	          return _react2.default.createElement(Node, {
	            tree: tree,
	            index: childIndex,
	            key: childIndex.id,
	            dragging: dragging,
	            paddingLeft: _this2.props.paddingLeft,
	            onCollapse: _this2.props.onCollapse,
	            onDragStart: _this2.props.onDragStart
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          tree = _props2.tree,
	          index = _props2.index,
	          dragging = _props2.dragging,
	          node = index.node,
	          styles = {};
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('m-node', {
	            'placeholder': index.id === dragging
	          }), style: styles },
	        _react2.default.createElement(
	          'div',
	          { className: 'inner', ref: 'inner', onMouseDown: this.handleMouseDown },
	          this.renderCollapse(),
	          tree.renderNode(node)
	        ),
	        this.renderChildren()
	      );
	    }
	  }]);
	
	  return Node;
	}(_react.Component);
	
	exports.default = Node;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tree = __webpack_require__(6);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _node = __webpack_require__(1);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactUiTree = (_temp = _class = function (_Component) {
	  _inherits(ReactUiTree, _Component);
	
	  function ReactUiTree(props) {
	    _classCallCheck(this, ReactUiTree);
	
	    var _this = _possibleConstructorReturn(this, (ReactUiTree.__proto__ || Object.getPrototypeOf(ReactUiTree)).call(this, props));
	
	    _this.displayName = 'ReactUiTree';
	
	    _this.componentWillReceiveProps = function (nextProps) {
	      if (_this._updated) {
	        _this._updated = false;
	        return;
	      }
	
	      _this.setState(_this.init(nextProps));
	    };
	
	    _this.dragStart = function (id, dom, e) {
	      _this.dragging = {
	        id: id,
	        w: dom.offsetWidth,
	        h: dom.offsetHeight,
	        x: dom.offsetLeft,
	        y: dom.offsetTop
	      };
	
	      _this._startX = dom.offsetLeft;
	      _this._startY = dom.offsetTop;
	      _this._offsetX = e.clientX;
	      _this._offsetY = e.clientY;
	      _this._start = true;
	
	      window.addEventListener('mousemove', _this.drag);
	      window.addEventListener('mouseup', _this.dragEnd);
	    };
	
	    _this.drag = function (e) {
	      if (_this._start) {
	        _this.setState({ dragging: _this.dragging });
	        _this._start = false;
	      }
	
	      var _this$state = _this.state,
	          tree = _this$state.tree,
	          dragging = _this$state.dragging;
	
	
	      var paddingLeft = _this.props.paddingLeft;
	      var newIndex = null;
	      var index = tree.getIndex(dragging.id);
	      var collapsed = index.node.collapsed;
	
	      var _startX = _this._startX;
	      var _startY = _this._startY;
	      var _offsetX = _this._offsetX;
	      var _offsetY = _this._offsetY;
	
	      var pos = {
	        x: _startX + e.clientX - _offsetX,
	        y: _startY + e.clientY - _offsetY
	      };
	      dragging.x = pos.x;
	      dragging.y = pos.y;
	
	      var diffX = dragging.x - paddingLeft / 2 - (index.left - 2) * paddingLeft;
	      var diffY = dragging.y - dragging.h / 2 - (index.top - 2) * dragging.h;
	
	      if (diffX < 0) {
	        // left
	        if (index.parent && !index.next) {
	          newIndex = tree.move(index.id, index.parent, 'after');
	        }
	      } else if (diffX > paddingLeft) {
	        // right
	        if (index.prev) {
	          var prevNode = _this.state.tree.getIndex(index.prev).node;
	          if (!prevNode.collapsed && !prevNode.leaf) {
	            newIndex = tree.move(index.id, index.prev, 'append');
	          }
	        }
	      }
	
	      if (newIndex) {
	        index = newIndex;
	        newIndex.node.collapsed = collapsed;
	        dragging.id = newIndex.id;
	      }
	
	      if (diffY < 0) {
	        // up
	        var above = tree.getNodeByTop(index.top - 1);
	        newIndex = tree.move(index.id, above.id, 'before');
	      } else if (diffY > dragging.h) {
	        // down
	        if (index.next) {
	          var below = tree.getIndex(index.next);
	          if (below.children && below.children.length && !below.node.collapsed) {
	            newIndex = tree.move(index.id, index.next, 'prepend');
	          } else {
	            newIndex = tree.move(index.id, index.next, 'after');
	          }
	        } else {
	          var below = tree.getNodeByTop(index.top + index.height);
	          if (below && below.parent !== index.id) {
	            if (below.children && below.children.length) {
	              newIndex = tree.move(index.id, below.id, 'prepend');
	            } else {
	              newIndex = tree.move(index.id, below.id, 'after');
	            }
	          }
	        }
	      }
	
	      if (newIndex) {
	        newIndex.node.collapsed = collapsed;
	        dragging.id = newIndex.id;
	      }
	
	      _this.setState({
	        tree: tree,
	        dragging: dragging
	      });
	    };
	
	    _this.dragEnd = function () {
	      _this.setState({
	        dragging: {
	          id: null,
	          x: null,
	          y: null,
	          w: null,
	          h: null
	        }
	      });
	
	      _this.change(_this.state.tree);
	      window.removeEventListener('mousemove', _this.drag);
	      window.removeEventListener('mouseup', _this.dragEnd);
	    };
	
	    _this.change = function (tree) {
	      _this._updated = true;
	      if (_this.props.onChange) {
	        _this.props.onChange(tree.obj);
	      }
	    };
	
	    _this.toggleCollapse = function (nodeId) {
	      var tree = _this.state.tree,
	          index = tree.getIndex(nodeId),
	          node = index.node;
	
	
	      node.collapsed = !node.collapsed;
	      tree.updateNodesPosition();
	
	      _this.setState({ tree: tree });
	      _this.change(tree);
	    };
	
	    _this.state = _this.init(props);
	    return _this;
	  }
	
	  _createClass(ReactUiTree, [{
	    key: 'init',
	    value: function init(props) {
	      var tree = new _tree2.default(props.tree);
	
	      tree.isNodeCollapsed = props.isNodeCollapsed;
	      tree.renderNode = props.renderNode;
	      tree.changeNodeCollapsed = props.changeNodeCollapsed;
	
	      tree.updateNodesPosition();
	
	      return {
	        tree: tree,
	        dragging: {
	          id: null,
	          x: null,
	          y: null,
	          w: null,
	          h: null
	        }
	      };
	    }
	  }, {
	    key: 'getDraggingDom',
	    value: function getDraggingDom() {
	      var _state = this.state,
	          tree = _state.tree,
	          dragging = _state.dragging;
	
	
	      if (!(dragging && dragging.id)) {
	        return null;
	      }
	
	      var draggingIndex = tree.getIndex(dragging.id);
	      var draggingStyles = {
	        top: dragging.y,
	        left: dragging.x,
	        width: dragging.w
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'm-draggable', style: draggingStyles },
	        _react2.default.createElement(_node2.default, {
	          tree: tree,
	          index: draggingIndex,
	          paddingLeft: this.props.paddingLeft
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tree = this.state.tree;
	      var dragging = this.state.dragging;
	      var draggingDom = this.getDraggingDom();
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'm-tree' },
	        draggingDom,
	        _react2.default.createElement(_node2.default, {
	          tree: tree,
	          index: tree.getIndex(1),
	          key: 1,
	          paddingLeft: this.props.paddingLeft,
	          onDragStart: this.dragStart,
	          onCollapse: this.toggleCollapse,
	          dragging: dragging && dragging.id
	        })
	      );
	    }
	
	    // oh
	
	  }]);
	
	  return ReactUiTree;
	}(_react.Component), _class.propTypes = {
	  tree: _react.PropTypes.object.isRequired,
	  renderNode: _react.PropTypes.func.isRequired,
	  paddingLeft: _react.PropTypes.number
	}, _class.defaultProps = {
	  paddingLeft: 20
	}, _temp);
	exports.default = ReactUiTree;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsTree = __webpack_require__(7);
	
	var _jsTree2 = _interopRequireDefault(_jsTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var proto = _jsTree2.default.prototype;
	
	proto.updateNodesPosition = function () {
	  var top = 1;
	  var left = 1;
	  var root = this.getIndex(1);
	  var self = this;
	
	  root.top = top++;
	  root.left = left++;
	
	  if (root.children && root.children.length) {
	    walk(root.children, root, left, root.node.collapsed);
	  }
	
	  function walk(children, parent, left, collapsed) {
	    var height = 1;
	
	    children.forEach(function (id) {
	      var node = self.getIndex(id);
	
	      if (collapsed) {
	        node.top = null;
	        node.left = null;
	      } else {
	        node.top = top++;
	        node.left = left;
	      }
	
	      if (node.children && node.children.length) {
	        height += walk(node.children, node, left + 1, collapsed || node.node.collapsed);
	      } else {
	        node.height = 1;
	        height += 1;
	      }
	    });
	
	    if (parent.node.collapsed) parent.height = 1;else parent.height = height;
	    return parent.height;
	  }
	};
	
	proto.move = function (fromId, toId, placement) {
	  if (fromId === toId || toId === 1) return;
	
	  var obj = this.remove(fromId);
	  var index = null;
	
	  if (placement === 'before') index = this.insertBefore(obj, toId);else if (placement === 'after') index = this.insertAfter(obj, toId);else if (placement === 'prepend') index = this.prepend(obj, toId);else if (placement === 'append') index = this.append(obj, toId);
	
	  this.updateNodesPosition();
	  return index;
	};
	
	proto.getNodeByTop = function (top) {
	  var indexes = this.indexes;
	
	  for (var id in indexes) {
	    if (indexes.hasOwnProperty(id)) {
	      if (indexes[id].top === top) return indexes[id];
	    }
	  }
	};
	
	exports.default = _jsTree2.default;

/***/ },
/* 7 */
/***/ function(module, exports) {

	function Tree(obj) {
	  this.cnt = 1;
	  this.obj = obj || {children:[]};
	  this.indexes = {};
	  this.build(this.obj);
	}
	
	var proto = Tree.prototype;
	
	proto.build = function(obj) {
	  var indexes = this.indexes;
	  var startId = this.cnt;
	  var self = this;
	
	  var index = {id: startId, node: obj};
	  indexes[this.cnt+''] = index;
	  this.cnt++;
	
	  if(obj.children && obj.children.length) walk(obj.children, index);
	
	  function walk(objs, parent) {
	    var children = [];
	    objs.forEach(function(obj, i) {
	      var index = {};
	      index.id = self.cnt;
	      index.node = obj;
	
	      if(parent) index.parent = parent.id;
	
	      indexes[self.cnt+''] = index;
	      children.push(self.cnt);
	      self.cnt++;
	
	      if(obj.children && obj.children.length) walk(obj.children, index);
	    });
	    parent.children = children;
	
	    children.forEach(function(id, i) {
	      var index = indexes[id+''];
	      if(i > 0) index.prev = children[i-1];
	      if(i < children.length-1) index.next = children[i+1];
	    });
	  }
	
	  return index;
	};
	
	proto.getIndex = function(id) {
	  var index = this.indexes[id+''];
	  if(index) return index;
	};
	
	proto.removeIndex = function(index) {
	  var self = this;
	  del(index);
	
	  function del(index) {
	    delete self.indexes[index.id+''];
	    if(index.children && index.children.length) {
	      index.children.forEach(function(child) {
	        del(self.getIndex(child));
	      });
	    }
	  }
	};
	
	proto.get = function(id) {
	  var index = this.getIndex(id);
	  if(index && index.node) return index.node;
	  return null;
	};
	
	proto.remove = function(id) {
	  var index = this.getIndex(id);
	  var node = this.get(id);
	  var parentIndex = this.getIndex(index.parent);
	  var parentNode = this.get(index.parent);
	  parentNode.children.splice(parentNode.children.indexOf(node), 1);
	  parentIndex.children.splice(parentIndex.children.indexOf(id), 1);
	  this.removeIndex(index);
	  this.updateChildren(parentIndex.children);
	
	  return node;
	};
	
	proto.updateChildren = function(children) {
	  children.forEach(function(id, i) {
	    var index = this.getIndex(id);
	    index.prev = index.next = null;
	    if(i > 0) index.prev = children[i-1];
	    if(i < children.length-1) index.next = children[i+1];
	  }.bind(this));
	};
	
	proto.insert = function(obj, parentId, i) {
	  var parentIndex = this.getIndex(parentId);
	  var parentNode = this.get(parentId);
	
	  var index = this.build(obj);
	  index.parent = parentId;
	
	  parentNode.children = parentNode.children || [];
	  parentIndex.children = parentIndex.children || [];
	
	  parentNode.children.splice(i, 0, obj);
	  parentIndex.children.splice(i, 0, index.id);
	
	  this.updateChildren(parentIndex.children);
	  if(parentIndex.parent) {
	    this.updateChildren(this.getIndex(parentIndex.parent).children);
	  }
	
	  return index;
	};
	
	proto.insertBefore = function(obj, destId) {
	  var destIndex = this.getIndex(destId);
	  var parentId = destIndex.parent;
	  var i = this.getIndex(parentId).children.indexOf(destId);
	  return this.insert(obj, parentId, i);
	};
	
	proto.insertAfter = function(obj, destId) {
	  var destIndex = this.getIndex(destId);
	  var parentId = destIndex.parent;
	  var i = this.getIndex(parentId).children.indexOf(destId);
	  return this.insert(obj, parentId, i+1);
	};
	
	proto.prepend = function(obj, destId) {
	  return this.insert(obj, destId, 0);
	};
	
	proto.append = function(obj, destId) {
	  var destIndex = this.getIndex(destId);
	  destIndex.children = destIndex.children || [];
	  return this.insert(obj, destId, destIndex.children.length);
	};
	
	module.exports = Tree;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./react-ui-tree.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./react-ui-tree.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".f-no-select {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.m-tree {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.m-draggable {\n  position: absolute;\n  opacity: 0.8;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.m-node.placeholder > * {\n  visibility: hidden;\n}\n.m-node.placeholder {\n  border: 1px dashed #ccc;\n}\n.m-node .inner {\n  position: relative;\n  cursor: pointer;\n  padding-left: 10px;\n}\n.m-node .collapse {\n  position: absolute;\n  left: 0;\n  cursor: pointer;\n}\n.m-node .caret-right:before {\n  content: '\\25B8';\n}\n.m-node .caret-down:before {\n  content: '\\25BE';\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-ui-tree.js.map