const fse = require('fs-extra');
const jr = require('jr');
const path = require('path');
const svg2img = require('svg2img');

const eslintPath = path.join('node_modules', '.bin', 'eslint');
const httpServerPath = path.join('node_modules', '.bin', 'http-server');
const webpackPath = path.join('node_modules', '.bin', 'webpack');

const outDir = 'out';
const srcDir = 'src';

module.exports = () => ({
  build: {
    needs: ['buildDev']
  },
  buildDev: {
    needs: ['bundleDev', 'copyIndex', 'generateFavicon', 'lint']
  },
  buildProd: {
    needs: ['bundleProd', 'copyIndex', 'generateFavicon', 'lint']
  },
  bundleDev: {
    action: jr.scriptAction(webpackPath, ['--hide-modules', '--mode', 'development'], { cwd: __dirname })
  },
  bundleProd: {
    action: jr.scriptAction(webpackPath, ['--hide-modules', '--mode', 'production'], { cwd: __dirname })
  },
  clean: {
    action: () => fse.remove(outDir)
  },
  copyIndex: {
    action: () => fse.copy(path.join(srcDir, 'entry', 'index.html'), path.join(outDir, 'index.html'))
  },
  generateFavicon: {
    action: () => svg2img(path.join(srcDir, 'favicon', 'favicon.svg'), (error, buffer) => {
      if (error) {
        console.error(error);
      } else {
        fse.writeFileSync(path.join(outDir, 'favicon.png'), buffer);
      }
    })
  },
  lint: {
    action: jr.scriptAction(eslintPath, ['src', '--ext', '.ts,.tsx'], { cwd: __dirname })
  },
  publish: {
    action: jr.processAction('gsutil', ['cp', '-r', 'out/**', 'gs://www.jraymakers.com/greennewdealgame'], { cwd: __dirname })
  },
  publishBundle: {
    action: jr.processAction('gsutil', ['cp', 'out/bundle.js', 'gs://www.jraymakers.com/greennewdealgame/bundle.js'],
      { cwd: __dirname })
  },
  serve: {
    action: jr.scriptAction(httpServerPath, ['./out', '-o'], { cwd: __dirname })
  },
  watch: {
    action: jr.scriptAction(webpackPath, ['--hide-modules', '--progress', '--watch'], { cwd: __dirname })
  },
});
