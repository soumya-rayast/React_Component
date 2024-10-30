import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Toast from './Components/Toast/Toast';
import Dropdown from './Components/DropDown/Dropdown';
import Tab from './Components/Tab/Tab';

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

  //  Custom Searchable Dropdown in React with Click-Outside Feature
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['react', 'nextjs', 'css']


  // - **Build a Reusable Fully Dynamic tabs Component**

  const tabsData = [
    {
      label: "Home",
      content: <p>This is home tab content</p>,
      icon: "ho"
    },
    {
      label: "Profile",
      content: <p>This is profile tab content</p>,
      icon: "pro"
    },
    {
      label: "About",
      content: <p>This is about tab content</p>,
      icon: "ab"
    }
  ]
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
              onClick={() => showToast("info toast", 'info')}
            />
            <Button
              label="error"
              variant="secondary"
              onClick={() => showToast("error toast", "error")}
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

        {/* Custom Searchable Dropdown in React with Click-Outside Feature */}
        <h1>Custom Searchable Dropdown in React with Click-Outside Feature</h1>
        <div >
          <Dropdown
            options={options}
            selected={selectedOption}
            onChange={setSelectedOption}
            placeholder='Choose framework'
          />
          {selectedOption && <p>You Selected:{selectedOption}</p>}
        </div>

        {/* - **Build a Reusable Fully Dynamic tabs Component** */}
        <h1>- **Build a Reusable Fully Dynamic tabs Component**</h1>
        <div>
          <Tab
            tabs={tabsData}
            defaultActiveIndex={0}
            onTabChange={(index) => console.log(`Active tab index ${index}`)}
            customStyles={{
              activeTab: { backgroundColor: "green", color: 'white' },
              header: { borderBottom: '2px solid black' }
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
