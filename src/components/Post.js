import { FaTimes } from 'react-icons/fa';
import { Card } from 'react-bootstrap';


const Post = ({post, onDelete, onToggle}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {post.title}
          <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(post.id)}/>
        </Card.Title>
        <Card.Text>{post.userID}</Card.Text>
        <Card.Text>{post.body}</Card.Text>
        {/* <Card.Text onChange={() => onToggle(post.id)} checked={post.reminder}>Reminder:</Card.Text> */}
      </Card.Body>
    </Card>
  )
}

export default Post;
