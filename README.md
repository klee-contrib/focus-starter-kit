# Starter kit

This starter kit is here to help you to initialize a new project using [focusjs](https://github.com/KleeGroup/focus) and [focusjs-components](https://github.com/KleeGroup/focus-components).

Starter kit steps to follow:
- Initialize your project structure: 
  - An **api** folder which will contain your api (node, .NET, Java, ...)
  - A **ui** folder which will contain the focus application
- Inside the **ui** folder, copy the content of this repository , you can do one of the following options:
  -  `git clone https://github.com/KleeGroup/focus-starter-kit.git`  and `rm -rf .git` to remove the git repositorty information
  -  Click on the download button and copy the directory inside your ui directory
- Install your node dependencies: `npm install` in the ui directory
- Check the `brunch.config` file and check the line `paths.public` to see where the focus's application content is copy
- Run the local brunch watcher to start coding on your app `npm run watch`, you should see a running watcher in your console.

You should see something like that:



![http://media.giphy.com/media/a3Ym0AUSAsHfi/giphy.gif](http://media.giphy.com/media/a3Ym0AUSAsHfi/giphy.gif)


Please don't hesitate to report any bug you'll find on issues's page of each concerned project.
