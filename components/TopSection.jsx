import { Text} from '@nextui-org/react'

const TopSection = () => {
    return (
        <section>
            <Text
                h1
                size={70}
                css={{
                    textGradient: '45deg, $blue500 -20%, $pink500 50%',
                    lineHeight: "4.5rem"
                }}
                weight="bold"
            >Ultimate QR Code
            </Text>

            <Text
                h1
                size={70}
                css={{
                    textGradient: '45deg, $purple500 -20%, $pink500 100%',
                    lineHeight: "4.5rem"
                }}
                weight="bold"
            >
                Generator
            </Text>

            <div className='main-caption'>
                <Text h3 size={50} css={{
                    lineHeight: "3.5rem"
                }}>No ads, no spam, no login
                </Text>
                <Text h3 size={50} css={{
                    lineHeight: "3.5rem"
                }}>get your QR for life</Text>
            </div>
        </section>
    )
}

export default TopSection