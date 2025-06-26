/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
module.exports = {
  babelrcRoots: [
    // Keep the root as a root
    '.',

    // Also consider app as "root" and load it's .babelrc files.
    './app/*'
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        include: [
          'proposal-object-rest-spread',
          'transform-classes',
          'transform-destructuring'
        ]
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from'
  ],
  env: {
    production: {
      plugins: [
        '@babel/transform-react-constant-elements',
        '@babel/transform-react-inline-elements',
        'transform-react-remove-prop-types',
        'transform-react-pure-class-to-function'
      ]
    }
  }
};
