
### [Asynchronous Data Queries](https://recoiljs.org/docs/guides/asynchronous-data-queries)

Recoil can map state and **derived state** to React components via a data-flow graph. The functions in the graph can also be asynchronous.
So we can use asynchronous functions in synchronous React component render functions.
Recoil allows you to mix synchronous and asynchronous functions in your data-flow graph of **selectors**.
Simply return a Promise to a value instead of the value itself from a **selector** get callback, the interface remains exactly the same.
Because these are just **selectors**, other **selectors** can also depend on them to further transform the data.

Todo:
- check and add sync and async examples from https://recoiljs.org/docs/guides/asynchronous-data-queries/
- explore selectors more: https://recoiljs.org/docs/api-reference/core/selector/
