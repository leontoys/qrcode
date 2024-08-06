document.getElementById('generateBtn').addEventListener('click', function() {
    var text = document.getElementById('textInput').value;
    if (text) {
        QRCode.toCanvas(document.getElementById('qrCanvas'), text, function (error) {
            if (error) console.error(error);
            console.log('QR Code generated successfully!');
        });
    } else {
        alert('Please enter some text!');
    }
});
