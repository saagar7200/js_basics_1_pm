//! git & github
//* git -> vcs , tool

//* github ->
// gitlab , bitbucket,

//! git commands
//? config
//* git config --global --list
//* git config --global user.name "user name"
//* git config --global user.email "abc@gmail.com"
//* git config --global init.defaultbranch "main"

//! repository / repo
// local  ->
// remote

//? initialize git repo
//* git init   // Initialized empty Git repository

//! git work flow

//? working directory     ->             staging area          ->         local repo        -> remote repo
//   changes                              ready state                        commit /
//                                       git add .                    git commit -m  "msg"       git push origin branch_name

//* git status
//* git add <file_path>
//* git add .
//* git commit -m "<commit_message>"
//* git push origin <branch_name>
//* git pull origin <branch_name>

//? remote
//* git remote -v
//* git remote add origin <remote_url>
//* git remote remove origin

//todo: branch
//* git branch -> list all local branches
//* git branch <branch_name>    -> create new branch
//* git branch -d <branch_name>  -> delete local branch
//* git switch <branch_name>    -> switch between branch   // git checkout <branch_name>
//* git switch -c <branch_name> -> create & switch branch  // git checkout -b <branch_name>

//* git merge <branch_name>

//* git stash
//* git stash pop

//! pull request -> PR
