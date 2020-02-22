## Concurrent Mode (Experimental)

_"Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed."_ — React Docs

---

**Caution:**

This page describes **experimental features that are [not yet available](https://reactjs.org/docs/concurrent-mode-adoption.html) in a stable release**. Don’t rely on experimental builds of React in production apps. These features may change significantly and without a warning before they become a part of React.

This documentation is aimed at early adopters and people who are curious. If you’re new to React, don’t worry about these features — you don’t need to learn them right now.

---

### Common data-fetching approaches in [React](https://reactjs.org/)

- **Fetch-on-render (for example, fetch in useEffect):** Start rendering components. Each of these components may trigger data fetching in their effects and lifecycle methods. This approach often leads to “waterfalls”.

- **Fetch-then-render (for example, Relay without Suspense):** Start fetching all the data for the next screen as early as possible. When the data is ready, render the new screen. We can’t do anything until the data arrives.

- **Render-as-you-fetch (for example, Relay with Suspense):** Start fetching all the required data for the next screen as early as possible, and start rendering the new screen immediately — before we get a network response. As data streams in, React retries rendering components that still need data until they’re all ready.

README.md a work in progress...
