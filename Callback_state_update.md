When the next state of a component depends on the previous state, always pass a function to the setState and don’t set the state directly.

Here’s some code showing you why:

```js
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count is {count}</h1>

      <button onClick={() => {
        setCount(count + 1);
      }}>
        Increment
      </button>

      <button onClick={() => {
        setTimeout(() => {
          setCount(count + 1);
        }, 1500);
      }}>
        Increment lazy
      </button>
    </div>
  );
}
```
- We have a state variable `count`
- `count` can be incremented by two buttons
- The `Increment` button updates the state right away
- The `Increment Lazy` button mimics an asynchronous operation and updates the state after one and a half seconds

But the problem here is the following:

- Let’s say the current `count` is two
- I click the `Increment Lazy` button, and right after clicking this button I click the `Increment button`
- The `Increment` button updates the current `count` to three
- Since I clicked the `Increment Lazy` button, it should increment the `count` to four after one and a half seconds

But that doesn’t happen because when I clicked the `Increment Lazy` button, the `count` was two and JavaScript will use this value for incrementing.
So, after one and a half seconds, the `Increment Lazy` handler again sets the state to three.
This is not what we want and can lead to bugs that are very tricky to catch.
So, as a best practice, **always use the callback syntax when the next value depends on the previous**. For example:
```js
// follow this approach
<button onClick={() => {
  setTimeout(() => {
    setCount(prevCount => prevCount + 1);
    }, 1500);
  }}>
  Increment lazy
</button>
```

The `prevCount` argument makes sure that you get the correct value of `count` every time.

[Here is](https://codesandbox.io/s/xenodochial-ardinghelli-5be8m?file=/src/App.js) a sandbox for the above code.
