const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');
const packagesDir = path.resolve(__dirname, '../packages');
const reactDir = path.join(packagesDir, 'react/src');
const vueDir = path.join(packagesDir, 'vue/src');

function copyRecursiveSync(src, dest, filterStr) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    const isExcluded = (name) => {
        if (filterStr === 'react' && name.endsWith('.vue')) return true;
        if (filterStr === 'vue' && (name.endsWith('.jsx') || name.endsWith('.tsx'))) return true;
        return false;
    }

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            if (isExcluded(childItemName)) return;
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName), filterStr);
        });
    } else {
        if (!isExcluded(path.basename(src))) {
            fs.copyFileSync(src, dest);
        }
    }
}

// 1. Copy Components
console.log('Copying components...');
copyRecursiveSync(path.join(srcDir, 'components'), path.join(reactDir, 'components'), 'react');
copyRecursiveSync(path.join(srcDir, 'components'), path.join(vueDir, 'components'), 'vue');

// 2. Copy Styles
console.log('Copying styles...');
copyRecursiveSync(path.join(srcDir, 'styles'), path.join(reactDir, 'styles'), 'both');
copyRecursiveSync(path.join(srcDir, 'styles'), path.join(vueDir, 'styles'), 'both');

// 3. Copy Utils
console.log('Copying utils...');
copyRecursiveSync(path.join(srcDir, 'utils'), path.join(reactDir, 'utils'), 'both');
copyRecursiveSync(path.join(srcDir, 'utils'), path.join(vueDir, 'utils'), 'both');


// 4. Handle Entry Points
console.log('Handling entry points...');
// React
const entryReactContent = fs.readFileSync(path.join(srcDir, 'entry-react.ts'), 'utf8');
fs.writeFileSync(path.join(reactDir, 'index.ts'), entryReactContent);

// Vue
const entryVueContent = fs.readFileSync(path.join(srcDir, 'entry-vue.ts'), 'utf8');
fs.writeFileSync(path.join(vueDir, 'index.ts'), entryVueContent);

// 5. Copy extra files
// Shim files
if (fs.existsSync(path.join(srcDir, 'style-shim.d.ts'))) {
    fs.copyFileSync(path.join(srcDir, 'style-shim.d.ts'), path.join(reactDir, 'style-shim.d.ts'));
    fs.copyFileSync(path.join(srcDir, 'style-shim.d.ts'), path.join(vueDir, 'style-shim.d.ts'));
}
if (fs.existsSync(path.join(srcDir, 'vue-shim.d.ts'))) {
    fs.copyFileSync(path.join(srcDir, 'vue-shim.d.ts'), path.join(vueDir, 'vue-shim.d.ts'));
}

console.log('Migration script completed.');
