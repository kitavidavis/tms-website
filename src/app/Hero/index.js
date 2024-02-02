export default function Hero(){
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video className="min-w-full min-h-full absolute object-cover" src="./bg.mp4" type="video/mp4" autoPlay muted loop></video>
        </div>
        <div className="video-content space-y-2">
            <h1 className="font-extrabold text-7xl pb-8 text-white">
              The Next Big Thing In The Real Estate Industry
            </h1>
    
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a
                  href="https://tenancymanagementsystem.vercel.app"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white rounded-full border border-blue-600 hover:border-blue-900 hover:bg-blue-900 focus:ring-4 focus:ring-gray-400 bg-blue-600"
                >
                  Get Started Now
            </a>
              </div>
        </div>
    </section>
    )
}