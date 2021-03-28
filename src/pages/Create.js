import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
export default function Create() {
  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a New Note
        </Typography>
        <Button
          onClick={() => console.log("you clicked me")}
          type="submit"
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>

        <br />

        <Button type="submit" color="secondary" variant="outlined">
          Submit
        </Button>
        <Button type="submit" color="default">
          Submit
        </Button>

        <ButtonGroup color="secondary" variant="contained" disableElevation>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Container>

      {/* <Typography
        variant="h1" 
        color="primary"
        align="center"
      >
        Create a New Note
      </Typography>
      <Typography
        noWrap
        color="secondary"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque molestiae magnam voluptate reiciendis fuga totam facere officia, animi sint laboriosam dolorum voluptas cupiditate explicabo dolore veritatis recusandae rem inventore sunt.
      </Typography> */}
    </div>
  );
}
