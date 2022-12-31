
# React Notes

### React/Redux [Recommended Resources](https://github.com/markerikson/react-redux-links#reactredux-links) from Mark Erikson - Redux maintainer

### Key Notes from Articles:

Understanding re-rendering and memoization in React:
- Re-render is caused by a component’s props or state change
- When a component re-renders all of its children components will also re-render, unless they are memoized
- `useState` is a good solution if the rendered output depends on the value, otherwise `useRef` would be a more optimal solution
- One of the most important concepts for optimizing React is memoization (caching results of a function, and returning the cache for subsequent calls)
- [continue... ](https://engineering.udacity.com/understanding-re-rendering-and-memoization-in-react-13e8c024c2b4)

When does React re-render components?:
- Virtual DOM consists of your React application's elements
- State changes in your application will be applied to the VDOM first. If the new state of the VDOM requires a UI change, the ReactDOM library will efficiently do this by trying to update only what needs to be updated
- Renders in the real DOM means re-painting the UI (to see native re-renders go to Chrome DevTools, under the three-dot menu > More tools > Rendering > Paint flashing)
- Renders in React means execution of the render function, which doesn't always imply an update of the UI (to see virtual renders go to React DevTools > under Components > View Settings > Highlight updates when components render)
- In function components, the execution of the whole function is the equivalent of the render function in class components
- React schedules a render every time the state of a component changes
- Scheduling means rendering doesn't happen immediately - React will try to find the best moment for this
- If your application is poorly structured, you might be running a lot more JavaScript than you expected because updating the parent node implies running the render function of all children
- The danger lies in the code that you wrote is being executed repeatedly on every React render
- [continue...](https://felixgerschau.com/react-rerender-components/#when-does-react-re-render)

[Common React Hooks Mistakes You Should Avoid](https://blog.bitsrc.io/common-react-hooks-mistakes-every-developer-should-avoid-defd47d09d8c):
- Hooks should not be called within loops, conditions, or nested functions since it can cause unexpected bugs
- Always use Hooks before any early returns at the top level of your React component
- The value of the state will only be updated in the next render, i.e. `setA(a + 1)` called 3 times in a row will only work once
- Resolve the issue above by using a functional approach, e.g. `setA(a => a + 1)`

### Articles to read:

- https://github.com/stepanenko/stepanenko/blob/master/ARTICLES.md#3-react
