var arrDeviceCamera = null;

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
            arrDeviceCamera = devices;
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
        displayCamera(idCamera);
    }
}

function changeCamera(data) {
    console.log('change');
    $('#modalSelect .res').html(JSON.stringify(data));
}

function displayCamera(cameraId) {
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
            $('.item-control-camera.switch-camera i').click(function() {
                console.log('cameraId', cameraId);
                if (arrDeviceCamera && arrDeviceCamera.length >= 2) {
                    var indexCam = arrDeviceCamera.findIndex(item => item.id == cameraId);
                    console.log(indexCam);
                    var cameraIdNew = arrDeviceCamera[(indexCam + 1) % arrDeviceCamera.length].id;
                    html5QrCode.stop().then((ignore) => {
                        displayCamera(cameraIdNew);
                        // QR Code scanning is stopped.
                    }).catch((err) => {
                        // Stop failed, handle it.
                    });

                }
            });
        })
        .catch((err) => {
            // Start failed, handle it.
        });
}