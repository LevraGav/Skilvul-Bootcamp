# 03-branch-and-merge

1. What does `git clean` do? <br>
`git-clean` - Remove untracked files from the working tree
Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.<br>
Normally, only files unknown to Git are removed, but if the -x option is specified, ignored files are also removed. This can, for example, be useful to remove all build products.<br>
If any optional `<path>...` arguments are given, only those paths are affected.<br>

2. What do the `-d` and `-f` flags for `git clean` do?<br>
`-d` <br>
Normally, when no `<path>` is specified, git clean will not recurse into untracked directories to avoid removing too much. Specify -d to have it recurse into such directories as well. If any paths are specified, -d is irrelevant; all untracked files matching the specified paths (with exceptions for nested git directories mentioned under --force) will be removed.<br>
`-f`<br>
`--force`<br>
If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i. Git will refuse to modify untracked nested git repositories (directories with a .git subdirectory) unless a second -f is given.<br>

3. What `git` command creates a branch?<br>
`git-branch` - List, create, or delete branches<br>
`git branch <branch name>`<br>

4. What is the difference between a fast-forward and recursive merge?<br>
fast-forward<br>
Often the current branch head is an ancestor of the named commit. This is the most common case especially when invoked from `git pull`: you are tracking an upstream repository, you have committed no local changes, and now you want to update to a newer upstream revision. In this case, a new commit is not needed to store the combined history; instead, the HEAD (along with the index) is updated to point at the named commit, without creating an extra merge commit.<br>
recursive <br>
This can only resolve two heads using a 3-way merge algorithm. When there is more than one common ancestor that can be used for 3-way merge, it creates a merged tree of the common ancestors and uses that as the reference tree for the 3-way merge. This has been reported to result in fewer merge conflicts without causing mismerges by tests done on actual merge commits taken from Linux 2.6 kernel development history. Additionally this can detect and handle merges involving renames, but currently cannot make use of detected copies. This is the default merge strategy when pulling or merging one branch.<br>

5. What `git` command changes to another branch?<br>
`git checkout <branch name>`<br>

6. How do you remove modified or deleted files from the working directory?<br>
`git add -u` <br>

7. What `git` command deletes a branch?<br>
`git branch -b <branchname>`<br>

8. What does the `git diff` command do?<br>
`git-diff` Show changes between the working tree and the index or a tree, changes between the index and a tree, changes between two trees, changes resulting from a merge, changes between two blob objects, or changes between two files on disk. <br>

9. How do you remove files from the staging area?<br>
`git-rm` - Remove files from the working tree and from the index <br>

10. How do merge conflicts happen? <br>
A merge conflict happens when two branches both modify the same region of a file and are subsequently merged. Git can't know which of the changes to keep, and thus needs human intervention to resolve the conflict.<br>