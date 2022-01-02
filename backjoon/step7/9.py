import re

word = input()

c_alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

cnt = 0
for i in range(len(c_alpha)):
    matches = re.findall(c_alpha[i], word)
    cnt = cnt + len(matches)
    word = word.replace(c_alpha[i],  " ")

remain_word = word.replace(" ", "")
print(cnt + len(remain_word))