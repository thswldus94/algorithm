h, m = map(int, input().split(" "))

time = (h * 60) + m
sub = time - 45

# if sub < 45:
if time < 45:
    h = 23
    m = m - 45 + 60
else:
    h = int(sub / 60)
    m = sub % 60

print(f"{h} {m}")