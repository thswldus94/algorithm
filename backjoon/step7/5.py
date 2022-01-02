import string

word = input()

alphabet_list = string.ascii_lowercase
case_dict = dict()
for i in range(len(alphabet_list)):
    case_dict[alphabet_list[i]] = 0

for j in range(len(word)):
    lower_word = word[j].lower()
    case_dict[lower_word] = case_dict[lower_word] + 1

result = sorted(case_dict.items(), key=(lambda x:x[1]), reverse=True)

if len(result) == 1:
    print(result[0][0].upper())
else:
    if result[0][1] > result[1][1]:
        print(result[0][0].upper())
    elif result[0][1] == result[1][1]:
        print("?")

