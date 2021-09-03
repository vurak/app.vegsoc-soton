import { VSLogo2 } from "../../assets";

const Layout = () => {
  return (
    <div className="bg-green-400 w-full h-screen">
      <div className="bg-gray-800 font-roboto absolute w-full flex content-center text-center text-white text-lg z-30">
        <img src={VSLogo2} alt="sdasdas" title="Test" className="h-20 m-1"/>
        <div className="flex p-3">
          <button>Home</button>
        </div>
        <div className="flex p-3">
          <button>Library</button>
        </div>
        <div className="flex p-3">
          <button>Test</button>
        </div>
        <div className="flex p-3">
          <button>Test</button>
        </div>
        <div className="flex p-3">
          <button>Test</button>
        </div>
      </div>
    </div>
  )
}


export default Layout;