import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to Our Blogging Company</h1>
          <p className="lead">
            We are a team of passionate bloggers who believe in sharing the
            untold stories behind the story.
          </p>
        </div>
      </div>

      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, velit vel maximus tempor, sapien nibh feugiat risus, vel
          tincidunt magna ligula eget est. Sed accumsan euismod risus, id
          tincidunt magna.
        </p>
        <Link to={`/contact`}>
          <Button
            href="/contact"
            style={{ marginBottom: "10px", marginTop: "10px" }}
            size="lg"
            variant="outline-dark"
            className="text-center"
          >
            Connect With Us
          </Button>{" "}
        </Link>
      </div>
    </>
  );
};

export default AboutUs;
