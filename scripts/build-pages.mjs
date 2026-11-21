import fs from 'node:fs/promises';
await fs.mkdir('build',{recursive:true});
await fs.cp('public','build',{recursive:true});
await fs.writeFile('build/.nojekyll','');
console.log('Static site built in build/');
