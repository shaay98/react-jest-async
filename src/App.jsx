import './App.css'
import { weather } from './api.jsx';

function App() {

  const apiKey = 'a926813f6b23cbc20194c8cdf982f553';
  const city = 'Hammond';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  return (
    <>
    <weather/>
    </>
  )
}
export default App
