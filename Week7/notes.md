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
