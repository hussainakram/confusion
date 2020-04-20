import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name} </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  renderComments(dish) {
    if (dish && dish.comments.length > 0) {
      return(dish.comments.map((comment) => {
        return(
          <div key={comment.id}>
            <p>{comment.commentText}</p>
            <p>-- {comment.author}</p>
          </div>
        )
      }))
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    )
  }
}

export default DishDetail;
