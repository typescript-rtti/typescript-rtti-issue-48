# temp-typescript-rtti-on-rollup-errors

Start
-----

```
yarn
yarn start
```

If you try to view the interface properties from a file, we get an empty array!

```typescript
import "reflect-metadata"
import {reflect} from 'typescript-rtti'
import IMovable from './IMovable';

// An array with two properties is expected to be output.
// But instead an empty array is output!
console.log(
	reflect<IMovable>().as('interface').reflectedInterface.properties
)
```

File `IMovable.ts`:

```typescript
export default interface IMovable {
	position: string
	readonly movementVelocity: string
}
```

Rollup warning
--------------

There are also suspicious warnings from Rollup:

```
(!) `this` has been rewritten to `undefined`
https://rollupjs.org/guide/en/#error-this-is-undefined
node_modules/typescript-rtti/dist.esm/lib/reflect.js
1: var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                     ^
2:     var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
3:     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
...and 3 other occurrences

```