const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let test = '';
let test2 = [];

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to our glorious app',
}));

app.post("/result", (req, res)=> {
	console.log(req.body);
	test = req._body
	test2.push(test)
	console.log(deliverycache)
	res.send(test);
});
app.listen(PORT, ()=>{
	console.log(`Server running at port ${PORT}`)
});