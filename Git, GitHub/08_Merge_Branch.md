# 08. Merge Branch

![branch](images/branch.jpg)

- 병합
  - `git merge {브랜치이름}`

1. Fast-Forward

   ![fast-forward](images/fast-forward.jpg)

   ```
   (main) $ git switch -c login
   (login) $ touch login.txt
   (login) $ git add, git commit
   (login) $ git switch main
   (main) $ git merge login
   ```

   ```
   $ git log --oneline --graph --all
   * 3620487 (HEAD -> main, login) login 추가
   * 98712c2 b 추가
   * 21006da a 추가
   ```

2. 3-Way Merge

   ![3-way](images/3-way.jpg)

3. Merge Conflict

   ![merge-conflict](images/merge-conflict.jpg)

   ```bash
   campusseven04@DESKTOP-KTJ1O7B MINGW64 ~/git-merge (main)
   $ git merge signup
   CONFLICT (add/add): Merge conflict in README.md
   Auto-merging README.md
   Automatic merge failed; fix conflicts and then commit the result.
   
   campusseven04@DESKTOP-KTJ1O7B MINGW64 ~/git-merge (main|MERGING)
   $
   ```

   ```bash
   campusseven04@DESKTOP-KTJ1O7B MINGW64 ~/git-merge (main|MERGING)
   $ git status
   On branch main
   You have unmerged paths.
     (fix conflicts and run "git commit")
     (use "git merge --abort" to abort the merge)
   
   Unmerged paths:
     (use "git add <file>..." to mark resolution)
           both added:      README.md
   
   no changes added to commit (use "git add" and/or "git commit -a")
   
   campusseven04@DESKTOP-KTJ1O7B MINGW64 ~/git-merge (main|MERGING)
   $
   
   ```

   ```bash
   campusseven04@DESKTOP-KTJ1O7B MINGW64 ~/git-merge (main|MERGING)
   $ git commit -m '합의함!'
   [main a202512] 합의함!
   
   campusseven04@DESKTOP-KTJ1O7B MINGW64 ~/git-merge (main)
   $
   
   ```

   

















