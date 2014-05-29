## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  

#### add
This command moves a file into the staging area, indicating that it's ready to be committed. You cannot commit a file until you have added it to the staging area. 

#### branch
If you run "git branch", you will get a list of all your local branches. If you want to create a new branch from a master, you should run "git branch (branchname)".

#### checkout
This command allows you to look into a repository that you aren't currently in. 

#### clone
This command duplicates an existing repository. 

#### commit
This command takes files from your staging area and creates a snapshot that's saved, along with a commit message, and can be accessed later. The files must be added to the staging area before you can commit them. 

#### fetch
This command retrieves changes from another repository but will not merge the changes. 

#### log
This command shows a journal of all the changes you've committed so far.

#### merge
This command merges changes from two different branches, using their commits.

#### pull
This command retrieves changes from another repository and merges these changes. 

#### push
This command takes the commits from a repository and pushes the changes to the remote repository. 

#### reset
This command clears files from a staging area. 

#### rm
This command removes files from the working directory. 

#### status
This commands gives you the status of all the files you are tracking, showing if the files are edited, new, staged or deleted. 

## Release 4: Git Workflow

- Push files to a remote repository
1. git remote -v: lists your current remotes
2. git remote add (remotename) (url): creates remote if you need to add new remote
3. git remote -v: lists your current remotes
4. git push (remotename) (localbranch): pushes from (localbranch) to (remotename)
	a. example: git push origin master: pushes from local branch (master) to remote on git hub (origin)


- Fetch changes (and merge)
1. git remote -v: lists your current remotes
2. git remote add (reponame) (url): creates remote if you need to add new remote
3. git remote -v: lists your current remotes
4. git fetch (reponame): retrieves any changes from remote repo
5. git branch -va: see if branch is there from the fetch; see if you're in master
6. git merge (fetchedbranch)/(localbranch): merges fetched branch with your local branch
	a. example: git merge upstream/master: merges upstream's master (upstream) into local repo (master)
7. git commit -m "merged changes from fetch"


- Commit locally
1. git status: check status of files
2. git add (filename): adds files to staging area
3. git status: check that files are in staging area
4. git commit -m "commit message here": commits files
5. git log: check that file has been commmitted


## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

Fortunately, I did not run into any errors running these git commands. Meanwhile, I did have some trouble earlier this week when I was fetching changes from the DBC remote repo, but it was easy to resolve. I just had to reconcile some merge conflicts. 

## Release 6: Reflection

It took me a while to get accustomed to using git commands in the terminal, but I'm starting to see that they're not as difficult to use as I had initially thought. It's not as convenient as GitHub, but it's just a matter of getting familiar with the commands. I've been using git to commit and push the assignments I've done this week and the practice has definitely helped me feel more at ease about using commit, push, fetch and log.

I enjoyed creating the git workflow since it forced me to actually try out the various commands. I learn best through experimentation, so testing out my own instructions helped solidify what I learned. 