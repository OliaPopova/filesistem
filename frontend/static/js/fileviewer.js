
    var myState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
}

    pdfjsLib.getDocument('filesistem/frontend/2022.pdf').then((pdf) => {

    myState.pdf = pdf;
    render();

});

    function render() {
    myState.pdf.getPage(myState.currentPage).then((page) => {

        var canvas = document.getElementById("pdf_renderer");
        var ctx = canvas.getContext('2d');

        var viewport = page.getViewport(myState.zoom);

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });
}

    document.getElementById('go_previous').addEventListener('click', (e) => {
    if(myState.pdf == null || myState.currentPage == 1)
    return;
    myState.currentPage -= 1;
    document.getElementById("current_page").value = myState.currentPage;
    render();
});

    document.getElementById('go_next').addEventListener('click', (e) => {
    if(myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages)
    return;
    myState.currentPage += 1;
    document.getElementById("current_page").value = myState.currentPage;
    render();
});

    document.getElementById('current_page').addEventListener('keypress', (e) => {
    if(myState.pdf == null) return;

    // Get key code
    var code = (e.keyCode ? e.keyCode : e.which);

    // If key code matches that of the Enter key
    if(code == 13) {
    var desiredPage =
    document.getElementById('current_page').valueAsNumber;

    if(desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
    myState.currentPage = desiredPage;
    document.getElementById("current_page").value = desiredPage;
    render();
}
}
});

    document.getElementById('zoom_in').addEventListener('click', (e) => {
    if(myState.pdf == null) return;
    myState.zoom += 0.5;
    render();
});

    document.getElementById('zoom_out').addEventListener('click', (e) => {
    if(myState.pdf == null) return;
    myState.zoom -= 0.5;
    render();
});



    var btn_phone = document.getElementById('btn-phone');
    btn_phone.addEventListener('click', () => {
        btn_phone.classList.toggle('btn-phone-down');
    })


    var btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        btn.classList.toggle('btn-down');
    })

    var btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        btn2.classList.toggle('btn-down2');
    })

    var btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', () => {
        btn3.classList.toggle('btn-down3');
    })

    var btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', () => {
        btn4.classList.toggle('btn-down4');
    })

    var btn5 = document.getElementById('btn5');
    btn5.addEventListener('click', () => {
        btn5.classList.toggle('btn-down5');
    })

    var btn6 = document.getElementById('btn6');
    btn6.addEventListener('click', () => {
        btn6.classList.toggle('btn-down6');
    })
