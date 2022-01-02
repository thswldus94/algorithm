t = input()

for i in range(int(t)):
    r, s = input().split(" ")

    result = ''
    for k in range(len(s)):
        result = result + (s[k] * int(r))

    print(result)