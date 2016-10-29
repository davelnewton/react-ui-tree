import cx from 'classnames'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import tree from './tree'

import ReactUiTree from '../lib/react-ui-tree'

require('../lib/react-ui-tree.less');
require('./theme.less');
require('./app.less');

const SimpleSpan = (props) => {
  const { node, active, onClick } = props
      , className = cx('node', { 'is-active': active })

  return (
    <span className={className} onClick={onClick}>
      {node.module}
    </span>
  )
}

const SimpleSpan2 = (props) => {
  const { node, active, onClick } = props
      , className = cx('node2', { 'is-active': active })

  return (
    <span className={className} onClick={onClick}>
      {node.module}
    </span>
  )
}

class App extends Component {
  state = { tree, active: null }

  onClickNode = (node) => {
    this.setState({ active: node })
  }

  renderNode = (node) => {
    const activeNode = this.state.active
        , isNodeActive = node === activeNode
        , clickHandler = this.onClickNode.bind(null, node)
        , nodeProps = {
            node,
            onClick: clickHandler,
            active:  isNodeActive
          }

    let Component

    switch (node.component) {
      case 'SimpleSpan':  Component = SimpleSpan; break;
      case 'SimpleSpan2': Component = SimpleSpan2; break;
      default: Component = SimpleSpan
    }

    // return (
    //   <SimpleSpan
    //   node={node}
    //   onClick={clickHandler}
    //   active={isNodeActive}
    //   />
    // )
    return <Component {...nodeProps} />
  }

  render = () =>
    <div className="app">
      <div className="tree">
        <ReactUiTree
          paddingLeft={20}
          tree={this.state.tree}
          onChange={this.handleChange}
          isNodeCollapsed={this.isNodeCollapsed}
          renderNode={this.renderNode}
        />
      </div>

      <div className="inspector">
        <button onClick={this.updateTree}>Add Node to Tree</button>

        <pre>
          {JSON.stringify(this.state.tree, null, 2)}
        </pre>
       </div>
    </div>

  handleChange = (tree) => this.setState({ tree })

  updateTree = () => {
    var { tree } = this.state

    tree.children.push({ module: 'test' })
    this.setState({ tree })
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
