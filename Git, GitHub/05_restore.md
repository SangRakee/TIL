# 05. 취소하기

1. git add 취소하기

   ```bash
   $ git status
   On branch main
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)
           new file:   f.txt
   
   ```

   ```bash
   $ git restore --staged f.txt
   ```

   - 구버전

     ```bash
     $ git reset HEAD f.txt
     ```

   ```bash
   $ git status
   On branch main
   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           f.txt
   
   nothing added to commit but untracked files present (use "git add" to track)
   
   ```

2. git commit 취소 (되돌아가기)

   ```
   $ git reset (--mixed) [돌아갈 commit의 hash]
   ```

   ```
   $ git reset 0935e32
   ```

   - 옵션

     ```
     $ git reset --mixed [hash]
     ```

     - staging 없앰 + **작업한 것은 남아있음**.
     - 아무것도 입력 안하면 이 친구 사용!

     ```
     $ git reset --soft [hash]
     ```

     - staging 그대로 유지 + **작업한 것 남아있음.**

     ```
     $ git reset --hard [hash]
     ```

     - **[주의]** 완전히 취소하는 것 (작업한 것도 삭제!)

   - hash

     - ```
       git reset 0935e3213cad77483cc39015d22d1dce82835f3b
       ```

   - HEAD의 상대적 위치

     - HEAD~{숫자}
       - HEAD~1 (`HEAD~`)
       - HEAD~2

     ```bash
     $ git reset HEAD~
     ```

     - commit 되돌리기
       - HEAD~1 (1단계 전으로 되돌리고)
       - `--mixed`: staging은 취소, 작업 내용은 유지

   - git log시 내용이 너무 많이 잘리는 경우
     - q로 종료
     - 방향키로 위아래 왔다갔다 할 수 있음



3. WD(Working Directory) 변경 내용 취소(삭제)하기, 원상 복구

   - WD
     - 지금 우리가 작업 중인 공간
     - == Git이 관리하고 있는 공간
     - == 기록이 한번이라도 기록된 파일들이 있는 공간

   ```bash
   $ git restore [파일명]
   $ git restore a.txt
   ```

   - 구버전

     ```bash
     $ git checkout -- [파일명]
     ```

     







