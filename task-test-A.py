n = map(int, raw_input().split())

print reduce(lambda a,b: a * b, n)
