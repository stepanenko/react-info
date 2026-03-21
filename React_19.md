
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
