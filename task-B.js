var a = readline();
var b = readline();
var c = b.split('');
var d = 0;
var e = 0;
var f = 0;
var g = [];

for (var i = 0; i < a - 1; i++) {
  d = c[i];
  e = i;

  for (var j = i + 1; j < a; j++) {
    if (d > c[j]) {
      d = c[j];
      e = j;
    }
  }

  if (e !== i) {
    var h = c[i];
    c[i] = c[e];
    c[e] = h;

    g.push([e + 1, i + 1]);
    f++;
  }
}

print(f);
g.map(k => k.join(' ')).forEach(l => print(l));
