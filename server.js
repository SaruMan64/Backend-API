const cors = require("cors");
const express = require("express");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/randomnumber", (req, res) => {
  function randomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(3);
  }

  const number = randomNumber(0, 5);
  setTimeout(() => {
    console.log(number)
    res.send(`${number}`);
  }, number * 1000);

});

/* 
app.post("/", (req, res) => {
  
});

app.put("/:id", (req, res) => {
 
});

app.delete("/:id", (req, res) => {
  
});
 */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
