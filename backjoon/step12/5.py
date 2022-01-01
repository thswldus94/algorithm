word = input().rstrip()
wordParse = []
for i in range(0, len(word)):
    wordParse.append(word[i])
wordParse.sort(reverse=True)
print(''.join(wordParse))
