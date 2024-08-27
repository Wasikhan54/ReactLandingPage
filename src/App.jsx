import './App.css'
import './components/Button'
import Button from './components/Button'
import landingPageData from './constant/langinpag'


function App() {
  return (
    <div>
      <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={landingPageData.header.logo} className='h-12 w-12 rounded-full'  />
        <span className="ml-3 text-xl">{landingPageData.header.title  }</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-space-around">
        <a className="mr-5 hover:text-gray-900">Home</a>
        <a className="mr-5 hover:text-gray-900">About us</a>
        <a className="mr-5 hover:text-gray-900">Contact</a>
        <a className="mr-5 hover:text-gray-900">Servics</a>
      </nav>
      <Button bgcolor="bg-white-400" b lable='Login'/>
    </div>
  </header>
  
 </div>
  )
}

export default App
