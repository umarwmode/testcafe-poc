## Testcafe-Typescript-Starter

Testcafe typescript boilerplate with neat folder structure and allure report.

#### Key highlights

- Typescript support
- Neat folder structure
- Page object model for code maintenance
- ESLint support for code quality
- Prettier for code formatting
- Allure reporting
- Husky for pre-commit hook

#### Install dependencies

```ssh
npm install
```

#### Lint your code

```ssh
npm run lint
```

#### Run tests

```ssh
npm run e2e:chrome
```

#### Generate report

```ssh
npm run report

// publish report

npm run report:publish
```

Reports will be generated inside `reports` folder.

#### Debug tests

If you are using vscode, debug configuration is provided `.vscode/launch.json` file. Enable your breakpoints and hit `f5` to trigger the debug execution.

#### Test Folder Structure

```
testcafe
|____specs
| |____login.spec.ts
| |____home.spec.ts
|____utils
| |____password.handler.ts
| |____selector.helper.ts
| |____index.ts
| |____logger.helper.ts
| |____database.helper.ts
| |____waiter.helper.ts
|____pages
| |____login.page.ts
| |____home.page.ts
| |____index.ts
```

The page object model resides under `testcafe` folder.

- `pages` folder contains the page elements abd associated business logics
- `specs` folder contains testcafe fixures
- `utils` folder contains different testcafe helpers

##

#### Docker Containerization:

The testcafe suggest container is used `testcafe/testcafe`. Docker file is stored at `docker/Dockerfile`. As JDK is required for Allure reporting, we login as `root` user and install the JDK and set the `JAVA_HOME`

Build the docker image locally by:

```ssh
npm run docker:build:testcafe
```

Run tests locally in docker chrome

```ssh
npm run docker:test:chrome
```

Stop docker testcafe container by

```ssh
npm run docker:stop:testcafe
```

Delete all local containers

```ssh
npm run docker:delete
```

#### Running in Jenkins:

Configure a pipeline JOB in Jenkins and configure a pipeline JOB as `pipeline script from SCM`

To see the allure HTML report you need to run script to bypass Jenkins Content Security Policy. Run below script in Jenkins:

```ssh
System.setProperty("jenkins.model.DirectoryBrowserSupport.CSP", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';")
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';")
```

#### Allure report

Reports will be generated for each test cases and allure will integrate those results and combine.

![allure-report](./docs/allure-report.png)
