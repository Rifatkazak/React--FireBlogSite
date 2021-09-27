import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import blogPng from "../assets/blok.png";
import { BlogContext } from "../contexts/BlogContext"
import { useContext } from "react";
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#046582",
  },
  blogImg: {
    width: 200,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));



export default function BlogForm() {
  
   
  const classes = useStyles();
  const {details, setDetails, data, setData} = useContext(BlogContext)

  const detailsHandler = () =>{
      
    const newUpdate = data.filter ((item) =>{
        return setDetails(prevDetails => details)
    })
    setData([...data, details])
  } 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={blogPng} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          ── Update Blog ──
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={details.title}
                autoFocus
                onChange={(e) =>
                    setDetails({ ...details, title: e.target.value })
                  }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="image"
                label="Image URL"
                type="text"
                id="image"
                value={details.image}
                onChange={(e) =>
                    setDetails({ ...details, image: e.target.value })
                  }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                value={details.content.slice(0,30)}
                fullWidth
                rows={15}
                variant="outlined"
                onChange={(e) =>
                    setDetails({ ...details, content: e.target.value })
                  }
              />
            </Grid>
          </Grid>
          <NavLink to="/Dashboard" activeClassName="active">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={detailsHandler}
            >
              details
            </Button>
          </NavLink>
        </form>
      </div>
    </Container>
  );
}