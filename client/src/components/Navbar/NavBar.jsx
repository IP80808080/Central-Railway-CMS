import E2 from "../../assets/Emblem.png";
import E1 from "../../assets/IRLogo.png";
// import E3 from "../assets/E3.png";
export default function Navbar() {
  return (
    <header className="bg-white py-4 px-4 lg:px-6 flex justify-between items-center  sm:flex-no-wrap">
      <div className="flex items-center mb-4 sm:mb-0 space-x-reverse-1">
        <img src={E1} alt="IR Logo" className="w-12 h-12 mr-2" />
        <div>
          <p className="font-bold text-blue-600 text-xs">रेल मंत्रालय</p>
          <p className="text-blue-600 text-xs">MINISTRY OF</p>
          <p className="font-bold text-blue-600 text-xs">RAILWAYS</p>
          <p className="font-bold text-blue-600 text-xs">GOVERNMENT OF INDIA</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-4 xs:mb-0">
        <img src={E2} alt="Emblem Logo" className="h-12 w-12" />
        <p className="font-bold text-yellow-700 text-xs text-center">
          सत्यमेव जयते
        </p>
      </div>

      <div className="text-right lg:text-left">
        <p className="font-bold text-red-600 text-xs">Office of the</p>
        <p className="font-bold text-red-600 text-xs">
          Sr. Divisional Electrical Engineer
        </p>
        <p className="font-bold text-red-600 text-xs">Traction Rolling Stock</p>
        <p className="font-bold text-red-600 text-xs">
          Electric Loco Shed, Bhusawal
        </p>
      </div>
    </header>
  );
}
