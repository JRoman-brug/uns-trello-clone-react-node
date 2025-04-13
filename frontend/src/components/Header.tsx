import { FaBlogger } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <header className="bg-background-dark z-100 flex gap-8 px-6 py-3 items-center fixed top-0 left-0 right-0 border-b-2 border-[#414548] h-20">
      <FaBlogger
        className="text-appAccent size-12 cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={() => navigate('/')}
      />
      <button className="bg-[#b13b2e] rounded-[5px] px-[20px] py-[5px] cursor-pointer hover:bg-[#a83427] transition-all duration-200 ">
        <span className="text-white text-2xl leading-tight font-normal">Crear</span>
      </button>
    </header>
  )
}

export default Header
