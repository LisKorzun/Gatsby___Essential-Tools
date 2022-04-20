<p align="center">
  <a href="https://www.gatsbyjs.com/">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="32" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img alt="TypeScript" src="https://www.typescriptlang.org/favicon-32x32.png" width="32" />
  </a>
  <a href="https://prettier.io/">
    <img alt="Prettier" src="https://prettier.io/icon.png" width="32" />
  </a>
  <a href="https://eslint.org/">
    <img alt="ESLint" src="https://eslint.org/assets/img/favicon.512x512.png" width="32" />
  </a>
</p>
<h1 align="center">
  Gatsby and Essential Tools
</h1>
<p align="center">
  Brief notes that contain only essential instructions with reference to official resources
</p>

## 📋 Overview

Gatsby natively supports both JavaScript and TypeScript.
Also, Gatsby supports the use of ESLint and Prettier to enforce code styling standards.

Before you start, all you need is

- Have a [basic understanding](https://www.gatsbyjs.com/docs/tutorial/part-0/#background-knowledge) of the key technologies needed to create a Gatsby site.
- Install all the required software tools: Node.js (v14.15 or newer), Git, preferable IDE.
- Create all the necessary accounts for deploying your site online: [GitHab](https://github.com/) and [Gatsby cloud](https://www.gatsbyjs.com/dashboard/signup/) accounts.

## 🚀 Get Up and Running

1. **Install Gatsby command line interface (CLI)**

   ```shell
   # install Gatsby CLI globally
   
   npm install gatsby-cli -g
   ```

2. **Create a Gatsby site**

   Use the Gatsby CLI to create a new site, specifying the minimal starter.

   ```shell
   # create a new Gatsby site using the minimal starter
   gatsby new
   # OR
   npm init gatsby
   ```

3. **Start developing**

   Navigate into your new site’s directory and start it up.

   ```shell
   cd my-gatsby-site/

   gatsby develop
   # OR
   npm run develop
   ```

4. **Open the code and start customizing**

   Your site is now running at http://localhost:8000!

   Edit `src/pages/index.js` to see your site update in real-time!

🔥 At this point, you’ve got a fully functional Gatsby website.

## 🚩 TypeScript

1. **Install [Typescript](https://www.typescriptlang.org/) as `devDependencies`**

   ```shell
   npm install typescript @types/node @types/react @types/react-dom -D
   ```

2. **Add [configuration file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)**

   ```shell
   npx tsc --init
   ```

   Update `tsconfig` specifying essential options:

   ```json
   {
     "include": ["./src/**/*"],
     "compilerOptions": {
       "target": "esnext",
       "lib": ["dom", "esnext"],
       "jsx": "react",
       "module": "esnext",
       "moduleResolution": "node",
       "esModuleInterop": true,
       "forceConsistentCasingInFileNames": true,
       "strict": true,
       "skipLibCheck": true
     }
   }
   ```

3. **Convert `.js/.jsx` to `.ts/.tsx`**

   Since Gatsby natively supports JavaScript and TypeScript, you can change files from `.js/.jsx` to `.ts/.tsx` at any point to start adding types and gaining the benefits of a type system.


4. **Rename `gatsby-*` files**

   - `gatsby-node.js` to `gatsby-node.ts`
   - `gatsby-config.js` to `gatsby-config.ts`
   - `gatsby-browser.js` to `gatsby-browser.tsx`
   - `gatsby-ssr.js` to `gatsby-ssr.tsx`

   [Use either pure CommonJS or pure ES6](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/#convert-to-either-pure-commonjs-or-pure-es6) in `gatsby-*` files. Do not mix ES and CommonJS module syntax because it will cause failures.


5. **Add `typecheck` script to your `package.json`**

   ```
   "typecheck": "tsc --noEmit"
   ```

🔥 At this point, you can run `typecheck` script and fix errors if any.

## 🚩 Prettier

1. **Install [Prettier](https://prettier.io/) as `devDependencies`**

   ```shell
   npm install prettier -D
   ```

2. **Add [Configuration file](https://prettier.io/docs/en/configuration.html)**

   ```yaml
   # .prettierrc or .prettierrc.yaml

   trailingComma: 'es5'
   printWidth: 120
   tabWidth: 2
   semi: false
   singleQuote: true
   ```

3. **Add `.prettierignore` [file](https://prettier.io/docs/en/ignore.html)**

   ```.gitignore
   *.min.js
   node_modules/
   
   # cache-dirs
   .cache
   
   # built sites
   public
   
   # testing
   coverage
   
   package-lock.json
   ```

4. **Add `format` script to your `package.json`**

   ```
   "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\""
   ```

🔥 At this point, you can run `format` script and see result.

## 🚩 ESLint

Gatsby ships with a built-in ESLint setup. For most users, built-in ESLint setup is all you need. 
However, let's see how to customize it in order to include typescript and prettier plugins.

The easiest way is to use [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app).
This package includes the shareable ESLint configuration used by Create React App including typescript plugin.
So we do need install `@typescript-eslint` additionally.

1. **Install [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app)**

   ```shell
   # First install the necessary ESLint dependencies
   
   npm install eslint-config-react-app eslint -D
   ```

2. **Create a config file for ESLint**

   ```shell
   touch .eslintrc.js
   ```
   [touch-cli](https://www.npmjs.com/package/touch-cli) is a simple, limited implementation of the touch command for Node.


3. **Configure ESLint**

   ```js
   // Copy the snippet below to the newly created .eslintrc.js file
   
   module.exports = {
      globals: {
         __PATH_PREFIX__: true,
      },
      extends: ['react-app'],
   }
   ```

4. **Add `lint` script to your `package.json`**

   ```
   "lint": "eslint --ignore-path .gitignore . --ext ts --ext tsx --ext js --ext jsx"
   ```

🔥 At this point, you can run `lint` script and see result.

5. **Add [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)**
   (Plugin runs Prettier as an ESLint rule and reports differences as individual ESLint issues.)

   ```shell
   # Install eslint-plugin-prettier
   
   npm install eslint-plugin-prettier -D
   ```

   ```shell
   # Install recommended configuration
   
   npm install eslint-config-prettier -D
   ```

   ```js
   // Add plugin:prettier/recommended as the last extension in your .eslintrc.json
   
   module.exports = {
      globals: {
         __PATH_PREFIX__: true,
      },
      extends: ['react-app', 'plugin:prettier/recommended'],
   }
   ```
   
🔥 At this point, you can run `lint` script again and check `prettier/prettier` errors.

6. **Add `.eslintignore` [file](https://eslint.org/docs/user-guide/configuring/ignoring-code)**

   If you'd prefer to use a different file than the `.eslintignore` in the current working directory, 
you can specify it on the command line using the `--ignore-path` option. 
For example, you can also use your `.gitignore` file, as we did before.
Keep in mind that specifying `--ignore-path` means that any existing `.eslintignore` file will not be used.

   Create `.eslintignore` file
   ```shell
   touch .eslintignore
   ```

   Add paths which should be omitted from linting
   ```.gitignore
   *.min.js
   node_modules/
   
   # cache-dirs
   .cache
   
   # built sites
   public
   
   # testing
   coverage
   ```

   Update lint script by removing --ignore-path option
   ```
   "lint": "eslint . --ext ts --ext tsx --ext js --ext jsx"
   ```

7. **Add useful scripts**

   [Fixing problem](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems):
   Automatically fix problems
   ```
   "lint:fix": "eslint . --ext ts --ext tsx --ext js --ext jsx --fix"
   ```

   [Handling warnings](https://eslint.org/docs/user-guide/command-line-interface#handling-warnings):
   Report errors only
   ```
   "lint:check": "eslint . --ext ts --ext tsx --ext js --ext jsx --quiet"
   ```
🔥 At this point, you get configured ESLint with helpful scripts. 
Another way to do this is to use the Community plugin [gatsby-plugin-eslint](https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint/).

## 🚩 Gitignore

1. **Add essential most popular paths which should be omitted from git**

   ```.gitignore
   # dependencies
   node_modules/
   
   # cache-dirs
   .cache
   
   # production
   public
   
   # testing
   coverage
   
   # IDE specific
   .idea/
   .vscode/
   
   # ignore log files
   npm-debug.log*
   ```

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

---

                         




<   

Learn more about

- [Development Environment](https://www.gatsbyjs.com/docs/tutorial/part-0/)
- [How Gatsby Works](https://www.gatsbyjs.com/docs/tutorial/)


- [Javascript tooling](https://www.gatsbyjs.com/docs/how-to/local-development/javascript-tooling/)
- [TypeScript and Gatsby](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/)
- [Using ESLint](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/)
- [Gatsby Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/)


- [Gatsby Docs](https://www.gatsbyjs.com/docs/)
- [Gatsby Starters](https://www.gatsbyjs.com/starters/)
- [Gatsby Plugins](https://www.gatsbyjs.com/plugins)
