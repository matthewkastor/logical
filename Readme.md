# logical

Logic functions for JavaScript

## Installation

The current published version:

```
npm install git+https://github.com/matthewkastor/logical.git#master
```

Note that this package is not published on npmjs.org because the name was already taken. You have to install it using the git url or you'll get the wrong package.

Source code available at: [https://github.com/matthewkastor/logical/](https://github.com/matthewkastor/logical/)

## Usage

In node:

```
var logical = require('logical');
console.log(logical);
```

The above will log the following:

```
{ fals: [Function: fals],
  f: [Function: fals],
  contradiction: [Function: fals],
  Opq: [Function: fals],
  tru: [Function: tru],
  t: [Function: tru],
  tautology: [Function: tru],
  Vpq: [Function: tru],
  identity: [Function: identity],
  not: [Function: not],
  negation: [Function: not],
  and: [Function: and],
  conjunction: [Function: and],
  Kpq: [Function: and],
  materialNonImplication: [Function: materialNonImplication],
  abdjunction: [Function: materialNonImplication],
  doesNotImply: [Function: materialNonImplication],
  butNot: [Function: materialNonImplication],
  Xp: [Function: materialNonImplication],
  Lpq: [Function: materialNonImplication],
  p: [Function: _p],
  Ipq: [Function: _p],
  converseMaterialNonImplication: [Function: converseMaterialNonImplication],
  isNotImpliedBy: [Function: converseMaterialNonImplication],
  notBut: [Function: converseMaterialNonImplication],
  converseNonImplication: [Function: converseMaterialNonImplication],
  Xq: [Function: converseMaterialNonImplication],
  Mpq: [Function: converseMaterialNonImplication],
  q: [Function: _q],
  Hpq: [Function: _q],
  xor: [Function: xor],
  exclusiveDisjunction: [Function: xor],
  Jpq: [Function: xor],
  or: [Function: or],
  disjunction: [Function: or],
  Apq: [Function: or],
  nor: [Function: nor],
  Xpq: [Function: nor],
  jointDenial: [Function: nor],
  xnor: [Function: xnor],
  equality: [Function: xnor],
  equals: [Function: xnor],
  ifAndOnlyIf: [Function: xnor],
  iff: [Function: xnor],
  biconditional: [Function: xnor],
  materialBiconditional: [Function: xnor],
  Epq: [Function: xnor],
  not_q: [Function: not_q],
  Nq: [Function: not_q],
  Gpq: [Function: not_q],
  converseMaterialImplication: [Function: converseMaterialImplication],
  isImpliedBy: [Function: converseMaterialImplication],
  converseImplication: [Function: converseMaterialImplication],
  XNq: [Function: converseMaterialImplication],
  Bpq: [Function: converseMaterialImplication],
  not_p: [Function: not_p],
  Np: [Function: not_p],
  Fpq: [Function: not_p],
  materialImplication: [Function: materialImplication],
  materialConditional: [Function: materialImplication],
  materialConsequence: [Function: materialImplication],
  implication: [Function: materialImplication],
  implies: [Function: materialImplication],
  conditional: [Function: materialImplication],
  XNp: [Function: materialImplication],
  Cpq: [Function: materialImplication],
  nand: [Function: nand],
  Dpq: [Function: nand],
  alternativeDenial: [Function: nand],
  conditionedDisjunction: [Function: conditionedDisjunction],
  thenIfElse: [Function: conditionedDisjunction],
  conditionalDisjunction: [Function: conditionedDisjunction],
  conditionedDisjunction2: [Function: conditionedDisjunction2],
  ifThenElse: [Function: conditionedDisjunction2],
  conditionalDisjunction2: [Function: conditionedDisjunction2],
  tools:
   { truthTableToBoolean: [Function: truthTableToBoolean],
     testTruthTable: [Function: testTruthTable] } }
```

In the browser, include `./browser/logical_web.js` in your page. `logical` will
 be available in your page.

For full documentation see `docs/index.html`

## Tests

Tests can be run from the root of this package with

```
npm test
```

## Hacking

There are several other scripts listed in package.json for development and
 hacking on this module. They can be run with `npm run-script` followed by the
 scripts property corresponding to the script you want to run. For example,
 given a script called `buildDocs`, it could be run from the package root by:

```
npm run-script buildDocs
```

## Author

Matthew Kastor

atropa

matthewkastor@gmail.com

https://plus.google.com/100898583798552211130

## License

gpl-3.0 http://www.gnu.org/licenses/gpl-3.0-standalone.html