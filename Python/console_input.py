hello=input("인사말 입력: ")
print("입력하신 인사말은 {0} 입니다.".format(hello), type(hello))

data=input("숫자 입력 : ")
print("입력한 숫자는 {0}이고 타입은 {1} ".format(data, type(data)) )

original_data=100
#sum=original_data+data #Type error
sum=original_data +int(data) #type cast : ValueError 주의
print(sum)
sum=10+10.5
print(type(sum))