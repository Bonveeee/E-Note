import { Card } from "react-bootstrap";

const Post = ({ post, onDelete, }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle>{post.userID}</Card.Subtitle>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
