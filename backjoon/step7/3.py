import string

word = input()

alphabet_list = string.ascii_lowercase
# print(alphabet_list)

result = list()
for i in range(len(alphabet_list)):
    index = word.find(alphabet_list[i])
    result.append(str(index))

print(" ".join(result))