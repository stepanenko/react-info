
### [Atoms](https://recoiljs.org/docs/api-reference/core/atom)

An atom represents state in Recoil. The `atom()` function returns a writeable `RecoilState` object.

Recoil manages atom state changes to know when to notify components subscribing to that atom to re-render,
so you should use the hooks listed below to change atom state. If an object stored in an atom was mutated directly
it may bypass this and cause state changes without properly notifying subscribing components.
To help detect bugs Recoil will freeze objects stored in atoms in development mode.

Most often, you'll use the following hooks to interact with atoms:

- `useRecoilState()`: Use this hook when you intend on both reading and writing to the atom. This hook subscribes the component to the atom.
- `useRecoilValue()`: Use this hook when you intend on only reading the atom. This hook subscribes the component to the atom.
- `useSetRecoilState()`: Use this hook when you intend on only writing to the atom.
- `useResetRecoilState()`: Use this hook to reset an atom to its default value.
- `useRecoilCallback()`: For rare cases where you need to read an atom's value without subscribing the component

You can initialize an atom either with a static value or with a `Promise` or a `RecoilValue` representing a value of the same type.
Because the `Promise` may be pending or the default selector may be asynchronous it means that the atom value may also be pending or throw an error when reading.
Note that you cannot currently assign a `Promise` when setting an atom. Please **use selectors for async functions**.

Atoms cannot be used to store `Promise`'s or `RecoilValue`'s directly, but they may be wrapped in an object.
Note that Promise's may be mutable. Atoms can be set to a `function`, as long as it is pure, but to do so
you may need to use the updater form of setters. (e.g. `set(myAtom, () => myFunc);`).

[**Atom Family**](https://recoiljs.org/docs/api-reference/utils/atomFamily)

An `atom` represents a piece of state with Recoil. An atom is created and registered per `<RecoilRoot>` by your app.
But, what if your state isn’t global? What if your state is associated with a particular instance of a control, or with a particular element?
For example, maybe your app is a UI prototyping tool where the user can dynamically add elements and each element has state, such as its position.
Ideally, each element would get its own atom of state. You could implement this yourself via a memoization pattern.
But, Recoil provides this pattern for you with the atomFamily utility. An Atom Family represents a collection of atoms.
When you call atomFamily it will return a function which provides the `RecoilState` atom based on the parameters you pass in.

The `atomFamily` essentially provides a map from the parameter to an atom. You only need to provide a single key for the `atomFamily` and it will
generate a unique key for each underlying atom. These atom keys can be used for persistence, and so must be stable across application executions.
The parameters may also be generated at different callsites and we want equivalent parameters to use the same underlying atom.
Therefore, value-equality is used instead of reference-equality for `atomFamily` parameters.
This imposes restrictions on the types which can be used for the parameter. atomFamily accepts primitive types,
or arrays or objects which can contain arrays, objects, or primitive types.
