import { FaGithub } from "react-icons/fa"
import { Text } from "@nextui-org/react"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <Text size="1.25rem" weight={'bold'} >For educational purposes</Text>
            </div>
            <div>
                <a href="https://github.com/imjorgemor/qr4all" target="_blank">
                    <FaGithub className="github" />

                </a>
            </div>
        </footer>
    )
}

export default Footer