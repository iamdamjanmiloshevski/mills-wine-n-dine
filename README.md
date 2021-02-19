
# Baba Mirka REST API
#### Simple REST API for serving clients with traditional Macedonian dishes

## Powered by **ExpressJS** , built with ❤️
![Licence](https://img.shields.io/aur/license/android-studio)

![NodeJS & MongoDB](https://koenig-media.raywenderlich.com/uploads/2014/03/MongoDB.png)

### Contents
- [1. Installation](#1-installation)
- [2. MongoDB setup](#2-mongodb)
- [3. Postman](#3-installing-postman)
- [4. Running the server](#4-running-the-server)

#### Prerequisites
To run this Express server locally you'll have to install several things on your machine so that it can be accessed via http://localhost:3000 once everything is set correctly. You may change the port if you want, but 3000 is default. 
To set it up correctly please follow the steps above

## 1. Installation

 1. Installing node.js (you can skip this step if you already have node installed on your machine)
    - To install Node.js go to [NodeJS official   page] (https://nodejs.org/en/) and install the latest version available. After the installation finishes, open Terminal (MacOS/Linux) or PowerShell,Command Prompt (Windows) and type `node -v` and it should print you the version you installed. For example `v15.8.0`
  
    - Installing npm (Node Package Manager)
    - Go to the folder where you cloned this project and open it via Terminal or PowerShell/Command Prompt (or navigate to it in the terminal)
  
    - Type `npm install`. If there some errors during the installation follow the instructions in the terminal to fix them. After installation is complete type `npm -n` and it should print you the version of npm installed. Ex. `7.5.1`
  
    - After installing npm, you should install several additional npm packages required for this project
2. Install IDE of your choice (skip this step if you already have IDE you want to work with)

    1. [Visual Studio Code](https://code.visualstudio.com/)
    2. [Atom](https://atom.io/)
    3. [Sublime Text](https://www.sublimetext.com/3)

## 2. MongoDB
This server is powered by MongoDB. You should install MongoDB on your local machine and set it up. The process is quite lengthy but MongoDB provides good documentation therefore you should follow the steps for installing the community server locally and setting up MongoDB on your machine. Please refer to the links below for quicker navigation

  1. [Download MongoDB Community Server](https://www.mongodb.com/try/download/community)
  2. [MongoDB User Manual](https://docs.mongodb.com/manual/)

After installing MongoDB, go the folder where you installed it and create a folder named `data`. Now go back to your project and open the Terminal again. 
Type `npm install mongodb`. After the installation completes install another module, type `npm install mongoose`, when that is done install the last module, type `npm install mongoose-currency`. Go back to your database folder and open the path in the Terminal, open and start MongoDB. To enter MongoDB shell type `mongodb`,set the data folder to match the folder you just created with and set IP to the db to your local host with the following command `mongod --dbpath=data --bind_ip 127.0.0.1` then to create new database type `use conFusion`. To verify that you're in the correct database type `db`. It should print `conFusion`. Leave the Terminal running so that the server can access the database

## 3. Installing Postman 
Postman will help you to view the endpoints. To install Postman go to [Postman's download page](https://www.postman.com/downloads/). You can skip this step if you already have Postman.

## 4. Running the server
After all of the above steps are completed, you can start the server and start consuming the API. Go to the folder where you cloned the project and open it with IDE of your choice. Then, open the terminal (if you're using Visual Studio Code, press cmd+j or ctrl+j) and type npm start and that's it, if you don't see any errors, that's it. You're good to go. You can consume the server at http://localhost:3000 in your browser or Postman.
> Make sure the MongoDB is up and running in the background in your terminal
