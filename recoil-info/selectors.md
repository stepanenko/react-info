### [Selectors](https://recoiljs.org/docs/api-reference/core/selector)

A **selector** represents a piece of **derived state**
(the output of passing state to a pure function that modifies the given state in some way).
Derived state is a powerful concept because it lets us build dynamic data that depends on other data.

Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph.
Selectors represent "idempotent" functions: For a given set of inputs they should always produce the same results (at least for the lifetime of the application).
This is important as selector evaluations may be cached, restarted, or executed multiple times.
Because of this, selectors are generally a good way to model read-only DB queries.

From a component's point of view, **selectors** can be read using the same hooks that are used to read atoms.
However it's important to note that certain hooks only work with **writable state** (i.e `useRecoilState()`).
All atoms are writable state, but only some selectors are considered writable state (selectors that have both a `get` and `set` property).

Selectors represent a function, or **derived state** in Recoil. You can think of them as similar to
an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.
If only a `get` function is provided, the selector is read-only and returns a `RecoilValueReadOnly` object.
If a `set` is also provided, it returns a writeable `RecoilState` object.

Recoil manages atom and selector state changes to know when to notify components subscribing to that selector to re-render.
If an object value of a selector is mutated directly it may bypass this and avoid properly notifying subscribing components.
To help detect bugs, Recoil will freeze selector value objects in development mode.

[**Selector Family**](https://recoiljs.org/docs/api-reference/utils/selectorFamily)

Returns a function that returns a read-only `RecoilValueReadOnly` or writeable `RecoilState` selector.

A `selectorFamily` is a powerful pattern that is similar to a `selector`, but allows you to pass parameters to the get and set callbacks of a selector.
The `selectorFamily()` utility returns a function which can be called with user-defined parameters and returns a `selector`.
Each unique parameter value will return the same memoized `selector` instance.

The `selectorFamily` essentially provides a map from the parameter to a `selector`.
Because the parameters are often generated at the callsites using the family, and we want equivalent parameters to re-use the same underlying selector,
it uses value-equality by default instead of reference-equality. (There is an unstable API to adjust this behavior).
This imposes restrictions on the types which can be used for the parameter. Please use a primitive type or an object that can be serialized.
Recoil uses a custom serializer that can support objects and arrays, some containers (such as ES6 Sets and Maps),
is invariant of object key ordering, supports Symbols, Iterables, and uses toJSON properties for custom serialization
(such as provided with libraries like Immutable containers). Using functions or mutable objects, such as Promises, in parameters is problematic.
