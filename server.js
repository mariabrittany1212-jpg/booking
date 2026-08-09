const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/api/save", (req, res) => {
  const { email, Password } = req.body;

  console.log("User Email:", email);
  console.log("Password:", Password);

  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});