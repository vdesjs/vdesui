const esbuild = require('esbuild');
const path = require('path');
esbuild.buildSync({
  entryPoints: [
      'src/vdesui.config.ts'
  ],
  bundle: true,
  format: 'cjs',
  outfile: 'scripts/vdesui.config.js'
});
