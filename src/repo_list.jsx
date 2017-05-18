import React from "react";
import { Link } from "react-router-dom";
import RepoListItem from "./repo_list_item";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "vovanmix",
      repos: []
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const username = this.state.username;

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
      method: "GET",
      headers: { Accept: "application/json" }
    }).then((response) => {
      if (response.status === 200) {
        return response;
      } else {
        throw new Error(response.statusText);
      }
    })
      .then(response => response.json())
      .then(json =>
        this.setState({ repos: json })
      )
      .catch((error) => {
        alert(error);
      });
  }

  handleUpdate(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    const repos = this.state.repos.map(repo =>
      <RepoListItem key={repo.id} repo={repo} />
     );

    return (
      <div>
        <div>
          <Link className="btn btn-primary" to={"/"}>
            Back Home
          </Link>
        </div>

        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUpdate}
        />

        <button
          className="btn btn-primary"
          onClick={this.loadData}
        >
          Load repos
        </button>

        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
}

export default RepoList;
