case = int(input())

result = 0
for i in range(case):
    exist_words = list()

    word = input()

    flag = False
    for j in range(len(word)):
        if word[j] in exist_words:
            prev_word = word[j - 1]

            if word[j] == prev_word:
                flag = True
            else:
                flag = False
        else:
            flag = True
            exist_words.append(word[j])

    if flag:
        result = result + 1

print(result)


