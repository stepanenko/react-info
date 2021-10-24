
# React - My info notes

Created: 24.10.2021

## Hooks
```javascript
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
}
```
In the above component, we have `age`, `fruit`, and `todos` as local variables, and we can update them individually:
```javascript
function handleOrangeClick() {
  // Similar to this.setState({ fruit: 'orange' })
  setFruit('orange');
}
  ```
You don't have to use many state variables. State variables can hold objects and arrays just fine, so you can still group related data together.
However, unlike `this.setState` in a class, updating a state variable always replaces it instead of merging it.
