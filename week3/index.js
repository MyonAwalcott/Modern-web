import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
app.get("/", (req, res) => {    
  res.send("Hello from express server");
});
app.put("/", (req, res) => {
  res.send("Hello from PUT request");
});
app.post("/", (req, res) => {
  res.send("Hello from POST request");
});

/*
DOMAIN: https://www.youtube.com/watch?v=wUwhoxge3WM&ab_channel=Zhoniin
ENPOINT: /watch
? - query object
v=wUwhoxge3WM&ab_channel=Zhoniin

req: {
    ip,
    OS,
    url,
    method,
    query, (?) -  for searching information on DB
    params, body
}
*/

// for params
// https://www.ebay.ca/b/adidas-Wales-Bonner-x-Samba-Millennium-Fade-Gold/15709/bn_7122416165

app.get("/params/:itemID", (req, res) => {
  console.log(req.url); // /watch
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
    res.send("You are watching a video");
});