# try :
#     예외 발생 가능 실행문
#     정상흐름 구현
# except :
#     예외 발생시 실행문
# finally:
#     에외 발생여부 상관없이 실행되는 실행문
#Multi Exception 처리 : SubClass 타입부터 처리 
list_data=[1,2,3,4,5]
divide_sum=0
try:
    r = int(input("반지름 ? "))  #ValueError
    # for data in list_data: #0~len(list_data)-1
    #    print(data)
    print("list_data length : ", len(list_data))
    for index in range(len(list_data)+1) :
        divide_sum += list_data[index]/r  #ZeroDivsionError
        print("{0}번째 데이터 : {1}".format(index, list_data[index])) #IndexError

    print("원의 반지름 :",r)
    print("원 둘레 :",2*3.14*r)
    print("원 넓이 : ", 3.14*r*r)
except ValueError:
    print("ValueError : 숫자입력")
except IndexError:
    print("IndexError : 리스트 데이터는 0~{0}까지 접근가능".format(len(list_data)-1))
except Exception as error :
    print(error,"프로그램 비정상종료")
finally:
    print("예외 여부 관계없이 출력")

# 사용자 정의 예외 - 클래스
# 1. Exception을 상속받는 사용자정의 예외클래스 정의
# 2. 함수 예외상황이 발생됐을 때 raise 이용 강제로 예외 발생
# 3. 호출하는 쪽에서 처리
# try : 
#     사용자 정의 예외 발생하는 함수 호출 
# except 사용자정의예외클래스 타입 :
#     예외처리 실행문
# finally :
#     무조건 실행되는 실행문     


# class UserException(Exception) :
#     def __init__(self) :
#         Exception.__init__(self)
    
#     def __str__(self):
#         return "사용자 정의 오류 발생"

class UserException(Exception) :
    def __init__(self, message) :
        super().__init__(message)


raise UserException("사용자 정의 오류 발생")