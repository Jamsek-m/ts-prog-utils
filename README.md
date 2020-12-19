# Prog Utils
> Utility library that provides type definitions for specific use-cases.

## Usage

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

