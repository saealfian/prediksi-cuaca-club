import { CloudRain } from "lucide-react";

function App() {
  return (
    <main
      className="w-full min-h-screen bg-no-repeat bg-cover bg-bottom flex"
      style={{ backgroundImage: "url(/rain.jpeg)" }}
    >
      <div className="flex flex-col items-center flex-1/2 text-white">
        <div className="flex flex-col flex-1/2 justify-center p-6 text-center gap-4">
          <div>
            <input className="px-8 py-4 backdrop-blur-xs rounded-2xl active:outline-none bg-white/20 text-white" placeholder="Cari nama kota....">
            </input>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-8xl flex items-center justify-center">
              <span>23</span>
              <span className="text-base">°C</span>
            </p>
            <p className="text-white text-2xl">Jakarta Raya</p>
            <p className="text-white text-base">10:10</p>
          </div>

          <div className="flex-1/3 backdrop-blur-xs backdrop-grayscale rounded-4xl flex flex-col gap-4 max-h-1/3 justify-center px-6 py-4">
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
