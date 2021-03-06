# React-project

## SET UP

### 1 Create a Repo git then clone it on your computure.
 
### 2 Install globaly Node. js, and parcel:

  For Node.js => https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/
  
  For Parcel run on the terminal :
  
  sudo npm install -g parcel-bundler
  
### 3 Install localy => Inside the Repo git cloned on your machine run:
 
 For npm run on the terminal :
 npm init -y (It installs the package.json in your Repo. The y means to install it locally on the Repo).
 
 For Parcel run on the terminal :
 npm install parcel-bundler -D (You got node_modules/  package-lock.json).

### 4 Create the React-Project => Inside the Repo run:
 
 npm install react react-dom  --save
 
### 5 If yarn is installed in global, it is better to uninstall because npm is enough as package-manager:
  
  In your machine run globaly:
  sudo npm uninstall --global yarn
  
### 6 Creation of folders inside the at the root:
   Inside the Repo at the ROOT /!\ RUN => mkdir src,  
   and the inside the src folder RUN => mkdir components
   
### 7 After creating those folders /inside the Repo run, you need install depencencies for eslint + prettier :
 
 Inside the Repo run:
 npx @becode/eslint-config –with-hook 
 (This command installs all the depencencies needed to use eslint + prettier).
 
 /!\ You may need to install an another depencency called acorn-jsx@7.0.0 (npm install acorn-jsx@7.0.0) to solve some
 security problems, do it if you appears in the terminal.

### 8 Updating the package.json:

  A the begging add a comma to the line inside the scrips: 
  
         "test": "echo \"Error: no test specified\" && exit 1",
         
  and then add the line:
          
          "dev": "parcel ./src/index.html",
          "build": "parcel build ./src/index.html"
   
   So you get the following result inside the package.json.
   
    {"name": "react-private-project",
    "version": "1.0.0",
    "description": "react",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html"
    },

### 9 Before publishing in Github:
 
  => Create (at the Root) gitignore file where you put all the files and folders that should not be publish.
  
  => Inside the git ignore put the following folders and files.
  
  node_modules
  
  .vscode
  
  dist
  
  .cache
  
  .DS_Store
  
  package-lock.json
  
  =>Inside the Repo run:
  
  git rm -r --cached .
  
 /!\ It will only remove the cached files inside your Repo. So you will be able to publish everything but the ignored files
  without deleting anything from your local Repo. 
  

### 10 When pushing your Repo on github:
 
 git add .
 
 git commit -m "Name of your commit" --no-verify
 
 /!\ Here you need to indicate to Eslint to not verify when pushing for the FIRST. So you don't add no-verify to your commit
 each you push).
 
 git push

 /!\ It might ask you to run this command " git push --set-upstream origin initial-push  " in the terminal when pushing for the first time. JUST DO IT. It won't ask you to run it the other times you want to push things.
 
