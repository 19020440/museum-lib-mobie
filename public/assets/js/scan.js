$(document).ready(function() {
    $('#modalSelect .btn-submit').click(submitCamera);
    // $('#opencamera').click(openCamera);
    openCamera();

})

// docs qr https://github.com/mebjas/html5-qrcode
function openCamera() {
    Html5Qrcode.getCameras().then(devices => {
        console.log(devices);
        if (devices && devices.length) {
            changeCamera(devices);
            console.log('ok camera');
            var html = '';
            for (const device of devices) {

                html += `<option value="${device.id}">${device.label}</option>`
            }
            $('#select-camera').html(html);
            $("#modalSelect").modal('show')
        }
    }).catch(err => {
        // handle err
    });
}

function submitCamera() {
    var idCamera = $('#select-camera').val();
    console.log(`resCamera`, idCamera);
    if (idCamera) {

        var cameraId = idCamera;
        // .. use this to start scanning.
        const html5QrCode = new Html5Qrcode( /* element id */ "reader");
        html5QrCode.start(
                cameraId, {
                    fps: 10, // Optional, frame per seconds for qr code scanning
                    qrbox: 250
                },
                (decodedText, decodedResult) => {
                    // do something when code is read
                    console.log(`decodedText`, decodedText);
                    console.log(`decodedResult`, decodedResult);
                    if (decodedText === '123456') {
                        toastr.success('Đáp án chính xác');
                        setTimeout(function() {
                            // window.location.href = './done.html'     
                        }, 2000);
                    }

                },
                (errorMessage) => {
                    // parse error, ignore it.
                }).then(function(r) {
                $('.control-camera').css('display', 'flex');
            })
            .catch((err) => {
                // Start failed, handle it.
            });
    }
}

function changeCamera(data) {
    console.log('change');
    $('#modalSelect .res').html(JSON.stringify(data));
}