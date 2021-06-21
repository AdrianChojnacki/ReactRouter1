import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const News = () => <h1>News</h1>;
const Contact = () => <h1>Contact</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="home-selected"
                    activeStyle={{ backgroundColor: "purple" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    activeClassName="news-selected"
                    activeStyle={{ backgroundColor: "orange" }}
                  >
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    activeClassName="contact-selected"
                    activeStyle={{ backgroundColor: "red" }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
