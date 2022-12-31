
# Hooks Notes

- ### [Official Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)

- ### [Use Hooks](https://usehooks.com/)
**Use Hooks** is an easy to understand React Hook recipes by ui.dev. It is a collection of code examples to help you learn how hooks work and inspire you to take advantage of them in your next project.

- ### useEffect

1) Is `useState` setter needed as a dependency in useEffect when passed in through props?

The setter function coming from the prop could change and become stale, and due to closures, the wrong setter function may be called by the useEffect. The Child2 component doesnt complain because the setter function is declared inside the component, and so the setter function is stable and cannot become stale. This is why Child2 doesn't complain, but Child does. [More](https://stackoverflow.com/questions/59198906/why-is-a-state-variables-setter-needed-as-a-dependency-with-useeffect-when-pass)

More details:

The ESLint rule is not extremely intelligent to determine what may or maynot change and thus prompts you to pass every variable that is being used within the useEffect function callback so that you don't miss those changes accidently.

Since hooks are heavily dependent on closure, and beginner programmers find it difficult to debug problems related to closures, eslint warning here serves as a good help to avoid such cases.

Now since state updater is directly returned from useState and doesn't change during the course of your component Lifecycle you can avoid passing it as a dependency and disable the warning with `// eslint-disable-next-line react-hooks/exhaustive-deps` or `// eslint-disable-line react-hooks/exhaustive-deps` put on the same line with the deps array

- ### Number of local state variables

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

- ### useRef

Used to store references to DOM elements. Also you can store and update values with `useRef`.

```tsx
const Component = () => {
    const ref = useRef(null);
    return <div ref={ref}>Hello world</div>;
};
```

With this reference, you can do lots of useful things like:

- Grabbing an element's height and width
- Seeing whether a scrollbar is present
- Calling `focus()` on the element at a certain moment

Another use-case for useRef allows us to store values, which you can later use and change:

```tsx
const Component = () => {
    const ref = useRef({
        renderCount: 0
    });

    // Increase the render count on every re-render
    ref.current.renderCount += 1;

    return <>Hello world</>;
}
```

The key difference between useState and useRef is that:

- If you update the state, your component will re-render
- If you update the value stored in your ref, nothing will happen
- If you don’t need the component to re-render (or you don't want the component to re-render), useRef may be a good candidate.

More about useRef - https://www.emgoto.com/storing-values-with-useref/

