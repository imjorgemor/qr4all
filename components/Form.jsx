import React from 'react';
import { Text } from '@nextui-org/react';

const Form = ({ userInput, setuserInput }) => {
    return (
        <div>
            <Text h2 size={40}>lets roll</Text>

            <form>
                <div>
                    <input
                        type="text"
                        value={userInput}
                        onChange={e => setuserInput(e.target.value)}
                        placeholder="Enter your text"
                    />
                </div>
            </form>
        </div>
    )
};

export default Form;
