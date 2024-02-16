# mcpedl.js
A JavaScript library to interact with MCPEDL's API

# Get a submission by slug

```js
MCPEDL.Submissions.getSubmissionBySlug("azalea").then(res=>{
    // Do something...
})
```

# Update V1.1.0

Added some authentication related functions.

## Create an account

```js
MCPEDL.Auth.register("Example", "john@example.com", "Password1234").then(res=>{
    // Do something...
})
```

## Login to an account

*(or more specifically, get the login token/get user info from email and password)*

```js
MCPEDL.Auth.login("john@example.com", "Password1234").then(res=>{
    // Do something...
})
```

# Update V1.2.0

```js
MCPEDL.Auth.getUserFromToken("<TOKEN>").then(res=>{
    // Do something...
})
```

```js
// Rating, id, token
MCPEDL.Submission.vote(5, 12345, "<TOKEN>").then(res=>{
    // Do something...
})
```

More coming soon, this is still in development