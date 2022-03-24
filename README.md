
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

## React code style rules
As application grow, it will become very hard to manage and maintain such code. We should always follow some rules while writing code and this is not limited to React.

Import Order:
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants  
(Separate each import category by one empty line)

Rules for Components:
- Very first line — Destrucutre Props (If there)
- Destructure redux state — (If there)
- Initialize State Variables — (If there)
- Create Refs — (If there)
- Initialize hooks ( useDispatch)
- Write all useEffects
- Create const/var/let specific to Component
- Call functions — If there  
(Separate each section by one empty line)

If we enforce these rules, debugging will be super easy. It will also impact the Readability and onboarding new developers will be piece of cake.
