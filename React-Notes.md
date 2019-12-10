### Important things to remember

- Decide on Components
- Decide the state and where it lives
- What changes when state changes

### Redux

#### Why Redux

- it is really good for handling big react application
- Redux is used to share data between components
- state management of redux

  - single source of truth
  - state is read only
  - Changes using pure function

  pure function recieves a input and return a output

  - Action is what how interacts with ui
  - Reducer is a pure function
  - Store is the entire state of the application

- Redux uses FLUX pattern

action -> dispatcher -> store -> view

#### Provider

- Provider is a component class from react-redux API.
- It Should be parent of our application as it provides connection with the state.
- Because of this we can get the data from the store or send the data from UI to update the data.

#### Reducer

- A reducer is a function which gets two properties
- Initial State and action
- action is an object which has a type and payload
- payload is the data.

#### connect

- connect is higher order component(HOC) which joins the state and the component.
- connect accepts two functions as argument.
- mapStateToProps and mapDispatchToProps

#### mapStateToProps

- mapStateToProps gets direct access of the root reducer.
-
