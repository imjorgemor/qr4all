import { useState } from 'react'
import Form from "./Form"
import QrCodeImage from "./QrCodeImage"

const QrGenerator = () => {

   const [userInput, setuserInput] = useState("")

  return (
    <section>
       <Form
            userInput={userInput}
            setuserInput={setuserInput}
         />

         <QrCodeImage
            userInput={userInput}
            setuserInput={setuserInput}
         />
    </section>
  )
}

export default QrGenerator