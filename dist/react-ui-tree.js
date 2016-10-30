'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tree = require('./tree');

var _tree2 = _interopRequireDefault(_tree);

var _node = require('./node');

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