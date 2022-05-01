import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/discord">Login With Discord</a>
          </li>
        );

      default:
        return (
          <li>
            <a href="/auth/logout">{`Logged in as ${this.props.auth.username}`}</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-4">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo center"
          >
            Dashboard
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
