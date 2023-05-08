import { uploadStart } from "./modules/beginUpload.js";
import { uploadEnd } from "./modules/finishUpload.js";
import { getUploadData } from "./modules/uploadData.js";

export function upload() {
    var lastNow = new Date().getTime();
    var lastKBytes = 0;
    var url = "https://httpbin.org/post";
    var xhr = new window.XMLHttpRequest();

    uploadStart(lastNow, lastKBytes, xhr);
    uploadEnd(xhr);
    var data = getUploadData(10000 * 1022);
    xhr.open("POST", url, true);
    xhr.send(data);
}