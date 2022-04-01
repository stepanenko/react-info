## Debouncing

This is not a React-specific practice, but I’ve seen many developers that don’t take advantage of debouncing.

> Debouncing will bunch a series of sequential calls to a function into a single call to that function.
> It ensures that one notification is made for an event that fires multiple times.

```
function App() {
  const handleChange = (event) => {
    // update value in state
    // make request to server
    // each time when value of input changes
  };
  return (
    <input onChange={handleChange} value={value} />
  );
}
```

Let’s say you are making a request to search a list of customers every time the value of input changes.
If you don’t debounce the function, then you will end up with a ton of useless requests because the onChange event fires so often.

To debounce an event handler in React, you can do the following:

```
import { useMemo } from 'react';
import { debounce } from 'lodash';

function App() {
  const handleChangeDebounced = useMemo(() => {
    return debounce(() => {
      // make request to server only once
      // when user doesn't type anything for 1 second
    }, 1000);
  }, []);
  
  return (
    <input
      onChange={(event) => {
        // update value in state
    
        // debounced handler
        handleChangeDebounced();
      }}
      value={value}
    />
  );
}
```

Now, we’re only making a single request to the server once the user doesn’t type anything for one second.

We must wrap our denounced callback in useMemo to prevent React from creating a new reference to function on every re-render.
I am using debounce from lodash, you can also create your own.
