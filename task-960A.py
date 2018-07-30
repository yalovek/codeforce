letters = list(raw_input())

a = 0
b = 0
c = 0

for letter in letters:
    if letter == 'a' and b == 0 and c == 0:
        a += 1
    elif letter == 'b' and a > 0 and c == 0:
        b += 1
    elif letter == 'c' and a > 0 and b > 0:
        c += 1
    else:
        break

if a != 0 and b != 0 and c != 0 and (a == c or b == c):
    print 'YES'
else:
    print 'NO'
