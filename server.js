const express = require("express");
const cors = require("cors");
const axios = require("axios"); 
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.post("/completion", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: req.body.message }],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
