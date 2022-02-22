# Collections Framework

### 1. Array

- 정적크기 할당

```java
public class ArrayDomo{
    
    public static void main(String[] args){
        // 크기가 2인 배열 생성
        String[] arrayObj = new String[2];

        arrayOby[0]="one";
        arrayOby[1]="two";
        arrayOby[2]="three"; // 오류 발생

        for(int i=0; i<arrayObj.length;i++){
            System.out.println(arrayObj[i]);
        }
    }
}

```



### 2. ArrayList

- 동적크기 할당

```java
package org.opentutorials.javatutorials.collection; // Collections 라이브러리

import java.util.ArrayList; 

public class ArrayListDomo{
    
    public static void main(String[] args){
        ArrayList al = new ArrayList();
        al.add("one");
        al.add("two");
        al.add("three");

        for(int i=0; i<al.size(); i++){
            String value = (String)al.get(i); // object으로 들어온 데이터타입을 형변환 시킴
            System.out.println(value);
        }

        // 제네릭을 통해 String 형태의 ArrayList 생성하는 법
        // ArrayList<String> al = new ArrayList<String>();
	}
    
}


```



### 3. Set

- 중복제거

```java
package org.opentutorials.javatutorials.collection; // Collections 라이브러리

import java.util.HashSet; 
import java.util.Iterator;

public class SetDomo{
    
    public static void main(String[] args){
        HashSet<Integer> A = new HashSet<Integer>();
        A.add(1);
        A.add(2);
        A.add(3);
	}
    
    Iterator hi = (Iterator) A.iterator();
    while(hi.hasNext()){
        System.out.print(hi.next());
    }
    
}
```



### 4. Map

```java
package org.opentutorials.javatutorials.collection; // Collections 라이브러리

import java.util.Collection; 


public class MapDomo{
    
    public static void main(String[] args){
        HashMap<String, Integer> a = new HashMap<String, Integer>();
        a.put("one", 1);
        a.put("two", 2);
        a.put("three", 3);
        System.out.println(a.get("one"))
	}
    
    Iterator hi = (Iterator) A.iterator();
    while(hi.hasNext()){
        System.out.print(hi.next());
    }
    
}
```



