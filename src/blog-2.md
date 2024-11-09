# How to Handle Asynchronous Operations Using Async/Await in TypeScript

Asynchronous programming is crucial in modern development, especially when working with I/O operations like API calls, file reading, or timers. In TypeScript (or JavaScript), we can handle asynchronous operations using **callbacks**, **promises**, and **async/await**. In this blog, we will explore why `async/await` is often preferred over callbacks and promises, with simple code examples to help you understand.

## 1. Callbacks: The Old Way of Handling Async Code

Initially, asynchronous operations were handled with **callbacks**. A callback is a function that is passed to another function and gets called when the asynchronous operation completes.

### Example of Callbacks:

```typescript
function fetchData(callback: (data: string) => void) {
    setTimeout(() => {
        callback('Data fetched');
    }, 2000);
}

fetchData((data) => {
    console.log(data);  // Output after 2 seconds: "Data fetched"
});
```
While this works, the code can become messy and harder to read, especially with nested callbacks — a situation known as "callback hell."

## 2. Promises: A Better Approach

To avoid callback hell, promises were introduced. A promise represents a value that might be available in the future (i.e., resolved) or might fail (i.e., rejected).

### Example of Promises:

```typescript
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);  // Output after 2 seconds: "Data fetched"
    })
    .catch((error) => {
        console.error(error);
    });
```

Promises improve readability and make handling errors easier, but they can still get complicated when you chain multiple asynchronous operations.

## 3. Async/Await: The Cleanest Solution

With **async/await**, introduced in ECMAScript 2017, asynchronous code becomes much easier to read and write. Instead of chaining `.then()` for promises, you can write asynchronous code that looks like synchronous code.

- **`async`**: Declares that a function contains asynchronous code.
- **`await`**: Pauses the execution of the function until the promise is resolved.

### Example of Async/Await:

```typescript
async function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();  // Wait for the promise to resolve
        console.log(data);  // Output after 2 seconds: "Data fetched"
    } catch (error) {
        console.error(error);
    }
}

getData();
```
### Benefits of Async/Await:

- **Readable Code**: Asynchronous code looks like synchronous code, making it easier to understand.
- **Error Handling**: You can use `try/catch` for error handling, just like with synchronous code.
- **Avoids Chaining**: There's no need to chain multiple `.then()` calls, leading to cleaner and more maintainable code.

## 4. Converting Promise-Based Code to Async/Await
Let’s see how we can refactor promise-based code into async/await.

### Promise-Based Code:
```typescript

function fetchUser(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User data');
        }, 1000);
    });
}

function fetchPosts(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
}

fetchUser()
    .then((user) => {
        console.log(user);
        return fetchPosts();
    })
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.error(error);
    });
```
### Refactored with Async/Await:

```typescript
async function fetchUser(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User data');
        }, 1000);
    });
}

async function fetchPosts(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
}

async function getUserData() {
    try {
        const user = await fetchUser();
        console.log(user);  // Output: "User data"
        
        const posts = await fetchPosts();
        console.log(posts);  // Output: ['Post 1', 'Post 2']
    } catch (error) {
        console.error(error);
    }
}

getUserData();
```
## 5. Error Handling in Async/Await
Error handling in async/await is simple and uses the familiar try/catch block.

```typescript

async function fetchDataWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error fetching data');
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);  // Output: "Error: Error fetching data"
    }
}

getData();
```
With this approach, error handling feels natural and structured, unlike in the promise .catch() chaining method.

## Conclusion

While callbacks and promises can handle asynchronous operations, **async/await** offers a more elegant and readable solution in TypeScript. It makes your code look and behave more like synchronous code while still being asynchronous. If you're dealing with complex async logic or chaining multiple promises, switching to `async/await` can make your code much easier to maintain and understand.

By using `async/await`, you:

- Avoid **callback hell**.
- Reduce **promise chaining complexity**.
- Handle errors easily with **try/catch**.

Start using `async/await` in your TypeScript projects today, and enjoy cleaner, more readable asynchronous code!
