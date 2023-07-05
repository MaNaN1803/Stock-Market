import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src="//placehold.it/500x200"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src="//placehold.it/500x180"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in.
                  Aliquam codeply mauris arcu, tristique a lobortis vitae,
                  condimentum feugiat justo.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
