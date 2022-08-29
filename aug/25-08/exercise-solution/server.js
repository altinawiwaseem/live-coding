import express from "express";

const app = express();

app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});

app.get("/hello", (req, res) => {
  res.send("hello from server");
});

app.get("/time", (req, res) => {
  res.send(new Date());
});

// req.query
//isNumber/?q=berlin&units=metric&num=777
app.get("/isNumber/", (req, res) => {
  console.log(req.query); // {q: 'berlin', units: 'metric'}

  const { q, units, num } = req.query;

  if (isNaN(num)) {
    res.send(
      "This is not a number, the city is " + q + " and the units are " + units
    );
  } else {
    res.send(
      "This is a number, the city is " + q + " and the units are " + units
    );
  }
});
//========================================================
// req.params
//isNumber/777
app.get("/isNumber2/:num", (req, res) => {
  console.log(req.params); // {num: '777'}

  const { num } = req.params; // const num = req.params.num

  if (isNaN(num)) {
    res.send(
      "This is not a number, the city is " + q + " and the units are " + units
    );
  } else {
    res.send(
      "This is a number, the city is " + q + " and the units are " + units
    );
  }
});
