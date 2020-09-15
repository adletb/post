const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()) // req.body

//ROUTES//


// create a post

app.post("/post", async (req, res) => {
    try {
        const { author, title, body } = req.body;
        const newPost = await pool.query(
            `INSERT INTO post (author, title, body) 
            VALUES ($1, $2, $3) RETURNING title`,
            [author, title, body]);
        res.json(newPost.rows[0]);

    } catch (err) {
        console.error(err.message)
    }
})


// get all posts

app.get("/posts", async (req, res) => {
    try {
        const allPosts = await pool.query("SELECT * FROM post");
        res.json(allPosts.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
})