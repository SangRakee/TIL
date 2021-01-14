#dictionary type : variable_name= {"name":"value",....}  value: int, float, boolean, str, list
#value access : variable_name{"name"}
# student ={"name":"고재경", "age":26, "major":"컴공" }
# print("이름:{0}  나이:{1}  전공:{2} ".format(student["name"], student["age"], student["major"]))
# students =[{"name":"고재경", "age":26, "major":"컴공" },{"name":"권혜영", "age":25, "major":"정보보호" } ]
students=[]
students.append({"name":"고재경", "age":26, "major":"컴공" })
students.append({"name":"권혜영", "age":25, "major":"정보보호" })

for s in students:
    # print("이름:{0}  나이:{1}  전공:{2} ".format(s["studentid"], s["age"], s["major"]))#KeyError:'studentid'
    print("이름:{0}  나이:{1}  전공:{2} ".format(s["name"], s["age"], s["major"]))


#dictionary 추가 수정 : "name":value 쌍으로 추가 수정 ("name" 존재하면 수정, 존재하지 않으면 추가)
students[0]["studentid"] = "CloudMSA01"
print(students[0])
students[0]["major"] = "컴퓨터공학"
print(students[0])
#dictionary 삭제
del students[0]["studentid"]
print(students[0])
#get() : key check 없는 경우  None  return
key_value = input("student 속성 입력(name, age, major) ")
while students[0].get(key_value) == None :
    key_value = input("student 속성 입력(name, age, major) ")
print("{0} key의 value 값 : {1} ".format(key_value, students[0][key_value]))
