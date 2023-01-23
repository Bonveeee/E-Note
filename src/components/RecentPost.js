import { useState, useEffect } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
//sort the posts
//slice to get the last previous posts
//map in a card or container
const RecentPost = (posts) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
        //sorts the data to most recent id which will then be mapped
      const sortedData = json.sort((a, b) => b.id - a.id);
       // Get the most recent three items
      const mostRecent = sortedData.slice(0, 4);
      setData(mostRecent);
    }
    fetchData();
  }, []);

  const imageUrls = [
    "https://images.unsplash.com/photo-1674304985678-f1ab79f726c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1673765270516-581a9b836751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    "https://images.unsplash.com/photo-1674368777653-bc2bca1c30c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
    "https://images.unsplash.com/photo-1674238924120-a9d9a0425d28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <>
      <Card.Header
        as="h4"
        className="text-left mb-3 mt-3"
        style={{
          fontWeight: "bold",
          fontFamily: "Poppins",
          marginLeft: "20px",
        }}
      >
        Recent Posts
      </Card.Header>
      <CardGroup>
        {data.map((item, index) => (
          <Card
            className="text-center mb-3 card-hover"
            style={{ marginLeft: "10px", marginRight: "10px" }}
            key={item.id}
          >
            <Card.Img
              className="card-img-top"
              src={imageUrls[index]}
              alt={item.title}
              style={{ width: "100%", height: "60%", marginBottom: "1px" }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="text-muted">{item.body}</Card.Text>
              <Link to={`/blog`}>
                <Button variant="primary" className="btn-block">
                  Read More
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default RecentPost;
