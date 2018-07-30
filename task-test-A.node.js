const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin
});

const a = [];

r.on('line', l => {
  l.split(' ').forEach(i => a.push(parseInt(i)));
}).on('close', () => {
  process.stdout.write(`${a.reduce((b, c) => b * c, 1)}`);
});
