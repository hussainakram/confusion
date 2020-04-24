import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const RenderDish = ({dish}) => {
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

const RenderComments = ({comments}) => {
  return(
    comments.map((comment) => {
    return(
      <div key={comment.id}>
        <p>{comment.commentText}</p>
        <p>-- {comment.author} {comment.date}</p>
      </div>
    )
  }))
}

const DishDetail = (props) => {
  if (props.dish) {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={props.dish.comments}/>
          </div>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
}

export default DishDetail;
