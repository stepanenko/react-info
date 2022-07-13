
## Testing with JEST

- Run one specific test (e.g. `describe("Contact Card Component", () => {...})`):

`jest -t "Contact Card Component" "ContactCard"` - `"Contact Card Component"` - test name, `"ContactCard"` - test file name

`-t` stands for `--testNamePattern`

Example with [react-app-rewired](https://github.com/timarney/react-app-rewired) library:

`npx react-app-rewired test -t "Contact Card Component"`

`npx react-app-rewired test -f ContactCard`

`-f` stands for file name

To generate and log [instanbul](https://istanbul.js.org/) coverage html report:

`npx react-app-rewired test --coverage -f ContactCard`

### Debugging tests

You can use the debug `method`, accessible from the `screen` object, to log the current HTML output of components:

```js
it("displays contact card", () => {
   render(<ContactCard />);
   screen.debug();
});
```
