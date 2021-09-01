const tsMorph = require('ts-morph');
const vueCompiler = require('@vue/compiler-sfc');
const fs = require('fs');
const fg = require('fast-glob');
const path = require('path');

const babel = require('@babel/core');
const jsx = require('@vue/babel-plugin-jsx');

const outDir = 'types';

function genType(outDir, files, isLog = false) {
  const tsConfigFilePath = fs.existsSync('tsconfig.json')
    ? 'tsconfig.json'
    : undefined;

  const compilerOptions = {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    noEmitOnError: true
  };
  compilerOptions.outDir = outDir;

  const project = new tsMorph.Project({
    compilerOptions,
    tsConfigFilePath,
    skipAddingFilesFromTsConfig: true
  });

  let index = 1;
  const sourceFiles = [];
  files.map((file) => {
    if (/\.vue$/.test(file)) {
      const { parse, compileScript, rewriteDefault } = vueCompiler;
      const vueContent = fs.readFileSync(file, 'utf-8');
      const { descriptor } = parse(vueContent);
      const { script, scriptSetup } = descriptor;
      if (script || scriptSetup) {
        let content = '';
        let isTs = false;
        if (script && script.content) {
          if (script.lang == 'tsx') {
            const result = babel.transform(script.content, {
              plugins: [
                jsx,
                [
                  require('@babel/plugin-transform-typescript'),
                  // @ts-ignore
                  { isTSX: true, allowExtensions: true }
                ]
              ]
            });
            content = content + result.code;
          } else {
            content += script.content;
          }

          if (/tsx?/.test(script.lang)) isTs = true;
        }

        if (scriptSetup) {
          const compiled = compileScript(descriptor, {
            id: `${index++}`
          });
          content += compiled.content;
          if (scriptSetup.lang === 'ts') isTs = true;
        }
        const sourceFile = project.createSourceFile(
          path.relative(process.cwd(), file) + (isTs ? '.ts' : '.js'),
          content
        );
        sourceFiles.push(sourceFile);
      }
    } else if (/\.ts$/.test(file)) {
      const tsContent = fs.readFileSync(file, 'utf-8');
      const sourceFile = project.createSourceFile(
        path.relative(process.cwd(), file),
        tsContent,
        {
          overwrite: true
        }
      );
      sourceFiles.push(sourceFile);
    }
  });

  const diagnostics = project.getPreEmitDiagnostics();
  // console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))
  // const emitted = project.emitToMemory();

  for (const sourceFile of sourceFiles) {
    const emitOutput = sourceFile.getEmitOutput();
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath();
      fs.mkdirSync(path.dirname(filepath), { recursive: true });
      fs.writeFileSync(filepath, outputFile.getText(), 'utf8');
      if (isLog) {
        console.log('genType:' + filepath);
      }
    }
  }
}

const files = fg.sync('src/packages/**/index.vue');
files.push('src/packages/vdesui.vue.ts');

genType(outDir, files, true);
