import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Toast from './Components/Toast/Toast';

function App() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')

  // Dynamic submit button 

  // const handleSubmitButton = () => {
  //   setLoading(true);
  //   alert('button clicked');
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  //   alert(`Email is ${email}`)
  // }
  // const handleCancelButton = () => {
  //   alert('canceled')
  // }


  //  Dynamic Input 

  const handleSubmitButton = () => {
    alert(`Email is ${email}`)
  }
  const handleCancelButton = () => {
    setEmail('')
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : "invalid Email address")
  }
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Reusable Toast Component in React 

  const [toast, setToast] = useState(null);
  const showToast = (message, type) => {
    setToast({ message, type })
  }
  const removeToast = () => {
    setToast(null)
  }

  return (
    <>
      <div className="App">
        <h1> React Components</h1>

        {/* Dynamic Button Component */}
        <h1>Dynamic Button Component</h1>
        <div className="buttonFlex">
          <Button
            label='submit'
            variant='primary'
            onClick={handleSubmitButton}
            loading={loading}
          />
          <Button
            label="cancel"
            variant="secondary"
            onClick={handleCancelButton}
          />
        </div>
        {/*End:  Dynamic Button Component */}


        {/* Custom Reusable Input Component */}
        <h1>Custom Reusable Input Component</h1>
        <div className='inputFlex'>
          <Input
            type='email'
            placeholder="Enter Your email"
            value={email}
            onChange={handleEmailChange}
            errorMessage={emailError}
            customStyles={{ width: "300px" }}
          />
        </div>
        {/*end Custom Reusable Input Component */}

        {/* Reusable Toast Component in React */}
        <h1>Reusable Toast Component in React</h1>
        <div>
          <div className="buttonFlex">
            <Button label='info'
            variant="primary"
            onClick={()=>showToast("info toast",'info')}
            />
            <Button 
            label="error"
            variant="secondary"
            onClick={()=>showToast("error toast","error")}
            />
          </div>
          {
            toast && (
              <Toast  
              message={toast.message}
              type={toast.type}
              duration={3000}
              onClose={removeToast}
              />
            )
          }
        </div>

      </div>
    </>
  );
}

export default App;
