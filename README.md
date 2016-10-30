# react-ui-tree

React tree component, forked for my own nefarious uses.

## Current Status

* Example broken
* Distro is custom, but mostly the original
* There will be changes

Uses [js-tree](https://github.com/wangzuo/js-tree) for now but this will likely change.

## Installation

``` sh
npm install react-ui-tree --save
```

## Usage
``` javascript
<Tree
  paddingLeft={20}              // left padding for children nodes in pixels
  tree={this.state.tree}        // tree object
  onChange={this.handleChange}  // onChange(tree) tree object changed
  renderNode={this.renderNode}  // renderNode(node) return react element
/>

// a sample tree object
// node.children, node.collapsed, node.leaf properties are hardcoded
{
  "module": "react-ui-tree",
  "children": [{
    "collapsed": true,
    "module": "dist",
    "children": [{
      "module": "node.js"
    }]
  }]
}
```

## Development
- npm install
- npm start
- http://localhost:8888/example

## License
MIT
