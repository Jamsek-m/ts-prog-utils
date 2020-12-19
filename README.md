# Prog Utils
[![npm (scoped)](https://img.shields.io/npm/v/@mjamsek/prog-utils)](https://www.npmjs.com/package/@mjamsek/prog-utils)
[![GitHub license](https://img.shields.io/github/license/Jamsek-m/ts-prog-utils)](https://github.com/Jamsek-m/ts-prog-utils/blob/master/LICENSE)
> Utility library providing type definitions.

## Installation

Run command: `npm install --save @mjamsek/prog-utils`


## Documentation

### EntityList

`EntityList` is a wrapper object for lists. It is used to group list with its metadata (size).

Example:

```typescript
import { EntityList } from "@mjamsek/prog-utils";

const objectArray: MyObject[] = [/* ... */];

/*
* Provide list size separately.
* Useful to store information usually retrieved from
* X-Total-Count header, to represent size of larger collection.
*/
const list: EntityList<MyObject> = EntityList.of(objectList, 23);

/*
* If size is not provided, it defaults to size of given array.
*/
const list: EntityList<MyObject> = EntityList.of(objectList);

/*
* Creates empty list, with size 0
 */
const list: EntityList<MyObject> = EntityList.empty();
```

*When using Typescript, we can take advantage of generics, to specify type of entities contained in list.*

### Optional

This type is ported from Java SE platform and has the same behaviour. It is used to wrap values that can be null or undefined, to enable easier handling of such values.

Creating optional:
```typescript
import { Optional } from "@mjamsek/prog-utils";

const noValue = Optional.empty();
const stringValue: Optional<string> = Optional.of("value");
const unknownValue = Optional.ofNullable(nullableVariable);
```

Additionally, `Optional<T>` exposes following methods:

* `get(): T` Returns value if present, otherwise throws error.
* `isPresent(): boolean` Returns true if value is present, false otherwise.
* `ifPresent(func: Optional.ConsumerFunction<T>): void` Executes given function if value is present.
* `ifPresentOrElse(func: Optional.ConsumerFunction<T>, emptyFunc: Optional.EmptyFunction): void` Executes first function if value is present, otherwise executes second function.
* `filter(predicate: Optional.PredicateFunction<T>): Optional<T>` Executes filter function. If value matches result, it returns itself, otherwise returns empty Optional.
* `map<U>(func: Optional.MapFunction<T, U>): Optional<U>` Maps value to another type, using given function.
* `or(func: Optional.SupplierFunction<T>): Optional<T>` If value is present, returns itself, otherwise returns new Optional with different value of same type.
* `orElse(other: T): T` If value is present, returns value, otherwise returns specified value. 
* `orElseThrow<E extends Error>(supplier?: Optional.ExceptionSupplierFunction<E>): T` Throws error if value is not present.

## Bugs & Features

Any issues, requests for a new feature, etc. can be filled using [GitHub Issues](https://github.com/Jamsek-m/ts-prog-utils/issues).

## License

MIT
