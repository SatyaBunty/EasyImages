// import { CreateReponseObject } from "./DataHelper";
// var fs = require('fs'), request = require('request');

export const JSDownloader = {
    downloadImageFromURL: function (uri, filename, successCallBackFunction = null, failureCallBackFunction = null) {
        // request.head(uri, function (err, res, body) {
        //     console.log('content-type:', res.headers['content-type']);
        //     console.log('content-length:', res.headers['content-length']);

        //     request(uri).pipe(fs.createWriteStream(filename)).on('close', successCallBackFunction());
        // });
    },
    getMimeType: function (url, successCallBackFunction = null, failureCallBackFunction = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open('HEAD', url);
        xhttp.onreadystatechange = function () {
            if (this.readyState == this.DONE) {
                // console.log(this.status);
                // console.log(this.getResponseHeader("Content-Type"));
                let mimeType = this.getResponseHeader("Content-Type");
                if (mimeType !== null && mimeType !== undefined && mimeType !== "") {
                    if (successCallBackFunction !== null && successCallBackFunction !== undefined && successCallBackFunction !== "") {
                        successCallBackFunction(mimeType.toString());
                    }
                }
                else {
                    if (failureCallBackFunction !== null && failureCallBackFunction !== undefined && failureCallBackFunction !== "") {
                        failureCallBackFunction(mimeType.toString());
                    }
                }
            }
        };
        xhttp.send();
    },
    checkIsURLValid: async function (eachImageItem, successCallBackFunction = null, failureCallBackFunction = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open('HEAD', eachImageItem.url);
        xhttp.onreadystatechange = function () {
            if (this.readyState === this.DONE) {
                // console.log(this.status);
                // console.log(this.getResponseHeader("Content-Type"));
                let urlStatus = this.status;
                if (urlStatus !== null && urlStatus !== undefined && urlStatus !== "" && (urlStatus !== 404)) {
                    if (successCallBackFunction !== null && successCallBackFunction !== undefined && successCallBackFunction !== "") {
                        successCallBackFunction(eachImageItem);
                    }
                    return eachImageItem;
                }
                else {
                    if (failureCallBackFunction !== null && failureCallBackFunction !== undefined && failureCallBackFunction !== "") {
                        failureCallBackFunction();
                    }
                    return null;
                }
            }
        };
        xhttp.send();
    },
    checkIsURLValidBulk: function (eachImageItem, successCallBackFunction = null, failureCallBackFunction = null) {
        var xhttp = new XMLHttpRequest();
        xhttp.open('HEAD', eachImageItem.url);
        xhttp.onreadystatechange = function () {
            if (this.readyState === this.DONE) {
                // console.log(this.status);
                // console.log(this.getResponseHeader("Content-Type"));
                let urlStatus = this.status;
                if (urlStatus !== null && urlStatus !== undefined && urlStatus !== "" && (urlStatus !== 404)) {
                    if (successCallBackFunction !== null && successCallBackFunction !== undefined && successCallBackFunction !== "") {
                        successCallBackFunction(eachImageItem);
                    }
                }
                else {
                    if (failureCallBackFunction !== null && failureCallBackFunction !== undefined && failureCallBackFunction !== "") {
                        failureCallBackFunction();
                    }
                }
            }
        };
        xhttp.send();
    },
}