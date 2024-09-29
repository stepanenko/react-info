// Normal React behavior is that if a state update is triggered, React will re-render all the nested components regardless of their props.
// And if a state update is not triggered, then changing props will be just "swallowed": React doesn't monitor them.

const App = () => {
  // local variable won't work
  let isOpen = false;
  
  return (
    <div>
      {/* nothing will happen */}
      <Button onClick={() => (isOpen = true)}>
        Open dialog
      </Button>
  
      {/* will never show up */}
      {isOpen ? <ModalDialog onClose={() => (isOpen = false)} /> : null}
    </div> );
};

// It just won't work. When the Button is clicked, the local isOpen variable will change.
// But the React lifecycle is not triggered, so the render output is never updated, and the ModalDialog will never show up.
