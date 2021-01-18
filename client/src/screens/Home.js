import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewPostAction,
  updatePostById,
} from "../redux/actions/post.action";
import "./index.scss";
import { Button, Container, Form } from "react-bootstrap";
import CustomInput from "./containers/CustomInput";
import { TaskView } from "./TaskView";
export const Home = () => {
  // dispatch on top always
  const dispatch = useDispatch("");

  const token = localStorage.getItem("token");
  //update post functionality
  const [postToUpdate, setPostToUpdate] = useState(undefined);
  console.log("\n\npostToUpdate : " + JSON.stringify(postToUpdate));

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  console.log("-------- title: " + title, "text: " + text);

  if (!token) {
    return <Redirect to={`/signin`} />;
  }

  const updateInputsOnUpdateButtonClick = (post) => {
    if (post) {
      setTitle(post.title);
      setText(post.text);
    }
  };

  const createNewPost = (e) => {
    e.preventDefault();
    console.log("---------------- creating a new post ....");
    if (title !== "" && text !== "") {
      const post = {
        title,
        text,
      };
      dispatch(createNewPostAction(post));
    }
  };

  const updateAPost = (e) => {
    e.preventDefault();
    console.log("---------------- updating a post ....");
    if (title !== "" && text !== "") {
      const post = {
        
        _id: postToUpdate._id,
        title,
        text,
      };
      dispatch(updatePostById(post));
    }
  };

  return (
    // here we to task screen and we go for it
    <>
      <Container className="form-controller">
        <h3>{postToUpdate ? "Update " : "Create A "}Task</h3>
        <Form
          className="form-group"
          onSubmit={postToUpdate ? updateAPost : createNewPost}
        >
          <CustomInput
            controlId="title"
            placeholder="Enter your title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CustomInput
            controlId="body"
            placeholder="Enter your text.."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
      </Container>
      <Container className="previous-tasks-container">
        <TaskView
          updatePostOnClick={setPostToUpdate}
          updateInputs={updateInputsOnUpdateButtonClick}
        />
      </Container>
    </>
  );
};

export default Home;
