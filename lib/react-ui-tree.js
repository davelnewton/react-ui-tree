import React, { Component, PropTypes } from 'react'
import JsTree from './tree'
import Node from './node'

class ReactUiTree extends Component {
  displayName = 'ReactUiTree'

  static propTypes = {
    tree:        PropTypes.object.isRequired,
    renderNode:  PropTypes.func.isRequired,
    paddingLeft: PropTypes.number
  }

  static defaultProps = {
    paddingLeft: 20
  }

  constructor(props) {
    super(props)

    this.state = this.init(props)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this._updated) {
      this._updated = false
      return
    }

    this.setState(this.init(nextProps))
  }

  init(props) {
    var tree = new JsTree(props.tree)

    tree.isNodeCollapsed     = props.isNodeCollapsed
    tree.renderNode          = props.renderNode
    tree.changeNodeCollapsed = props.changeNodeCollapsed

    tree.updateNodesPosition()

    return {
      tree,
      dragging: {
        id: null,
        x:  null,
        y:  null,
        w:  null,
        h:  null
      }
    }
  }

  getDraggingDom() {
    const { tree, dragging } = this.state

    if (!(dragging && dragging.id)) {
      return null
    }

    var draggingIndex = tree.getIndex(dragging.id)
    var draggingStyles = {
      top:   dragging.y,
      left:  dragging.x,
      width: dragging.w
    }

    return (
      <div className="m-draggable" style={draggingStyles}>
        <Node
          tree={tree}
          index={draggingIndex}
          paddingLeft={this.props.paddingLeft}
        />
      </div>
    )
  }

  render() {
    var tree = this.state.tree;
    var dragging = this.state.dragging;
    var draggingDom = this.getDraggingDom();

    return (
      <div className="m-tree">
        {draggingDom}
        <Node
          tree={tree}
          index={tree.getIndex(1)}
          key={1}
          paddingLeft={this.props.paddingLeft}
          onDragStart={this.dragStart}
          onCollapse={this.toggleCollapse}
          dragging={dragging && dragging.id}
        />
      </div>
    );
  }

  dragStart = (id, dom, e) => {
    this.dragging = {
      id: id,
      w: dom.offsetWidth,
      h: dom.offsetHeight,
      x: dom.offsetLeft,
      y: dom.offsetTop
    }

    this._startX = dom.offsetLeft
    this._startY = dom.offsetTop
    this._offsetX = e.clientX
    this._offsetY = e.clientY
    this._start = true

    window.addEventListener('mousemove', this.drag)
    window.addEventListener('mouseup', this.dragEnd)
  }

  // oh
  drag = (e) => {
    if (this._start) {
      this.setState({ dragging: this.dragging });
      this._start = false;
    }

    const { tree, dragging } = this.state

    var paddingLeft = this.props.paddingLeft;
    var newIndex = null;
    var index = tree.getIndex(dragging.id);
    var collapsed = index.node.collapsed;

    var _startX = this._startX;
    var _startY = this._startY;
    var _offsetX = this._offsetX;
    var _offsetY = this._offsetY;

    var pos = {
      x: _startX + e.clientX - _offsetX,
      y: _startY + e.clientY - _offsetY
    };
    dragging.x = pos.x;
    dragging.y = pos.y;

    var diffX = dragging.x - paddingLeft/2 - (index.left-2) * paddingLeft;
    var diffY = dragging.y - dragging.h/2 - (index.top-2) * dragging.h;

    if(diffX < 0) { // left
      if(index.parent && !index.next) {
        newIndex = tree.move(index.id, index.parent, 'after');
      }
    } else if(diffX > paddingLeft) { // right
      if(index.prev) {
        var prevNode = this.state.tree.getIndex(index.prev).node;
        if(!prevNode.collapsed && !prevNode.leaf) {
          newIndex = tree.move(index.id, index.prev, 'append');
        }
      }
    }

    if(newIndex) {
      index = newIndex;
      newIndex.node.collapsed = collapsed;
      dragging.id = newIndex.id;
    }

    if(diffY < 0) { // up
      var above = tree.getNodeByTop(index.top-1);
      newIndex = tree.move(index.id, above.id, 'before');
    } else if(diffY > dragging.h) { // down
      if(index.next) {
        var below = tree.getIndex(index.next);
        if(below.children && below.children.length && !below.node.collapsed) {
          newIndex = tree.move(index.id, index.next, 'prepend');
        } else {
          newIndex = tree.move(index.id, index.next, 'after');
        }
      } else {
        var below = tree.getNodeByTop(index.top+index.height);
        if(below && below.parent !== index.id) {
          if(below.children && below.children.length) {
            newIndex = tree.move(index.id, below.id, 'prepend');
          } else {
            newIndex = tree.move(index.id, below.id, 'after');
          }
        }
      }
    }

    if(newIndex) {
      newIndex.node.collapsed = collapsed;
      dragging.id = newIndex.id;
    }

    this.setState({
      tree: tree,
      dragging: dragging
    });
  }

  dragEnd = () => {
    this.setState({
      dragging: {
        id: null,
        x: null,
        y: null,
        w: null,
        h: null
      }
    });

    this.change(this.state.tree);
    window.removeEventListener('mousemove', this.drag);
    window.removeEventListener('mouseup', this.dragEnd);
  }

  change = (tree) => {
    this._updated = true
    if (this.props.onChange) {
      this.props.onChange(tree.obj)
    }
  }

  toggleCollapse = (nodeId) => {
    const { tree } = this.state
        , index = tree.getIndex(nodeId)
        , node = index.node

    node.collapsed = !node.collapsed
    tree.updateNodesPosition()

    this.setState({ tree })
    this.change(tree)
  }
}

export default ReactUiTree
