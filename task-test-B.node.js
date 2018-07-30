const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin
});

const a = [];

r.on('line', l => {
  a.push(l);
}).on('close', () => {
  const d = a.slice(1)
  .reduce((b, c) => c.toLowerCase()
    .split(' reposted ')
    .reduce((e, g) => {
      if (g !== 'polycarp') {
        if (e[g]) {
          e[g] += 1;
        } else {
          e[g] = 1;
        }
      }

      return e;
    }, b)
  , {});

  process.stdout.write(`${Object.keys(d).reduce((h, i) => d[i] > 1 ? h + 1 : h, 2)}`);
});
