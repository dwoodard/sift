//import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    plugins: [ babel() ],
    dest: 'lib/sift.js'
};