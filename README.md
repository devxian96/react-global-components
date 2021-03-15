# react-global-components
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
```
```javascript
// plugins/Card.js
import { Card } from 'card-components';
export default Card;
```
**Important!!**<br/>
You can call it by file name. Reserved words must not be used.
```javascript
// Every Where Can Call Tt without import
export default Index() {
    const func = Card();
    console.log(func);

    return {
        <Card />
    }
}
```
This library support component, function, variable.<br/>
Now enjoy coding.
## Features
- Can make Global Components.
- Focus on bundle size and stability.

## Examples
Not prepare yet.