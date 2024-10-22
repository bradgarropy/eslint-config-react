# ⚛️ eslint-config-react

<a href="https://www.npmjs.com/package/@bradgarropy/eslint-config-react">
    <img alt="npm" src="https://img.shields.io/npm/v/@bradgarropy/eslint-config-react.svg?color=FB3B49&style=flat-square">
</a>

<a href="https://www.npmjs.com/package/@bradgarropy/eslint-config-react">
    <img alt="npm" src="https://img.shields.io/npm/dt/@bradgarropy/eslint-config-react?style=flat-square">
</a>

_My personal [eslint][1] configuration for [react][react]._

## 📦 Installation

This package is hosted on [npm][2].

Install the configuration as a development dependency.

```zsh
npm install --dev @bradgarropy/eslint-config-react
```

## 🥑 Usage

Create an `eslint.config.js` file in the root of your project. Then import the configuration and add it to the list of configuration objects.

```javascript
import bgReactConfig from "@bradgarropy/eslint-config-react"

const config = [...bgReactConfig]

export default config
```

> You can add more ESLint configuration options in this file if you want.

## ❔ Questions

If you have any trouble, definitely [open an issue][5] and I'll take a look.

Or you can consult the [ESLint Shareable Configs documentation][6].

And if all else fails, you can ask me directly on [Twitter][7] or my [AMA][8].

[1]: https://eslint.org
[2]: https://www.npmjs.com/package/@bradgarropy/eslint-config-react
[3]: https://www.npmjs.com/package/npx
[4]: https://www.npmjs.com/package/install-peerdeps
[5]: https://github.com/bradgarropy/eslint-config-react/issues
[6]: https://eslint.org/docs/developer-guide/shareable-configs
[7]: https://twitter.com/bradgarropy
[8]: https://github.com/bradgarropy/ama
[react]: https://reactjs.org
