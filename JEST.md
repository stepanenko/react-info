
## Testing with JEST

- Run one specific test (e.g. `describe("Contact Card", () => {...})`):

`jest -t Contact Card`

`t` means `--testNamePattern`

Example with [react-app-rewired](https://github.com/timarney/react-app-rewired) library:

`npx react-app-rewired test -t Contact Card`
