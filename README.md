
## Article's Key Notes:

- React/Redux [Recommended Resources](https://github.com/markerikson/react-redux-links#reactredux-links) from Mark Erikson (Redux maintainer)
- [Article List](https://github.com/stepanenko/stepanenko/blob/master/ARTICLES.md#3-react)

[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect)
- Empty `[]` means the effect doesn't use any value that participates in React data flow so it is safe to apply once. There are strategies (primarily `useReducer` and `useCallback`) that can remove the need for a dependency instead of incorrectly omitting it.
- Specifying a value that always changes in the dependency array can cause an infinite loop. Functions can cause this problem, and putting them inside effects, hoisting them out, or wrapping them with `useCallback` helps. To avoid recreating objects, `useMemo` can serve a similar purpose.
- Move functions that don't need props or state outside of your component. Pull the ones that are used only by an effect inside of that effect. If after that your effect still ends up using functions in the render scope (including functions from props), wrap them into `useCallback` where they're defined.
- Effects always "see" props and state from the render they were defined in. You can explicitly maintain some value in a mutable ref. If you think you're seeing some props or state from an old render but don't expect it, you probably missed some dependencies.
- Whenever we update the state, React calls our component. Each render result "sees" its own state values which are constants inside our function.
- The constants inside any particular render don't change over time. It's our component that's called again — and each render "sees" its own values that are isolated between renders.
- Inside any particular render, props and state forever stay the same. Props and state are isolated between renders, and so are any values using them, including event handlers (they also "belong" to a particular render), and when you click, it keeps using the state from that render. So even async functions inside an event handler will "see" the same values.
- `useEffect`s function is different on every render. Each version "sees" the values from the render that it “belongs” to. So effects run after every render, are conceptually a part of the component output, and "see" the props and state from that particular render.
- Every function inside the component render (including event handlers, effects, timeouts or API calls inside them) captures the props and state of the render call that defined it.
- If you want to read the latest rather than captured value inside some callback defined in an effect - the easiest way to do it is by using refs.
- React only runs the effects after letting the browser paint. Effect cleanup is also delayed. The previous effect is cleaned up after the re-render with new props.
- Using `[name]` as `useEffect`'s deps is like telling React: "Hey, I know you can't see inside this function, but I promise it only uses `name` and nothing else from the render scope."
- [continue...](https://overreacted.io/a-complete-guide-to-useeffect/#functional-updates-and-google-docs)

Why useEffect is a bad place to make API calls
- React 18 in development + strict mode runs `useEffect` twice on mount and may send a request twice
- `useEffect` hook runs after rendering of the entire UI so API calls will start only after the complete rendering of UI
- The better approach would be fetching data and rendering it parallelly
- **React Query** can fetch data as soon as rendering starts so you don't have to wait until react loads the entire component
- Another way of solving the issue is by doing SSR so data already renders on the backend
- Related video by Ryan Florence: [When To Fetch: Remixing React Router](https://www.youtube.com/watch?v=95B8mnhzoCM&ab_channel=RealWorldReact)

[Understanding re-rendering and memoization in React](https://engineering.udacity.com/understanding-re-rendering-and-memoization-in-react-13e8c024c2b4)
- Re-render is caused by a component’s props or state change
- Re-rendering simply means calling the component’s function again. If that component has children components it will call those components’ functions, and so on all the way down the tree. The results are then diffed with the DOM to determine if the UI should be updated - this process is called reconciliation.
- When a component re-renders all of its children components will also re-render, unless they are memoized
- `useState` is a good solution if the rendered output depends on the value, otherwise `useRef` would be a more optimal solution
- One of the most important concepts for optimizing React is memoization (caching results of a function, and returning the cache for subsequent calls)
- Memoization uses memory and can be less performant in certain cases.
- When a component is memoized, instead of re-rendering it, React diffs the component's new props with its previous props. The trade off that needs to be considered here is how intensive it is to compare the props vs running the function. If you have a large object in your props, it could be less performant to memoize that component.
- When passing a function into a memoized component you can unknowingly remove the memoizing effect by not memoizing that function using `useCallback`.
- If we're declaring a function in the component, a new function is created every re-render. If we are passing that function as a prop to another component, even though the contents of the function do not actually change, the reference changes which causes the child component to re-render, even if it is memoized:
```jsx
export const ParentComponent = () => {
  const handleSomething = () => {};
  return <HeavyComponent onSomething={handleSomething} />
};
```
We can fix this by using useCallback and prevent the reference from changing:
```jsx
export const ParentComponent = () => {
  const handleSomething = useCallback(() => {}, []);
  return <HeavyComponent onSomething={handleSomething} />
};
```
- To avoid running the expensive function every re-render you can memoize it. The first render will call the function, and following re-renders will return the cached results of the function, rather than running it again:
```jsx
const value = useMemo(() => expensiveFunction(aDep), [aDep]);
```
The `value` will be cached, and only updated when `aDep` changes.
- Lazy `useState`: prevents the initial value from being set on every re-render, useful when your initial state is computationally heavy:
```jsx
const initialState = () => calculateSomethingExpensive(props);
const [count, setCount] = useState(initialState);
```

[When does React re-render components?](https://felixgerschau.com/react-rerender-components/)
- Virtual DOM consists of your React application's elements
- State changes in your application will be applied to the VDOM first. If the new state of the VDOM requires a UI change, the ReactDOM library will efficiently do this by trying to update only what needs to be updated
- Renders in the real DOM means re-painting the UI (to see native re-renders go to Chrome DevTools, under the three-dot menu > More tools > Rendering > Paint flashing)
- Renders in React means execution of the render function, which doesn't always imply an update of the UI (to see virtual renders go to React DevTools > under Components > View Settings > Highlight updates when components render)
- In function components, the execution of the whole function is the equivalent of the render function in class components
- React schedules a render every time the state of a component changes
- Scheduling means rendering doesn't happen immediately - React will try to find the best moment for this
- If your application is poorly structured, you might be running a lot more JavaScript than you expected because updating the parent node implies running the render function of all children
- The danger lies in the code that you wrote is being executed repeatedly on every React render
- React might not update a component because reference to the prop stayed the same
- A better way of improving re-renders is by restructuring your code
- You may not need `React.memo` if you place your logic closer to where the data is used
- Avoid putting everything in the root component of your application

[Common React Hooks Mistakes You Should Avoid](https://blog.bitsrc.io/common-react-hooks-mistakes-every-developer-should-avoid-defd47d09d8c):
- Hooks should not be called within loops, conditions, or nested functions since it can cause unexpected bugs
- If you need to use a variable inside a component that preserves its state across renderings without triggering a re-render, `useRef` Hook would be a better option.
- Always use Hooks before any early returns at the top level of your React component
- The value of the state will only be updated in the next render, i.e. `setA(a + 1)` called 3 times in a row will only work once. To fix this we can use a functional approach, e.g. `setA(a => a + 1)`
- Avoid unwanted renderings by passing a dependency array to `useEffect` Hook (because by default it runs on each render)

[A Visual Guide to React Rendering](https://alexsidorenko.com/blog/react-render-always-rerenders/):
- React render doesn't mean DOM update. Therefore unnecessary renders do not always lead to expensive DOM manipulations.
- In normal rendering (without the use of memoization), React does not care whether "props changed" - it will render child components unconditionally just because the parent rendered!
- Wrapping a component with `memo` prevents the entire subtree of this component from re-rendering in response to parent render. But when its props change it will re-render. The way `memo` determines if props changed is by shallow comparison `prevProp === nextProp`.
- To prevent a variable from being redeclared and reassigned new reference on every re-render React has `useMemo` and `useCallback` hooks to memoize props.
- `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`, the only difference is that it returns a function.
- If the new state is computed using the previous state, you can pass a function to `setState`. The function will receive the previous value, and return an updated value.
- All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
