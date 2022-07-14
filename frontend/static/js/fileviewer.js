
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

    if(btn_phone) {
        btn_phone.addEventListener('click', () => {
                btn_phone.classList.toggle('btn-phone-down');
        })
    }

    var btn2_phone = document.getElementById('btn2-phone');
    if(btn2_phone) {
        btn2_phone.addEventListener('click', () => {
            btn2_phone.classList.toggle('btn2-phone-down');
        })
    }


    var btn3_phone = document.getElementById('btn3-phone');
    if(btn3_phone) {
        btn3_phone.addEventListener('click', () => {
            btn3_phone.classList.toggle('btn3-phone-down');
        })
    }


    var btn4_phone = document.getElementById('btn4-phone');
    if(btn4_phone) {
        btn4_phone.addEventListener('click', () => {
            btn4_phone.classList.toggle('btn4-phone-down');
        })
    }


    var btn5_phone = document.getElementById('btn5-phone');
    if(btn5_phone) {
        btn5_phone.addEventListener('click', () => {
            btn5_phone.classList.toggle('btn5-phone-down');
        })
    }


    var btn6_phone = document.getElementById('btn6-phone');
    if(btn6_phone) {
        btn6_phone.addEventListener('click', () => {
            btn6_phone.classList.toggle('btn6-phone-down');
        })
    }


    var btn = document.getElementById('btn');
    if(btn) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('btn-down');
        })
    }


    var btn2 = document.getElementById('btn2');
    if(btn2) {
        btn2.addEventListener('click', () => {
            btn2.classList.toggle('btn2-down');
        })
    }



    var btn3 = document.getElementById('btn3');
    if(btn3) {
        btn3.addEventListener('click', () => {
            btn3.classList.toggle('btn3-down');
        })
    }


    var btn4 = document.getElementById('btn4');
    if(btn4) {
        btn4.addEventListener('click', () => {
            btn4.classList.toggle('btn4-down');
        })
    }

    var btn5 = document.getElementById('btn5');
    if(btn5) {
        btn5.addEventListener('click', () => {
            btn5.classList.toggle('btn5-down');
        })
    }


    var btn6 = document.getElementById('btn6');
    if(btn6) {
        btn6.addEventListener('click', () => {
            btn6.classList.toggle('btn6-down');
        })
    }


