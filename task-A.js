var a = readline();
var f = 20 * 12;
var b = a % f;
var c = b % 12;
print([(a - b) / f, (b - c) / 12, c].join(' '));
