a, b, c = map(int, input().split())

if b == c:
    print(-1)
else:
    total = a / (c-b)
    if total < 0:
        print(-1)
    else:
        print(int(total) + 1)