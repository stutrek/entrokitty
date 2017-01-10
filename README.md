# entrokitty

It gives you random cat names so you can tell files apart, it's much easier than trying to tell git hashes apart.

## CLI Usage

### Installation

```
npm install -g entrokitty
```

### Usage

`entrokitty [space replacement]`

```
$ entrokitty
Scratch Adams
$ entrokitty -
Theo-de-Caadt
```

## Node Usage

```javascript
var entrokitty = require('entrokitty');

console.log(entrokitty()); // Mew Kabakoff
console.log(entrokitty('-')); // Eric-Meower
```

# Contributing

Send me a PR with new names. Any PR with Star Wars puns will be denied.
