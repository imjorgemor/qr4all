import { useState } from 'react'
import Form from "./Form"
import QrCodeImage from "./QrCodeImage"

const QrGenerator = () => {

    const [userInput, setuserInput] = useState("");

    return (
        <section className='main'>
            <div className="form-wrapper">
                <Form
                    userInput={userInput}
                    setuserInput={setuserInput}
                />
            </div>
            <div className="qr-wrapper">
                {(userInput.length > 1)
                    ? <QrCodeImage
                        userInput={userInput}
                        setuserInput={setuserInput}
                    />
                    : <div></div>
                }
            </div>
        </section>
    )
}

export default QrGenerator