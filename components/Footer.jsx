import {FaGithub} from "react-icons/fa"
import { Text } from "@nextui-org/react"

const Footer = () => {
  return (
    <footer className="footer">
        <div>
            <Text size="1.25rem" weight={'bold'} >For educational purposes</Text>
        </div>
        <div>
            <FaGithub className="github"/>
        </div>

    </footer>
  )
}

export default Footer