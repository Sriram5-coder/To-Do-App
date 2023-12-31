const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud"
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM projectlist";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error retrieving data:", err);
      return res.status(500).json({ error: "Error retrieving data" });
    }
    return res.json(data);
  });
});

app.post('/create', (req, res) => {
  const projectName = req.body.projectName; // Ensure consistency in property naming
  const sql = "INSERT INTO projectlist (Project_Name) VALUES (?)";

  db.query(sql, [projectName], (err, data) => {
    if (err) {
      console.error("Error creating project:", err);
      return res.status(500).json({ error: "Error creating project" });
    }
    return res.status(201).json({ message: "Project created successfully", data });
  });
});

app.get("/projects", (req, res) => {
    const sql = "SELECT * FROM projectlist";
  
    db.query(sql, (err, data) => {
      if (err) {
        console.error("Error retrieving projects:", err);
        return res.status(500).json({ error: "Error retrieving projects" });
      }
      return res.json(data);
    });
  });

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});
