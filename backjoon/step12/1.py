cnt = int(input())

nums = []
for i in range(0, cnt):
    tmpNum = int(input())
    nums.append(tmpNum)


def bubbleSort(arr):
    for n in range(cnt - 1, 0, -1):
        for m in range(0, n):
            tmp = 0
            if arr[m] > arr[m + 1]:
                tmp = arr[m]
                arr[m] = arr[m + 1]
                arr[m + 1] = tmp
    return arr


for num in bubbleSort(nums):
    print(num)
