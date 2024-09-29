// Instead of passing elements as a prop, we can pass them as a render prop (or render function).
// A render prop is nothing more than just a function that returns an Element.
// That function is almost the same as a Component. Only a Component you wouldn't call directly - React does it for you.
// But a render function is under your command.

// we're receiving a function that returns an Element:
const Button = ({ renderIcon }) => {
  // and then just calling this function where the icon should be rendered
  return <button>Submit {renderIcon()}</button>;
};

// We accept a renderIcon function and just call it where the icon is supposed to go.
// And then, on the consumer side, we'd pass the function that returns the icon instead of passing the icon directly:

<Button renderIcon={() => <HomeIcon />} />
