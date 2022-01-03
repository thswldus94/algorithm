a = int(input())

num1 = 0
num2 = 1

# result = 0
for _ in range(a):
    result = num1 + num2

    num1 = num2
    num2 = result
    # print(num2)

print(num1)