const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message1");
const messageTwo = document.querySelector("#message2");

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = search.value;
	const url = `/weather?address=${location}`;

	messageOne.textContent = "Loading...";
	messageTwo.textContent = "";
	fetch(url).then((res) => {
		res.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				messageOne.textContent = data.location;
				messageTwo.textContent = data.forecast;
			}
		});
	});
});
