import ttypescript from "ttypescript";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import html from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import {htmlTemplate} from './rollup-html';

const distPath = 'build';

export default {
	input: {
		index: 'src/index.ts',
	},
	output: {
		entryFileNames: '[name].js',
		dir: distPath,
		format: 'es',
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript({typescript: ttypescript}),

		html({
			template: htmlTemplate,
			title: 'reflection-for-typescript'
		}),

		livereload(distPath),

		serve({
			//open: true,
			contentBase: distPath
		})
	]
};