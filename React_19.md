
## Major React 19 Features & New Approaches

### 1. Server Components (now stable)

React 19 fully stabilizes React Server Components (RSC).

What it means:
- Components can run on the server only.
- Their code is not sent to the browser.

Example:
```js
export default async function UserProfile({ userId }) {
  const user = await db.getUser(userId);
  return <div>{user.name}</div>
}
```

New approach:
- Move data fetching and heavy logic to the server
- Reduce JS bundle size
- Combine server + client components in one tree

This shifts React toward a server-first architecture.

---

### 2. Server Actions (mutations without API routes)

React 19 introduces **Actions** for handling mutations.

Example:
```js
'use server'

export async function createTodo(formData) {
  await db.insert(formData.get("title"))
}

<form action={createTodo}>
  <input name="title" />
  <button>Add</button>
</form>
```
New approach:
- No need to create REST endpoints for simple actions
- Forms can call server functions directly
- Less client-side state management

This pattern is used heavily in Next.js App Router.

---

### 3. New async data pattern: `use()` API

React 19 introduces the `use()` API.

Example:
```js
const user = use(fetch("/api/user").then(r => r.json()))
```

What it does:
- Reads promises during render
- Works with Suspense automatically

New approach:
- Fetch data inside render
- No `useEffect` + loading state boilerplate
- Suspense handles async UI

This is a big step toward async rendering in components.

---

### 4. New Hooks for forms and async mutations
`useActionState` - manages server action state.
```js
const [state, action] = useActionState(createTodo, initialState)
```
`useFormStatus` - Lets child components know form state.
```js
const { pending } = useFormStatus()
```

`useOptimistic` - Optimistic UI updates.
```js
const [optimisticTodos, addOptimistic] = useOptimistic(todos)
```

New approach

- React now has built-in async mutation UX tools
- Less need for external libraries

These hooks simplify form and mutation handling.

---

### 5.
