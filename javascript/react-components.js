//-------------------------
//--- ES6 / React
//-------------------------

// creating a simple element
//React.createElement(element-Name, data, child)
ReactDOM.render(
  React.createElement('h1', null, 'Hello world!'),
  document.getElementById('content')
)
// mapping array
var items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

React.createElement(
    "ul",
    { className: "ingredients" },
    items.map(ingredient =>
        React.createElement("li", null, ingredient)
)

// create class
const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  render() {
    return React.createElement("ul", {"className": "ingredients"},
        React.createElement("li", null, "1 lb Salmon"),
        React.createElement("li", null, "1 cup Pine Nuts"),
        React.createElement("li", null, "2 cups Butter Lettuce"),
        React.createElement("li", null, "1 Yellow Squash"),
        React.createElement("li", null, "1/2 cup Olive Oil"),
        React.createElement("li", null, "3 cloves of Garlic")
    )
  }
})

const list = React.createElement(IngredientsList, null, null)


//--- ReactDOM.render
ReactDOM.render(
  list,
  document.getElementById('react-container')
)


class IngredientsList extends React.Component {

  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient)
  }

  render() {
    return React.createElement("ul", {className: "ingredients"},
        this.props.items.map(this.renderListItem)
    )
  }

}

//--- stateless functional component
const IngredientsList = props =>
    React.createElement("ul", {className: "ingredients"},
        props.items.map((ingredient, i) =>
            React.createElement("li", { key: i }, ingredient)
        )
    )

//--- destructuring properties
const IngredientsList = ({items}) =>
    React.createElement("ul", {className: "ingredients"},
        items.map((ingredient, i) =>
            React.createElement("li", { key: i }, ingredient)
        )
    )

//--- factory
const { render } = ReactDOM;

const IngredientsList = ({ list }) =>
    React.createElement('ul', null,
        list.map((ingredient, i) =>
            React.createElement('li', {key: i}, ingredient)
        )
    )

const Ingredients = React.createFactory(IngredientsList)

const list = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

render(
    Ingredients({list}),
    document.getElementById('react-container')
)
