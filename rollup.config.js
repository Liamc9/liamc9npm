// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  external: ['react', 'prop-types', 'react-dom',     'classnames',
    'react-transition-group',
    'react-player'],
  output: [
    {
      file: pkg.main,
      format: 'cjs', 
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es', // ES Modules
      sourcemap: true
    }
  ],
  plugins: [
    resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),,
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    postcss({
        extensions: ['.css'],
        extract: true, // Extracts CSS to a separate file
        minimize: true, // Minify the CSS
        sourceMap: true,
      }),
  ]
};
