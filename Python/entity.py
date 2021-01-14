#부모class (Super Class) : attribute와 operation 자식class(Sub Class)에서
#                          사용허용(상속)
class Person:
    def __init__(self, id, name):  #Person() : 생성자 호출 시 내부적으로 호출
        self.id = id               #객체생성 시 초기화 구현    
        self.name = name           #{"id":id, "name":name} 

    def info(self):                #객체 operation : member method
        print("아이디:{0} 이름:{1} ".format(self.id, self.name), end=" ")

    #object 클래스의 __str__ 재정의
    def __str__(self):
        return "아이디:{0} 이름:{1} ".format(self.id, self.name)

    def  __eq__(self,id):
        if self.id ==id:
            return True
        else:
            False

#Person의 Sub Class 
class Student(Person) :
    def __init__(self, id, name, major):
        super().__init__(id, name)    #Super class의 생성자 호출
        self.major = major
    
    # def student_info(self):
    def info(self): #Person info Override
        super().info()                  #Super class의 method 호출
        print("전공:{0} ".format(self.major))
    
    # __str__재정의 : Override
    def __str__(self):
        return super().__str__()+" 전공:{0} ".format(self.major)

class Teacher(Person) :
    def __init__(self, id, name, subject) :
        super().__init__(id, name)
        self.subject = subject

    # def teacher_info(self):
    def info(self):  #Person info Override
        super().info()
        print("과목:{0}".format(self.subject))

    def __str__(self):
        return super().__str__()+" 과목:{0}".format(self.subject)  

class Employee(Person) :
    def __init__(self, id, name, department) :
        super().__init__(id, name)
        self.department = department
    
    # def employee_info(self):
    def info(self):  #Person info Override
        super().info()
        print("부서:{0}".format(self.department))

    def __str__(self):
        return super().__str__()+" 부서:{0}".format(self.department)     
    
    

#사용자 코드
#객체생성 : Class이름([agrumentlist])
student = Student("CMSA07","박기윤","정보통신")
student2 = Student("CMSA07","박기윤","정보통신")
teacher = Teacher("T001","박지수","함수형프로그래밍")
employee = Employee("E001","심아윤","연구소")

#__eq__재정의하기 전 객체의 주소값 비교
if student == student2 :
    print("student == students")
else :
    print("student != students")

# print("isinstance student Student : " , isinstance(student, Student))
# print("isinstance student Teacher : " , isinstance(student, Teacher))
# print("isinstance student Person : " , isinstance(student, Person))

#객체사용  : object이름.변수,  object아름.기능([argumentlist])
# student.student_info()
# teacher.teacher_info()
# employee.employee_info()
#다형성 : 한 가지 타입으로 여러형태 사용  예)Person 타입의 Student, Teacher, Employee
#        Super에서 제공되는 method를 Sub에서 재정의할 수 있다. - 사용자가 Super의 method를
#        호출하더라도 재정의된 Sub의 method가 다양하게 응답될 수 있다. 
student.info()
teacher.info()
employee.info()

#객체 출력 - 최상위 object class의 __str__ 호출 
#         - Sub Class에서 재정의한 경우 Sub의 재정의된 메서드 응답
# print(student)
# print(teacher)
# print(employee)





