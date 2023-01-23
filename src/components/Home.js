import { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import AddPost from "./AddPost";
import RecentPost from "./RecentPost";

const Home = () => {
  const [posts, setPosts] = useState([]);

  //add POST
  const addPost = async (post) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    //new data is added
    const data = await res.json();
    setPosts([...posts, data]);
    console.log(data);
  };

  return (
    <>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Col xs={12}>
            <Card>
              <Image
                src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2clMjBmb3IlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Sample"
                className="img-fluid"
                style={{ filter: "blur(3px)", height: "auto", width: "100%" }}
              />
              <Card.Body
                className="text-center"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Card.Title>
                  {" "}
                  <h1 className="text-blue">
                    Welcome to E-Post
                    <span>
                      {" "}
                      where we write the untold stories <span>behind </span>the
                      Story!
                    </span>
                  </h1>
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    {" "}
                    <AddPost onAdd={addPost} />
                  </Card.Text>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <RecentPost />
    </>
  );
};

export default Home;