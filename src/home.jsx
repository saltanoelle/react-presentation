import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        Hi there, this is my home page.
      </div>
      <Link className="btn btn-primary" to={"/repos"}>
        See some github repos
      </Link>
    </div>
  );
}
