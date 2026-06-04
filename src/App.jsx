import { CloudRain } from "lucide-react";
// FUNCTION FETCH BUAT MENDAPATKAN DATA WEATHER / CUACA
import axios from "axios";
// useEffect() => FUNCTION REACT AGAR MENJALANKAN KODE KETIKA VARIABLE [x] BERUBAH
// useState() => MENYIMPAN VALUE, [0] = value, [1] = setValue
import { useRef, useState, useEffect } from "react";

// API KEY
const API_KEY = "1527f1571ad64813a8974211260306";

function App() {
  // VARIABEL NAMA KOTA
  const [city, setCity] = useState("new york");
  // MENYIMPAN DATA
  const [weatherData, setWeatherData] = useState(null);
  // MENGHINDARI LEBIH MENJALANKAN FUNGSI
  const isFetched = useRef(false);
  // VARIABEL INPUT UNTUK NAMA KOTA
  const [input, setInput] = useState(city);
  // VARIABEL ERROR
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // JIKA SUDAH DI-FECTH => JANGAN JALANIN LAGI
    if (isFetched.current) return;
    // FUNCTION MENDAPATKAN DATA
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`,
        );
        console.log(response.data);
        // SET VARIABEL weatherData KE response.data
        setWeatherData(response.data);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage(error.message);
        console.error(error.message);
      }
    };
    // UNTUK MENGHINDARI JALANNYA DUA KALI
    isFetched.current = true;
    // MENDAPATKAN DATA
    getData();
  }, [city]);

  return (
    <main
      className="w-full min-h-screen bg-no-repeat bg-cover bg-bottom flex"
      style={{ backgroundImage: "url(/rain.jpeg)" }}
    >
      <div className="flex flex-col items-center flex-1/2 text-white">
        <div className="flex flex-col flex-1/2 justify-center p-6 text-center gap-4">
          <div>
            <input
              className="px-8 py-4 backdrop-blur-xs rounded-2xl active:outline-none bg-white/20 text-white"
              placeholder="Cari nama kota...."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                isFetched.current = false;
                setCity(input);
              }}
            >
              Search
            </button>
          </div>
          <span className="text-red-600">
            {errorMessage && "Kota tidak ditemukan"}
          </span>
          <div className="flex flex-col">
            <p className="text-white text-8xl flex items-center justify-center">
              <span>{weatherData.current.temp_c}</span>
              <span className="text-base">°C</span>
            </p>
            <p className="text-white text-2xl">{weatherData.location.name}</p>
            <p className="text-white text-base">10:10</p>
          </div>

          {/* <div className="flex-1/3 backdrop-blur-xs backdrop-grayscale rounded-4xl flex flex-col gap-4 max-h-1/3 justify-center px-6 py-4">
            <p>Thunderstorms expected around 00:00</p>
            <div className="h-px w-full bg-white/25" />
            <div className="flex justify-between">
              <div className="flex flex-col items-center justify-center">
                <span>Now</span>
                <CloudRain />
                <p>
                  <span>23</span>
                  <span>°C</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>Now</span>
                <CloudRain />
                <p>
                  <span>23</span>
                  <span>°C</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>Now</span>
                <CloudRain />
                <p>
                  <span>23</span>
                  <span>°C</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>Now</span>
                <CloudRain />
                <p>
                  <span>23</span>
                  <span>°C</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>Now</span>
                <CloudRain />
                <p>
                  <span>23</span>
                  <span>°C</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>Now</span>
                <CloudRain />
                <p>
                  <span>23</span>
                  <span>°C</span>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default App;