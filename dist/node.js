'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

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