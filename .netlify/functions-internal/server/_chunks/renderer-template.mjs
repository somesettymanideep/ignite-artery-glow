import { r as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Ignite Vascular Center | Vascular Surgery in Vijayawada</title>\r\n    <meta name=\"description\" content=\"Advanced vascular surgery & endovascular care in Kasturibai Peta, Vijayawada. Varicose veins, PAD, diabetic foot care & dialysis access by expert specialists.\" />\r\n  </head>\r\n  <body>\r\n    <div id=\"root\"></div>\r\n    <script type=\"module\" src=\"/src/start.ts\"><\/script>\r\n  </body>\r\n</html>\r\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
