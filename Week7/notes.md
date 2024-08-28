# Week 7
Suspense API -> async data and component fetching

Passing Data Deeply with Context
Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

![img.png](img.png)
![img_1.png](img_1.png)

Selectors
A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.

Derived state is a powerful concept because it lets us build dynamic data that depends on other data. In the context of our todo list application, the following are considered derived state:

Filtered todo list: derived from the complete todo list by creating a new list that has certain items filtered out based on some criteria (such as filtering out items that are already completed).
Todo list statistics: derived from the complete todo list by calculating useful attributes of the list, such as the total number of items in the list, the number of completed items, and the percentage of items that are completed.
To implement a filtered todo list, we need to choose a set of filter criteria whose value can be saved in an atom. The filter options we'll use are: "Show All", "Show Completed", and "Show Uncompleted". The default value will be "Show All":

selectors-are almost same as useMemo


atomFamily(options)
Returns a function that returns a writeable RecoilState atom.

selectorFamily(options)
Returns a function that returns a read-only RecoilValueReadOnly or writeable RecoilState selector.

A selectorFamily is a powerful pattern that is similar to a selector, but allows you to pass parameters to the get and set callbacks of a selector. The selectorFamily() utility returns a function which can be called with user-defined parameters and returns a selector. Each unique parameter value will return the same memoized selector instance.
SelectorFamily:

SelectorFamily is similar to AtomFamily, but for selectors. It creates a family of selectors that can be parameterized.
Key points about SelectorFamily:

It generates selectors dynamically based on the parameters you pass.
Each unique parameter combination creates a distinct selector.
It's useful for creating derived state that depends on some parameter.


useRecoilStateLoadable:
Purpose: This hook is used to both read and write to an atom or selector, and it returns the state wrapped in a Loadable.

Returns: It returns a tuple [loadable, setState], where loadable is a Loadable object representing the current state of the atom/selector, and setState is a function to update the state.

When to Use: Use this hook when you need to manage both reading and updating the state, and you want to handle different states like loading, error, or success.


useRecoilValueLoadable:
Purpose: This hook is used to read the state of an atom or selector and returns a Loadable that represents the current state.

Returns: It returns a Loadable object, which provides the current state (loading, hasError, hasValue) and the contents.

When to Use: Use this hook when you only need to read the state and handle its possible states (e.g., loading, error, success) without needing to update it directly.

In React, Suspense and ErrorBoundary are mechanisms to handle asynchronous rendering and error handling gracefully. They are often used together, especially in the context of data fetching, lazy loading, and handling errors in components.

Suspense:
Purpose: Suspense is used to handle asynchronous operations like data fetching or lazy loading of components. It allows you to display a fallback UI (e.g., a loading spinner) while waiting for some asynchronous operation to complete.

Usage: Wrap a component that relies on asynchronous data or lazy-loaded components with Suspense and provide a fallback UI to display while the component is loading.

```angular2html
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

```

Common Use Cases:

Lazy loading components with React.lazy().
Fetching data with libraries that integrate with React's Suspense model, like Relay or React Query.


ErrorBoundary:
Purpose: ErrorBoundary is used to catch JavaScript errors anywhere in the component tree, log those errors, and display a fallback UI instead of the crashed component tree.

Usage: You create an ErrorBoundary by defining a class component that implements componentDidCatch or using a library that provides a hook-based ErrorBoundary. You can then wrap parts of your component tree with this boundary.
Combining Suspense and ErrorBoundary
```angular2html
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

```


Summary:
Suspense: Handles asynchronous operations and provides a fallback UI while waiting for those operations to complete.
ErrorBoundary: Catches errors in components, logs them, and displays a fallback UI when an error occurs.

Fallback -
In React, a "fallback" refers to the content or UI that is displayed temporarily while waiting for an asynchronous operation to complete, or when an error occurs in a component. The fallback provides a graceful way to manage uncertain or incomplete states in your application, ensuring that the user experience remains smooth and predictable.


Selectors provide a powerful way to manage derived state in a Recoil application, making it easy to compute and consume state values based on the current state of your atoms.

