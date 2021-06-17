# react-global-components
![npm](https://img.shields.io/npm/dm/react-global-components?style=for-the-badge)
![npm](https://img.shields.io/npm/v/react-global-components?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/devxian96/react-global-components?style=for-the-badge)](https://github.com/devxian96/react-global-components/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/devxian96/react-global-components?style=for-the-badge)](https://github.com/devxian96/react-global-components/network)
[![GitHub issues](https://img.shields.io/github/issues/devxian96/react-global-components?style=for-the-badge)](https://github.com/devxian96/react-global-components/issues)
[![GitHub issues](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)](https://github.com/devxian96/react-global-components/blob/master/LICENSE)

> The library that enables react to implement global components.
## Npm / Yarn
```
npm i react-global-components

yarn add react-global-components
```
## Getting started
### Requirement
- esNext
- React
### Edit File
```javascript
// src/index.js or src/app.js
import ReactGlobalComponents from 'react-global-components';
ReactGlobalComponents();

// OR

import ReactGlobalComponents from 'react-global-components';
ReactGlobalComponents('/plugins');
```
```javascript
// plugins/Card.js
import { Card } from 'card-components';
export default Card;
```
**Important!!**   
You can call it by file name. Reserved words must not be used.
```javascript
// Every Where Can Call Tt without import
export default Index() {
    const func = Card();
    console.log(func);

    return (<Card />);
}
```
```json
// .eslintrc
{
  "parser": "babel-eslint"
}

```
This library support component, function, variable.   
Now enjoy coding.
## Features
- Can make Global Components.
- Focus on bundle size and stability.

## Update
- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

> example:)
> v0.0.18 is   
> 18th patched.

## Updated New Version
- Support edit basic root of the plugins folder. *(MINOR)*

## Update Scheduled
- Jest tests case more improve *(PATCH)*
- Compress global import size *(PATCH)*

## Examples
This is [Example](https://github.com/devxian96/react-global-components-example) boilerplate code.   
You can get better way.