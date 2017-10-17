var Greeting = createReactClass({
  render: function() {
    return React.createElement('h1', null, this.props.name);
  }
});

function renderPage() {
  ReactDOM.render(
    React.createElement(Greeting, { name: 'Hello React Sydney' }, null),
    document.getElementById('root')
  );
}
