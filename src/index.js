const express = require("express");
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("📩 New Podio Message Received:", req.body);
  res.status(200).send("Received!");
});

app.listen(3000, () => console.log("✅ Webhook Server Running!"));