
## Testing with JEST

### Run a specific test or test file

Lets say we have `describe("Contact Card", () => {...})` in the `ContactCard.tsx`:

`jest -t "Contact Card" "ContactCard"` - `"Contact Card Component"` - test name, `"ContactCard"` - test file name

`-t` stands for `--testNamePattern`

Example with [react-app-rewired](https://github.com/timarney/react-app-rewired) library:

`npx react-app-rewired test -t "Contact Card"`

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
