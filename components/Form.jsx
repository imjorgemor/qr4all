import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types'

const Form = ({ userInput, setuserInput}) => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleReset = () => {
        setuserInput("")
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input
                        className='input-form'
                        type="text"
                        value={userInput}
                        onChange={e => setuserInput(e.target.value)}
                        placeholder="Enter your link, text here"
                    />
                </div>

            </form>
            {userInput &&
                <Button size="lg" shadow color="secondary" auto onClick={handleReset}
                    css={{ marginLeft: "50%", marginTop:"1rem", fontWeight: "600" }}
                >Reset QR Code</Button>
            }
        </div>
    )
};

export default Form;

Form.propTypes = {
    userInput: PropTypes.string,
    setuserInput: PropTypes.func
}