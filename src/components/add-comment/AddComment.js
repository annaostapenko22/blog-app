import React, { Component } from "react";

class AddComment extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.comments && (
          <div>
            <h4>Comments:</h4>
            <ul>
              {this.props.comments.map(elem => (
                <li key={elem.id}>
                  <p>{elem.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <form>
            <textarea placeholder="enter your comment"/>
            <button>ADD COMMENT</button>
        </form>
      </>
    );
  }
}

export default AddComment;
