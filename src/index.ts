import { initialize, ftmlDocument } from "@flexiformal/ftml";

const initStartTime = Date.now();
var handle: any;
async function main() {
	try {

		await initialize("https://mathhub.info", "ERROR");
		console.log("FTML initialized:", Date.now() - initStartTime, "ms");


		const container = document.createElement("div");
		document.body.appendChild(container);

		handle = ftmlDocument(
			container,           // عنصری که محتوا داخلش رندر می‌شود
			{ type: "FromBackend", uri: "https://mathhub.info?a=courses/FAU/AI/course&p=logic/sec&d=atp1&l=en" },
		);

		document.body.appendChild(container);

	} catch (err) {
		console.error("FTML initialization or rendering failed:", err);
	}
}

main();