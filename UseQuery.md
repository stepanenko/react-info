## How to fetch/refetch queries based on specific actions or conditions

1. `useQuery` hook with `enabled` option

Using this option we can control when to execute the fetch query by passing a boolean value called `enabled` to the React-Query hook.
By default this `enabled` property is set to false, which means the React-Query hook will execute once the component is mounted.

E.g.:
```jsx
function Example() {
  const [fetchPosts, setFetchPosts] = useState(false);

  const { isLoading, error, data } = useQuery(
    ["posts"],
    () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
    {
      enabled: fetchPosts
    }
  );

  if (isLoading && fetchPosts) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <button onClick={() => setFetchPosts(true)}>Fetch posts</button>
      <h1>Posts</h1>
      {data?.map((post) => {
        return (
          <div style={{ display: "flex" }}>
            <span>{post.id}-&nbsp;</span>
            <div>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
}
```

---

2. Using `queryClient.fetchQuery`

`fetchQuery` is an asynchronous method that can be used to fetch and cache a query. It will either resolve with the data or throw with the error.

```jsx
function Example2() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  return (
    <div>
      <button
        onClick={async () => {
          try {
            setIsLoading(true);
            const posts = await queryClient.fetchQuery(
              ["postsUsingFetchQuery"],
              {
                queryFn: () =>
                  axios
                    .get("https://jsonplaceholder.typicode.com/posts")
                    .then((res) => res.data)
              }
            );
            setData(posts);
          } catch (e) {
            setError(e);
          }
          setIsLoading(false);
        }}
      >
        Fetch posts using fetchQuery{" "}
      </button>
      <h1>Posts</h1>
      {data?.map((post) => {
        return (
          <div style={{ display: "flex" }}>
            <span>{post.id}-&nbsp;</span>
            <div>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
}
```

Note: we’ve set different query key `["postsUsingFetchQuery"]`, than the one we’ve in Example1, because React-Query manages the queries internally based on the queryKey.

`queryClient` object is coming from the following definition:
```jsx
export const queryClient = new QueryClient();
```
