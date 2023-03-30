// get the iframe element

function loadPage(url) {

    var iframe = document.getElementById('content-bucket');
    iframe.src = url;
    iframe.onload = function () {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        let temp_url = "./steps.html";
        if (url != temp_url) {
            iframe.style.minHeight = '700px';
        }
    };
}

window.onload = function () {
    loadPage("./steps.html");
};
