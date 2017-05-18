

class Edit extends React.Component {
  render() {
    return (
      <EditForm title="Registration Form"/>
    );
  }
}

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       name: "stranger",
       age: 0,
       subscribed: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const sub = this.state.subscribed
                  ? <div>Thank you for subscribing!</div>
                  : <div>You're not yet subscribed</div>;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Hello, {this.state.name}, your age is {this.state.age}</h2>
        {sub}
        <div>
          <label>Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>Age:
            <input type="text" name="age" value={this.state.age} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>Subscribe:
            <input name="subscribed" type="checkbox"
              checked={this.state.subscribed} onChange={this.handleInputChange} />
          </label>
          </div>
      </div>
    );
  }
};

ReactDOM.render(
  <Edit />,
  document.getElementById('root')
);
