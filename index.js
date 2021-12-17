const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to our glorious app',
}));

app.post("/", (req, res)=> {
	console.log(req.body);
	res.send(`${req.body}`);
})
app.listen(PORT, ()=>{
	console.log(`Server running at port ${PORT}`)
});