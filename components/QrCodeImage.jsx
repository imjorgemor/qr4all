import { useRef } from 'react';
import { Text, Button } from '@nextui-org/react';
import QRCode from 'qrcode.react';

const QrCodeImage = ({ userInput, setuserInput }) => {

    const ref = useRef();

    const downloadQRCode = e => {
        e.preventDefault();

        let imageQR = ref.current.querySelector("#qrCodeId");
        let image = imageQR.toDataURL("image/png");
        let link = document.createElement("a");
        link.href = image;
        link.download = "qr-demo.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            setuserInput("")
        }, 3500);

       








    }



    const qrCode = (
        <QRCode
            id="qrCodeId"
            size={250}
            value={userInput}
        />
    )

    return (
        <div>
            <div ref={ref}>
                {qrCode}
            </div>
            <div>
                <Button onClick={downloadQRCode}>Download QR COde</Button>
            </div>
        </div>
    )
};

export default QrCodeImage;
