import { useTheme as useNextTheme } from 'next-themes'
import { Switch, Text, Container, useTheme } from '@nextui-org/react'
import { Moon, Sun } from "../public/icons"


const Header = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();

    return (
        <header className='header'>
            <Container as="nav" display='flex' justify='space-between' css={{
                padding: '1rem 0',
                margin: '0',
                position: 'sticky',
            }}
            >
                <Text
                    size="2rem" weight="bold"
                >
                    QR4ALL
                </Text>

                <Switch
                    checked={isDark}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    iconOn={<Sun filled />}
                    iconOff={<Moon filled />}
                    size="xl"
                    shadow color="secondary"
                />
            </Container>
        </header>
    )
}

export default Header