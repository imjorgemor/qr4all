import { useRef } from 'react';
import { Button, Container, Text } from '@nextui-org/react';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types'

const QrCodeImage = ({ userInput }) => {

    const ref = useRef();

    const downloadQRCode = e => {
        e.preventDefault();

        let imageQR = ref.current.querySelector("#qrCodeId");
        let image = imageQR.toDataURL("image/png");
        let link = document.createElement("a");
        link.href = image;
        link.download = `qr${userInput}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    const qrCode = (
        <QRCode
            id="qrCodeId"
            size={300}
            value={userInput}
        />
    )

    return (
        <Container display="flex" direction='column' css={{ margin: 0, padding: 0, marginTop: 15, marginBotton: 15 }}>
            <Text h2>Live view</Text>
            <div className="code" ref={ref}>
                {qrCode}
            </div>
            <div className="download">
                <Button
                    onClick={downloadQRCode}
                    size="xl"
                    shadow color="gradient"
                    css={{ margin: "auto", marginTop: 10 }}
                >Download QR COde</Button>
            </div>
        </Container>
    )
};

export default QrCodeImage;

QrCodeImage.propTypes = {
    userInput: PropTypes.string,
}


