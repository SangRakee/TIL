hello=" Hello Python " #문자열 배열: 0~len()-1

print(hello[1:3]) #index 1부터 (3-1)개 문자열
print(len(hello)) #문자열 길이
print("문자열 길이는 {0} 입니다.".format(len(hello)) ) #문자열 형식 지정 IndexError 주의
print(hello.upper())
print(hello.lower())
print(hello.strip())

num_string=input("숫자 입력 : ")
print("{0} 이 숫자인가? {1} ".format(num_string, num_string.isdecimal()))
if num_string.isdecimal(): num1 = 10+int(num_string)

print("'l'문자열 검색 ", hello.find("l")) # 검색한 문자열 first index return
print("'l'문자열 검색 ", hello.rfind("l")) #검색한 문자열 last index return
print("'l'문자열 포함여부 ", ("l" in hello )) #문자열 포함 여부 return
print(hello.split(" ")) #split token으로 문자열 나누어 list로 리턴



