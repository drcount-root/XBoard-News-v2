import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-1">
        <div className="card shadow" style={{ border: "0px" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png"
            }
            className="card-img-top"
            style={{ width: "100%", height: "200px" }}
            alt="..."
          />

         

          <div className="card-body">
          <span
            className="position-absolute translate-middle badge bg-danger py-2"
            style={{
              left: "50%",
              // zIndex: "1",
              // border: '1px solid black',
              width: "100%",
              marginTop: '-2px',
              borderRadius: '0px'
            }}
          >
            {source}
          </span>
            <h5 className="card-title my-4">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
