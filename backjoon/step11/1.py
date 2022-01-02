n, m = map(int, input().split(" "))

num_list = list(map(int, input().split(" ")))
print(num_list)

s = 0
for i in range(n):
    if i + 1 >= n:
        next = i
    else:
        next = i + 1

    s = num_list[i] + num_list[next] + num_list[n - 1 - i]
    if s < m or s > m:
        continue
    else:
        break

print(s)