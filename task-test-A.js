const a = readline().split(' ').map(i => parseInt(i));

print(a.reduce((b, c) => b * c, 1).toString());
