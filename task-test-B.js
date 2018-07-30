const a = readline().split('\r')
  .slice(1)
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

print(Object.keys(a).reduce((h, i) => a[i] > 1 ? h + 1 : h, 2).toString());
