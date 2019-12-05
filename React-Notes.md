### Important things to remember 
- Decide on Components
- Decide the state and where it lives
- What changes when state changes


### Browser Router

- Browser Router is a class from ***react-router-dom*** and it provide the functionality of routing between the pages.
- Components between the BrowserRouter tag can be navigated.
```
<BrowserRouter>
<App/>
</BrowserRouter>

```

- Now in App Component we can use***Route*** tag which helps to route to that specific component
- exact has ***true*** or ***false*** value
- if we don't define anything its by default true
```
<Route exact path="/" component={HomePage}/>
```

- Switch allows to only select one Route at a time.

### WithRouter

- withRouter is a High Order Component (HOC) from react-router-dom.
- withRouter is a function which takes in a Component and returns a powered up component.