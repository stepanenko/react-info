
## React code style rules
As application grows, it will become very hard to manage and maintain your code so we should always follow some rules while writing code.

**Import Order:**
- React imports
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants

(Separate each import category by one empty line)

**Rules for Components:**
- Destrucutre Props (if present)
- Destructure State (Redux / React Query, if present)
- Initialize State Variables (if needed)
- Create Refs (if needed)
- Initialize Hooks (useDispatch, if using Redux)
- Write all useEffects (if needed)
- Create const/let specific to Component (if needed)
- Call functions (if needed)

(Optional: Separate each section by one empty line)

If we apply these rules, debugging will be easier. It will also impact readability and improve onboarding new developers.

# Bad vs Good
Bad:
```jsx
const { role } = user;

switch(role) {
  case ADMIN:
    return <AdminUser />;
  case EMPLOYEE:
    return <EmployeeUser />;
  case USER:
    return <NormalUser />;
}
```
Good:
```jsx
const { role } = user;

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Componenent />;
```
---

Bad:
```jsx
return (
    <button onClick={() => dispatch(ACTION)}>    // here
      This is a bad example 
    </button>  
);
```

Good:
```jsx
const submitData = () => dispatch(ACTION);

return (
  <button onClick={submitData}>  
    This is a good example 
  </button>  
);
```
---
Bad:

Although the child component should render only once because the value of count has nothing to do with the `ChildComponent`.
But, it renders each time you click on the button:

```jsx
import React, { useState } from "react";

export const TestMemo = () => {
  const [userName, setUserName] = useState("faisal");
  const [count, setCount] = useState(0);
  
  const increment = () => setCount((count) => count + 1);
  
  return (
    <>
      <ChildrenComponent userName={userName} />
      <button onClick={increment}> Increment </button>
    </>
  );
};

const ChildrenComponent =({ userName }) => {
  console.log("rendered", userName);
  return <div> {userName} </div>;
};
```

Good:

Let’s edit the `ChildrenComponent`. Now, no matter how many times you click on the button, it will render only when necessary:
```jsx
import React, {useState} from "react";

const ChildrenComponent = React.memo(({userName}) => {
    console.log('rendered');
    return <div>{userName}</div>;
});
```
---

Bad:
```css
/* CSS FILE */
.body {
  height: 10px;
}
```
```jsx
// JSX
return <div className='body'> ... </div>;
```

Good:

Avoid raw CSS when writing React applications because organizing CSS is far harder than organizing JS:
```jsx
const bodyStyle = {
  height: "10px"
};

return <div style={bodyStyle}> ... </div>;
```
---
