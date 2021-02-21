const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

//Define paths for express config
const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);
//Setup static directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
	res.render("index", { title: "Weather", name: "Pritam Kumar" });
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About Me", name: "Pritam Kumar" });
});
app.get("/help", (req, res) => {
	res.render("help", {
		helpText: "This is help text.",
		title: "Help",
		name: "Pritam Kumar",
	});
});
app.get("/weather", (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: "You must provide an address",
		});
	}
	res.send({
		forecast: "it is cold today of 5 degree celcius",
		address: req.query.address,
	});
});

app.get("/products", (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: "You must provide a search term",
		});
	}
	console.log(req.query);
	res.send({
		products: [],
	});
});

app.get("/help/*", (req, res) => {
	res.render("page404", {
		title: "404",
		name: "Pritam Kumar",
		errorMessage: "Help article not found",
	});
});

app.get("*", (req, res) => {
	res.render("page404", {
		title: "404",
		name: "Pritam Kumar",
		errorMessage: "Page Not Found",
	});
});

app.listen(3000, () => {
	console.log("Server is up on port 3000");
});
