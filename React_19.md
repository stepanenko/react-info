
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
