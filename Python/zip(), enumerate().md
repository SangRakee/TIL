# zip(), enumerate()

```
array1=[3,6,3,1,1]
array2=['a','b','c','d','e']
```

- zip()  // 배열 두개 합친 것

  ```python
  for x,y in zip(array1,array2):
  	print(x,y)
  ```

  ```
  3 a
  6 b
  3 c
  1 d
  1 e
  ```

  

- enumerate()  // 해당 배열을 index, value 값을 뽑을 때

  ```python
  for index,value in enumerate(array2):
      print(index, value)
  ```

  ```
  0 a
  1 b
  2 c
  3 d
  4 e
  ```

  

