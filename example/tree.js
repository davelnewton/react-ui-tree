import S from 'string'

const simpleModule = (name, isLeaf, type) => {
  const component = S(name).endsWith('.js') ? 'SimpleSpan2' : 'SimpleSpan'

  return {
    component,
    module: name,
    leaf:   isLeaf
  }
}

const tree = {
  module: 'react-ui-tree',
  children: [
    {
      module: 'dist',
      collapsed: true,
      children: [
        simpleModule('NodeJS', true),
        simpleModule('react-ui-tree.css', true),
        simpleModule('react-ui-tree.js', true),
        simpleModule('tree.js', true)
      ]
    },
    {
      module: 'example',
      children: [
        simpleModule('app.js', true),
        simpleModule('app.less', true),
        simpleModule('index.html', true)
      ]
    },
    {
      module: 'lib',
      children: [
        simpleModule('node.js', true),
        simpleModule('react-ui-tree.js', true),
        simpleModule('react-ui-tree.less', true),
        simpleModule('tree.js', true)
      ]
    },

    simpleModule('.gitiignore', true),
    simpleModule('index.js', true),
    simpleModule('LICENSE', true),
    simpleModule('Makefile', true),
    simpleModule('package.json', true),
    simpleModule('README.md', true),
    simpleModule('webpack.config.js', true)
  ]
}

export default tree
