a = input().split()
b = input().split()

length = len(a)
for i in range(length):
    tmp = int(a) * int(b[length - 1 - i])
    print(tmp)

print(int(a) * int(b))