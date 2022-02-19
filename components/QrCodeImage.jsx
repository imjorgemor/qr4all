import { useRef } from 'react';
import { Button, Container, Card, Spacer } from '@nextui-org/react';
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
         size={300}
         value={userInput}
      />
   )

   return (
      <Container  css={{margin: 0, padding: 0, marginTop: 15}}>
         <div ref={ref}>
            {qrCode}
         </div>
         <div>
            <Button
               onClick={downloadQRCode}
               size="xl"
               color="gradient"
               shadow color="gradient"
               css={{marginTop: 10}}
            >Download QR COde</Button>
         </div>
      </Container>
   )
};

export default QrCodeImage;
