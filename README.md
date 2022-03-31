
# React Notes

## [useHooks](https://usehooks.com/)
Easy to understand React Hook recipes by ui.dev. **useHooks** is a collection of code examples to help you learn how hooks work and inspire you to take advantage of them in your next project.

---

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
However, unlike `this.setState` in a class, updating a state variable always replaces it instead of merging it. If the number of local variables bocomes higher than 5 it's a good sign to use either a custom hook or the useReducer hook.
