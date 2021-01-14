#text data file 출력
write_file = open("hello.txt", "w")
write_file.write("Hello Python...\n")
write_file.close() #자원반납

#with open(file명, mode) as file객체 : 
#mode : "w"(overwrite), "a"(append write), "r"(read)
#자원반납 자동으로 
with open("hello.txt","a") as file:
    file.write("File Write Test")

#file read => console 출력
with open("hello.txt", "r") as read_file:
    print("hello.txt 파일 내용 : ", read_file.read())

# console입력 => file 출력
read_data = input("파일에 저장할 데이터 입력 : ")
with open("console_input.txt", "w") as console_file:
    console_file.write(read_data) 

#file입력=> file출력(file copy)
file_read = open("console_input.txt","r") 
file_copy = open("console_input_copy.txt", "w")
file_copy.write(file_read.read())
file_read.close()
file_copy.close()