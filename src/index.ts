

import { initialize, ftmlDocument } from "@flexiformal/ftml";

const initStartTime = Date.now();

async function main() {
  try {
    // ۱. اول initialize کن و منتظر بمون
    await initialize("https://mathhub.info", "WARN");
    console.log("FTML initialized:", Date.now() - initStartTime, "ms");

    // ۲. یک div خالی بساز
    const container = document.createElement("div");
    document.body.appendChild(container);
    // ۳. سند را رندر کن
    const handle = ftmlDocument(
      container,           // عنصری که محتوا داخلش رندر می‌شود
      {type:"FromBackend", uri:"https://mathhub.info?a=courses/FAU/AI/course&p=logic/sec&d=atp1&l=en"},                // context (معمولاً null)
    );
	
    // اختیاری: اگر بعداً خواستی محتوای رندر شده را پاک کنی:
    // handle.unmount();
	document.body.appendChild(container);

  } catch (err) {
    console.error("FTML initialization or rendering failed:", err);
  }
}

main();