import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        <p>{comment.comment}</p>
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
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={props.comments}/>
          </div>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
}

export default DishDetail;
