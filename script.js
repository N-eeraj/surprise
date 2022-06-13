const audio = document.querySelector("audio");
const btn = document.querySelector("button");
const card = document.querySelector(".card");
const recipient = document.querySelector("span");
const recipientName = location.search.slice(1).split("%20").join(" ");

onload = () => {
	btn.addEventListener("click", () => {
		btn.style.transform = "none";
		card.style.top = "50%";
		card.style.transform = "scaleY(1) translate(-50%, -50%)";
		recipient.innerText = recipientName || 'To You';
		setTimeout(() => audio.play(), 1000);
	});
};