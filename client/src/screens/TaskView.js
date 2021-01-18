import React from "react";
import { Container, Button, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { deletePost,updatePostById } from "../redux/actions";
import "./index.scss";
export const TaskView = (props) => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);
  return (
    <Container>
      {posts.map((p, index) => {
        return (
          <>
              <Row className="row" key={index}>
                <Col className="title">{p.title}</Col>
                <Col className="text"> {p.text}</Col>
                <Button variant="btn btn-success" onClick={() => {
                  
                  props.updatePostOnClick(p);
                  props.updateInputs(p);
                  } }>
                UPDATE
                </Button>
                <Button variant="btn btn-danger" 
                onClick={() => dispatch(deletePost(p._id))}>
                DELETE
                </Button>
              </Row>
           
          </>
        );
      })}
    </Container>
  );
};
