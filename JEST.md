
## Testing with JEST

- Run one specific test (e.g. `describe("Contact Card Component", () => {...})`):

`jest -t "Contact Card Component" "ContactCard"` - `"Contact Card Component"` - test name, `"ContactCard"` - test file name

`-t` means `--testNamePattern`

Example with [react-app-rewired](https://github.com/timarney/react-app-rewired) library:

`npx react-app-rewired test -t "Contact Card Component"`

`npx react-app-rewired test -f ContactCard`

`-f` means file name
