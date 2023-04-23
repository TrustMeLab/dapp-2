import Image from 'next/image'

export function Banner() {
  return (
    <section id="banner" className="container py-8">
      <div className="w-full px-6 drop-shadow-2xl">
        <div className="relative rounded-lg bg-primary drop-shadow-2xl container mx-auto flex flex-col items-center pt-6 sm:pt-12 pb-24 sm:pb-32 md:pb-48">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <span className="font-bold text-base text-white text-center block mb-5">
              Meet TalentLayer
            </span>
            <h2 className="text-2xl sm:text-3xl mb-10 md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
              Access A Growing Network of Work Marketplaces
            </h2>
            <p className="text-lg leading-relaxed text-center text-white mb-8 lg:mb-4">
              TalentLayer enables you to access many platforms with one unified and user-owned
              reputation. Reserve your ID today to be the first to access jobs and find new hires on
              the network.
            </p>
          </div>
          <div className="flex justify-center items-center mb-10 sm:mb-20">
            <a
              href="#mint"
              className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm"
            >
              Mint Your ID
            </a>
            <a
              href="#work"
              className="hover:text-white hover:bg-transparent lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
          <div className="relative sm:w-2/3 w-11/12">
            <Image src="/images/about/banner.webp" alt="banner websites" width="707" height="363" />
          </div>
        </div>
      </div>
    </section>
  )
}
