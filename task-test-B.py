from collections import defaultdict

def DFS(G,v,seen=None,path=None):
    if seen is None: seen = []
    if path is None: path = [v]

    seen.append(v)

    paths = []
    for t in G[v]:
        if t not in seen:
            t_path = path + [t]
            paths.append(tuple(t_path))
            paths.extend(DFS(G, t, seen[:], t_path))
    return paths

edges = []

for i in xrange(int(raw_input())):
    edges.append(map(lambda x: x.lower(), raw_input().split(' reposted ')))

G = defaultdict(list)

for (s,t) in edges:
    G[s].append(t)
    G[t].append(s)

all_paths = DFS(G, 'polycarp')
max_len   = max(len(p) for p in all_paths)

print(max_len)
