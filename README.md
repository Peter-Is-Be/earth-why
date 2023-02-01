# Earth-Why

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server
    ng serve
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
    ng generate component component-name
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
    ng build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
    ng test
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
    ng e2e
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
    ng help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Github Pages
## 1. Install *angular-cli-ghpages*
    npm i angular-cli-ghpages --save-dev

 *To add an entry to the "devDependencies" attribute of a package.json file, on the command line, run the following command:
```npm i <package-name> --save-dev```*


## 2. Config baseUrl
Edit file `angular.json` add `"baseHref": "/Peter-Wang-WebSite/"` to `projects.Peter-Wang-WebSite.architect.build.options`

## 3. Publish to github pages
    ng deploy
 This command will build code and push to github with gh-pages branch. When you installed *angular-cli-ghpages*, `ng deploy` will exec `angular-cli-ghpages:deploy`, see:angular.json `"deploy":{"builder": "angular-cli-ghpages:deploy"}`

    ng deploy --no-silent
 This command will display more information

## 4. Setting github pages
Config github pages to `gh-pages` branch. 
**Wait a minite** and then visite [Peter-Wang-WebSite](https://solarisy.github.io/Peter-Wang-WebSite) will be find page changed.


# About SSH Key
## Checking for existing SSH keys
    ls -al ~/.ssh
## Remove your SSH public/private keys:
    rm ~/.ssh/id_ed25519*

# Git更换账号问题

当你更换了git用户名和密码，后在VSCode使用git提交到github时发现使用的是原来的用户，这是你需要如下操作来解决此问题：

打开一个文件管理器，右键“此电脑” -> 属性 -> 控制面板主页 (提示：在属性面板的左上角的地方，注意看仔细) -> 用户账户 -> 管理Windows凭据 -> Windows凭据 ，然后相同的界面下方会显示 “普通凭据”，删除多余的那个账号（GitHub账号）凭据。



I used to have the same error when i change my user email by git config --global user.email and found my solution here: Go to: **Control Panel** -> **User Accounts** -> **Manage your credentials** -> **Windows Credentials**

Under Generic Credentials there are some credentials related to Github, Click on them and click "Remove".

and when you try to push something, you need to login again. hope this will be helpful for you