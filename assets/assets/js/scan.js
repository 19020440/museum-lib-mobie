$(document).ready(function() {
    $('#modalSelect .btn-submit').click(submitCamera);
    $('#opencamera').click(openCamera);


})

// docs qr https://github.com/mebjas/html5-qrcode
function openCamera() {
    Html5Qrcode.getCameras().then(devices => {
        console.log(devices);
        if (devices && devices.length) {
            var html = '';
            for (const device of devices) {

                html += `<option value="${device.id}">${device.label}</option>`
            }
            $('#select-camera').html(html);
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
                    fps: 1, // Optional, frame per seconds for qr code scanning
                    qrbox: 250
                },
                (decodedText, decodedResult) => {
                    // do something when code is read
                    console.log(`decodedText`, decodedText);
                    console.log(`decodedResult`, decodedResult);

                },
                (errorMessage) => {
                    // parse error, ignore it.
                })
            .catch((err) => {
                // Start failed, handle it.
            });
    }
}