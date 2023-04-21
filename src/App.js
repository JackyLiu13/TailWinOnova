import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='TailWin'>
<nav class="flex justify-between px-20 py-10 items-center bg-white">
    <h1 class="text-3xl text-gray-800 font-bold">TailWin🏆</h1>
    <div class="flex items-center">      
        <ul class="flex items-center space-x-6">
            <li>
            <a class="inline-block border-2 border-black text-black font-semibold hover:bg-black hover:text-white hover:border-2 hover:border-white py-2 px-4 rounded-md w-full" href="https://jackyliu13.github.io/JackyLiu/">Personal Website</a>
            </li>
          </ul>
          
    </div>
  </nav>
  <section class="main flex flex-col items-center h-screen justify-center bg-slate-800">
        <div class="flex justify-center">
          <img src="https://media.discordapp.net/attachments/911059290624782377/1098719790832558161/icon.png?width=662&height=662" class="w-1/2" alt="Your image"></img>
        </div>
        <div class="text-white">
        <div class="text-left mt-4">
          <h1 class="text-4xl font-bold">Welcome Onova!</h1>
          <h2 class="text-lg">This is my first time using TailWind 👋</h2>
        </div>
        <div class="flex justify-center mt-4 text-black">
              <div class="relative">
                <div class="absolute inset-0 bg-onovaTeal rounded-lg z-0"></div>
                <a href="https://liubaysee.notion.site/Onova-Interview-Jacky-941bc4aaafaf436687720692c11ac168" target="_blank" rel="noopener noreferrer">

                <button class="bg-white border-2 font-semibold border-black shadow-md hover:shadow-none transform transition-all duration-300 ease-in-out inline-block px-4 py-2 relative -top-2 -left-2 hover:-top-0 hover:-left-0 rounded-lg z-10">
                  CHECK OUT MY NOTION
                </button>
                </a>
              </div>
              
              
              
                      
          </div>
        </div>
      </section>
      <footer class="text-center">
      <p> <a class="font-semibold">Created by Jacky 🦍</a><br></br>Have questions? Email me at: <a href="mailto:jackyliu1015@gmail.com" class="text-blue-500">jackyliu1015@gmail.com</a><br></br></p>
      </footer>
    </div>
  );
}

export default App;
