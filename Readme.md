# Vite React Tailwindcss

a boilerplate for React JS with vite js as a frontend tool and tailwindcss for design system. to use this react js boilerplate you can simply click on the <b>Use this template</b> button and open this to your code editor.

### commands to use this boilerplate

| Command | Description                         |
| ------- | ----------------------------------- |
| dev     | to start the development server     |
| build   | to build the project for production |
| preview | to start the production server      |

if you want to use the airbnb styleguide. then add this script to the <b>package.json</b> file.

```json
{
  "lint": "yarn add -D prettier && yarn add -D @babel/eslint-parser @babel/preset-react && npx install-peerdeps --dev eslint-config-airbnb && yarn add -D eslint-config-prettier eslint-plugin-prettier"
}
```

and then run this script using `npm` or `yarn`.
some packages needs a configuration file to work properly.

create a <b>.babelrc.json</b> file and paste this configs.

```json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
        "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
        "throwIfNamespace": false, // defaults to true
        "runtime": "classic" // defaults to classic
        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
      }
    ]
  ]
}
```

create a <b>.eslintrc.json</b> file and paste this configs.

```json
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 8
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "indent": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/function-component-definition": 0,
    "react/button-has-type": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  },
  "plugins": ["prettier", "react", "react-hooks"]
}
```

go to vscode workspace <b>settings.json</b> file and paste this settings.

```json
{
  // config related to code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "css.lint.unknownAtRules": "ignore",
  "css.validate": false,
  "editor.formatOnSave": true,
  "[markdown]": {
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.wordWrap": "on",
    "editor.quickSuggestions": true
  },
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "javascript.validate.enable": false, //disable all built-in syntax checking
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.validate": ["javascript"],
  // emmet
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

now restart your code editor to apply all changes. make sure that prettier and the eslint plugin is already installed.
