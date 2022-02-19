import { Input } from '@nextui-org/react';

const Form = ({ userInput, setuserInput }) => {
   return (
      <div className='form'>
         <form>
            <div>
               <input
                  className='input-form'
                  type="text"
                  value={userInput}
                  onChange={e => setuserInput(e.target.value)}
                  placeholder="Enter your text here"
               />
            </div>
         </form>
      </div>
   )
};

export default Form;
