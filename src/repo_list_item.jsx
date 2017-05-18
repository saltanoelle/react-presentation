import React from "react";
import PropTypes from "prop-types";

const RepoListItem = props =>
  (
    <li className="list-group-item">
      <div><span className="label label-default">{props.repo.name}</span></div>
      <div>{props.repo.description}</div>
      <div>
        <a href={props.repo.html_url} rel="noopener noreferrer" target="_blank">
          {props.repo.html_url}
        </a>
      </div>
    </li>
  );

RepoListItem.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    html_url: PropTypes.string
  }).isRequired
};

export default RepoListItem;
