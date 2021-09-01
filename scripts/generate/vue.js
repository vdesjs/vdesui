const package = require('../../package.json');
const config = require('../vdesui.config').default;
const path = require('path');
const fs = require('fs');

const lang = 'zh-CN';
const packages = [];

const navs = config.locales[lang].navs;

let importStr = `import { App } from 'vue';\n`;

navs.map((item) => {
  item.packages.forEach((element) => {
    const { name, type } = element;
    importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index${
      type === 'methods' ? '' : '.vue'
    }';\n`;
    packages.push(name);
  });
});

let installFunction = `function install(app: App) {
    const packages = [${packages.join(',')}];
    packages.forEach((item:any) => {
      if (item.install) {
        app.use(item);
      } else if (item.name) {
        app.component(item.name, item);
      }
    });
  }`;

let fileStr = `${importStr}
${installFunction}
export { install, ${packages.join(',')}  };
export default { install, version:'${package.version}'};`;

fs.writeFileSync(
  path.resolve(__dirname, `../../src/packages/${package.name}.vue.ts`),
  fileStr
);
