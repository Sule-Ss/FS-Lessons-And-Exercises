# JavaScript Session-16 Class Notes :rocket:

## Session-16 Async Programming - 1

### Synchronous vs Asynchronous

JavaScript is single threaded. Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.

> `alert()` is a synchronous operation. It will block everything else from happening until it completes.

For reasons such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset, we need to use asynchronous operations.

Asynchronous operations are performed in the background, without blocking the main thread.
This functionality is provided by the JavaScript engine of the browser.

There are 2 types of callbacks by the way they're invoked: synchronous and asynchronous callbacks. The synchronous callback is executed during the execution of the higher-order function that uses the callback. A lot of methods of native JavaScript types use synchronous callbacks. The most used ones are the array methods like `array.map()`, `array.forEach()`, `array.find()`, `array.filter()`, `array.reduce()`.

### Asynchronous Callbacks

Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function that the work is done, or something is wrong. Using callbacks is slightly old-fashioned now, but you might still see them.

An example of an async callback is the second parameter of the `addEventListener()` method.

```js
document.addEventListener('click', function (event) {
  console.log('Clicked!');
});
```

### setTimeout

The `setTimeout()` method executes a block of code after the specified time. The method executes the code only once.

```js
setTimeout(function, milliseconds);
```

- **function** - a function containing a block of code
- **milliseconds** - the time after which the function is executed

The `setTimeout()` method returns an **intervalID**, which is a positive integer.

```js
// program to display a text using setTimeout method
function hello() {
  console.log('Hello world');
}
let intervalId = setTimeout(hello, 3000);
console.log('This message is shown first');
console.log('Id: ' + intervalId);
```

**Output**

```
This message is shown first
Id: 1
Hello world
```

In the above program, the `setTimeout()` method calls the `greet()` function after **3000** milliseconds (**3** second).

Hence, the program displays the text Hello world only once after **3** seconds.

> **Note**: The `setTimeout()` method is useful when you want to execute a block of once after some time. For example, showing a message to a user after the specified time.

**Cancel timeout before calling on given time**

If you want to stop this function call, you can use the `clearTimeout()` method.

```js
clearTimeout(intervalID);
```

Here, the `intervalID` is the return value of the `setTimeout()` method.

```js
// program to stop the setTimeout() method
let count = 0;

// function creation
function increaseCount() {
  count += 1;
  console.log(count);
}

let id = setTimeout(increaseCount, 3000);
clearTimeout(id);
console.log('setTimeout is stopped.');
// expected output: setTimeout is stopped
```

#### Display Time Every 3 Second

```js
// program to display time every 3 seconds
function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
  setTimeout(showTime, 3000);
}
showTime();
```

The `setTimeout()` method calls the function only once after the time interval (here **3** seconds).

The above program is recursive, meaning calling itself until the memory runs out.

> **Note**: If you need to execute a function multiple times, it's better to use the `setInterval()` method.

### setInterval

The `setInterval()` method repeats a block of code at every given timing event.

```js
setInterval(function, milliseconds);
```

- **function** - a function containing a block of code
- **milliseconds** - the time interval between the execution of the function

The `setInterval()` method returns an **intervalID** which is a positive integer.

```js
// program to display a text using setInterval method
function hello() {
  console.log('Hello world');
}
setInterval(hello, 2000);
```

**Output**

```
Hello world
Hello world
Hello world
Hello world
Hello world
....
```

In the above program, the `setInterval()` method calls the `greet()` function every **2000** milliseconds(**2** second). The program displays the text Hello world once every **2** seconds.

> **Note**: The `setInterval()` method is useful when you want to repeat a block of code multiple times. For example, showing a message at a fixed interval.

#### Display Time Every 5 Seconds

```js
// program to display time every 5 seconds
function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}
let display = setInterval(showTime, 5000);
```

**Output**

```
"7:42:03 PM"
"7:42:08 PM"
"7:42:13 PM"
....
```

The above program displays the current time once every **5** seconds.

**Cancel interval to stop afterwards**

If you want to stop this function call, you can use the `clearInterval()` method.

```js
clearInterval(intervalID);
```

**Use clearInterval() Method**

```js
// program to stop the setInterval() method after five times
let count = 0;
let interval = setInterval(function () {
  count += 1;
  if (count === 5) {
    clearInterval(interval);
  }
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
```

**Output:**

```
1:38:22 PM
1:38:24 PM
1:38:26 PM
1:38:28 PM
1:38:30 PM
```

> **Note:** If you only need to execute a function one time, it's better to use the `setTimeout()` method.
>
> You can pass additional parameters as much as needed to both `setTimeout()` and `setInterval()` by appending parameters just after the milliseconds:

```js
setTimeout(function, milliseconds, parameter1, ....paramenterN);
setInterval(function, milliseconds, parameter1, ....paramenterN);

// example
function greet(firstName, lastName) {
    console.log('Hello' + ' ' + firstName + ' ' + lastName);
}
setInterval(greet, 2000, 'Barry', 'Mitchell');
```

### Callback Hell

if you want write async codes depended to each other, you may use nested callback. But this is not good programming approach. It is hard to understand and maintain of the callback hell.

```js
setTimeout(() => {
  console.log('john:Hi');
  setTimeout(() => {
    console.log('Sarah: Hello');
    setTimeout(() => {
      console.log('John: How Are you?');
      setTimeout(() => {
        console.log('Fine and you?');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

### Event Loop

![Event Loop Empty](./assets/NOTES/Selection_019.png)

```js
setTimeout(function timeout() {
  console.log('Timed out!');
}, 0);
Promise.resolve(1).then(function resolve() {
  console.log('Resolved!');
});
```

![Event Loop](./assets/NOTES/Selection_021.png)

![Event Loop](./assets/NOTES/Selection_025.png)

![Event Loop](./assets/NOTES/Selection_026.png)

![Event Loop](./assets/NOTES/Selection_027.png)

> **Why an immediately resolved promise is processed faster than an immediate timer?**
>
> Because of the event loop _priorities_ dequeuing jobs from the job queue*(microtask queue)* (which stores the fulfilled promises' callbacks) over the tasks from the task queue*(macrotask queue)* (which stores timed out `setTimeout()` callbacks).

### Promise

Synchronous code is straightforward. But you don't always have the luck to access data instantly: some data, like fetching data over the network, could take a while to be available.

In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

> "I Promise a Result!"
> "Producing code" is code that can take some time
> "Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code

Promises in real-life express a trust between two or more persons and an assurance that a particular thing will surely happen. For example, a promise is used to find out if a person is available to meet a particular meeting. If the person is available, the promise is fulfilled. If the person is not available, the promise is rejected.

A promise may have one of three states.

- Pending
- Fulfilled (Settled)
- Rejected (Settled)

> Note: Either the promise is fulfilled or rejected, it is settled.

A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a **fulfilled** state. If an error occurs, then it will be in a **rejected** state.

#### Promise Constructor

A JavaScript Promise object contains both the producing code and calls to the consuming code.
`promiseObj.then(onFulfilled, onRejected);`
onFulfilled receives the value passed to `resolve()`
onRejected receives the value passed to `reject()`
with catch block, you can handle the error
`promiseObj.then(onFulfilled).catch(onRejected);`

Let's see how to create a promise.

```js
let myPromise = new Promise(function (resolve, reject) {
  // producing code
  // ... takes some time

  // eventually, the producing code will call either the resolve() or reject() function
  // but for now, it is pending
  // only one of the two functions will be called, the other one will be ignored
  resolve('Success!'); // fulfilled
  // resolve receives a value that will be passed to the consuming code
  reject('Failure!'); // rejected
  // reject receives a value that will be passed to the error handling consumer code
});
// consuming code
myPromise.then(
  function (value) {
    // consuming code
    console.log(value); // "Success!"
  },
  function (error) {
    // error handling consumer code
    console.log(error); // "Failure!"
  }
);
```

> **Note:** The `resolve()` and `reject()` functions are called by the producing code.
> Generally speaking, you are going to be consumer for the promise. You can use the `then()` method to handle the promise's success and failure.

Promises allow you to chain asynchronous operations with a simple syntax. For example, you can use a promise to wait for the data to be fetched from the server. If the data is fetched successfully, you can use the data to display it on the screen. If the data is not fetched successfully, you can display an error message.

An example of a promise chain is shown below:

```js
api()
  .then(function (result) {
    return api2();
  })
  .then(function (result2) {
    return api3();
  })
  .then(function (result3) {
    // do work
    if (error) {
      // throw error
      return Promise.reject(error);
    } else {
        // do something
  })
  .catch(function (error) {
    //handle any error that may occur before this point
  });
```

Whereas callback structure is hard to follow.

```js
api(function (result) {
  api2(function (result2) {
    api3(function (result3) {
      // do work
      if (error) {
        //handle any error that may occur before this point
      } else {
        // do something
      }
    });
  });
});
```

#### JavaScript finally() method

You can also use the `finally()` method with promises. The `finally()` method gets executed when the promise is either resolved successfully or rejected. For example, you can use the finally() method to clean up resources.

```js
let myPromise = new Promise(function (resolve, reject) {
  // producing code
  // ... takes some time
  resolve('Success!'); // fulfilled
  // or
  reject('Failure!'); // rejected
});

myPromise
  .then(function (value) {
    // consuming code
    console.log(value); // "Success!"
  })
  .catch(function (error) {
    // error handling consumer code
    console.log(error); // "Failure!"
  })
  .finally(function () {
    // cleanup code
    console.log('Cleanup!');
  });
```

Let's see an example.

```js
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 3000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise = getUsers();
console.log(promise);
promise.then(onFulfilled);
```

#### Promise Methods

- chaining methods -`then(onFulfilled, onRejected)`
  - `catch(onRejected)`
  - `finally(onFinally)`
- `all(iterable)`
- `allSettled(iterable)`
- `any(iterable)`
- `resolve(value)`
- `reject(reason)`
- `race(iterable)`

### Async/await

We use the `async` keyword with a function to represent that the function is an asynchronous function. The async function returns a `promise`. We prepend `async` keyword to function declaration or function statement, such as arrow function's parentheses:

```js
async function functionName(parameter1, parameter2, ...paramaterN) {
    // statements
}
const f1 = async () => {
  // some code
}

functionName() instanceof Promise // true

async function func1() {
  console.log('Async function is running');
  return 1;
}
```

We can only use `await`keyword inside an async function. `await` keyword is prepended to any statement in which program execution should wait for the result before continuing. We cannot use `await` keyword in non async functions, or main execution block, with the exception of modules.

#### Error Handling in async functions

As stated above, async functions are instance of Promise object. Therefore function may respond with reject status. We can either `throw` error or return `Promise.reject()`. We can handle errors using `try... catch` blocks.

```js
async function getUser(userId) {
	await Promise.reject(new Error('Invalid User Id'));
  // or
  throw new Error('Invalid User Id');
}

// handling errors with try... catch

async function showServiceCost() {
    try {
      let user = await getUser(100);
      let services = await getServices(user);
      let cost = await getServiceCost(services);
      console.log(`The service cost is ${cost}`);
    } catch(error) {
      console.log(error);
      // we can also throw the error
      throw error;
      // or like below
      throw new Error('some specific error message');
    }
}
```



### Fetch api

The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

If you have worked with `XMLHttpRequest` (`XHR`) object, the Fetch API can perform all the tasks as the `XHR` object does.

In addition, the Fetch API is much simpler and cleaner. It uses the `Promise` to deliver more flexible features to make requests to servers from the web browsers.

The `fetch()` method is available in the global scope that instructs the web browsers to send a request to a URL.

The `fetch()` requires only one parameter which is the URL of the resource that you want to fetch:

```js
let response = fetch(url);
```

The `fetch()` method returns a `Promise` so you can use the `then()` and `catch()` methods to handle it.

When the request completes, the resource is available. At this time, the promise will resolve into a `Response` object.

The `Response` object is the API wrapper for the fetched resource. The `Response` object has a number of useful properties and methods to inspect the response.

#### Reading the Response

If the contents of the response are in the raw text format, you can use the `text()` method. The `text()` method returns a `Promise` that resolves with the complete contents of the fetched resource:

```js
fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data));
```

In practice, you often use the [`async`/`await`](https://www.javascripttutorial.net/es-next/javascript-async-await/) with the `fetch()` method like this:

```js
async function fetchText() {
    let response = await fetch('/readme.txt');
    let data = await response.text();
    console.log(data);
}
```

Besides the `text()` method, the `Response` object has other methods such as `json()`, `blob()`, `formData()` and `arrayBuffer()` to handle the respective type of data.

#### JavaScript Fetch API example

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

**Result:**

```json
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

> **fetch response has some built-in methods:**
>
> `json()`: response body text as [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) ,
>
> `text()`: text representation of the response body ,
>
> `formData()`:   [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) representation of the response body ,
>
> `arrayBuffer()`:   [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) representation of the response body,
>
> `blob()`:  [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) representation of the response body.

#### Handling the status codes of the Response

The `Response` object provides the status code and status text via the `status` and `statusText` properties. When a request is successful, the status code is `200` and status text is `OK`:

```js
async function fetchText() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/8');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}
fetchText();
```

Output:

```
200
OK
```

If the requested resource doesn’t exist, the response code is `404`:

```js
let response = await fetch('/non-existence.txt');

console.log(response.status); // 400
console.log(response.statusText); // Not Found
```

Output:

```
400
Not Found
```

If the requested URL throws a server error, the response code will be `500`.

If the requested URL is redirected to the new one with the response `300-309`, the `status` of the `Response` object is set to `200`. In addition the `redirected` property is set to `true`.

The `fetch()` returns a promise that rejects when a real failure occurs such as a web browser timeout, a loss of network connection, and a `CORS` violation.

## References

1. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
2. https://dmitripavlutin.com/javascript-callback/
3. https://dmitripavlutin.com/javascript-promises-settimeout/
4. https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
5. https://javascript.info/event-loop
6. https://www.programiz.com/javascript/setTimeout
7. https://www.programiz.com/javascript/setInterval
8. YouTube Videos to be watched prior to the class:

- [Jake Archibald: In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0) ~35 min
- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ) ~27 min

9. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
10. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
11. https://www.javascripttutorial.net/javascript-fetch-api/
12. https://javascript.info/async-await#async-functions
