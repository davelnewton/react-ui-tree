import cx from 'classnames'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const stopEventPropagation = (e) => e.stopPropagation()

class Node extends Component {
  displayName = 'UITreeNode'

  renderCollapse() {
    const { index } = this.props

    if (!(index.children && index.children.length)) {
      return null
    }

    const collapsed = index.node.collapsed

    return (
      <span
        className={cx('collapse', collapsed ? 'caret-right' : 'caret-down')}
        onMouseDown={this.stopEventPropagation}
        onClick={this.handleCollapse}>
      </span>
    )
  }

  renderChildren() {
    const { index, tree, dragging } = this.props

    if (!(index.children && index.children.length)) {
      return null
    }

    var childrenStyles = {};
    if (index.node.collapsed) childrenStyles.display = 'none';
    childrenStyles['paddingLeft'] = this.props.paddingLeft + 'px';

    return (
      <div className="children" style={childrenStyles}>
        {index.children.map((child) => {
          var childIndex = tree.getIndex(child)
          return (
            <Node
              tree={tree}
              index={childIndex}
              key={childIndex.id}
              dragging={dragging}
              paddingLeft={this.props.paddingLeft}
              onCollapse={this.props.onCollapse}
              onDragStart={this.props.onDragStart}
            />
          )
        })}
      </div>
    )
  }

  render() {
    const { tree, index, dragging } = this.props
        , node   = index.node
        , styles = {}

    return (
      <div className={cx('m-node', {
        'placeholder': index.id === dragging
      })} style={styles}>
        <div className="inner" ref="inner" onMouseDown={this.handleMouseDown}>
          {this.renderCollapse()}
          {tree.renderNode(node)}
        </div>
        {this.renderChildren()}
      </div>
    )
  }

  handleCollapse = (e) => {
    e.stopPropagation()
    var nodeId = this.props.index.id
    if (this.props.onCollapse) this.props.onCollapse(nodeId)
  }

  handleMouseDown = (e) => {
    const dom    = this.refs.inner
        , nodeId = this.props.index.id

    if (this.props.onDragStart) {
      this.props.onDragStart(nodeId, dom, e)
    }
  }
}

export default Node
