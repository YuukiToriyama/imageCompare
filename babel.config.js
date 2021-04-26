module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'modules': 'false',
        'useBuiltIns': 'usage',
        'targets': '> 0.25%, not dead',
      }
    ],
    "@babel/react"
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
  },
  plugins: [
    "@babel/plugin-syntax-jsx"
  ]
};
