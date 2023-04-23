import Image from 'next/image'

export function WorkSection() {
  return (
    <section id="work" className=" container py-8">
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 max-md:hidden lg:w-1/3">
          <div className="mb-14 text-center lg:mb-0">
            <Image
              src="/images/about/about-image-1.svg"
              alt="image"
              className="max-full"
              width={400}
              height={365}
            />
          </div>
        </div>
        <div className="w-full px-8 lg:w-2/3">
          <div className="lg:ml-auto">
            <span className="mb-2 block text-base font-bold text-primary">Meet TalentLayer</span>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-black sm:text-4xl">
              🌎 How The Future of Work Works
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-400 ">
              TalentLayer is a low-level reputation, data, and transaction layer backing the work
              platforms of the future. TalentLayer&apos;s network and developer toolkit are enabling
              work marketplaces to go to market faster than ever and serve a shared network of
              users.
            </p>
            <div className="mb-12 text-lg leading-relaxed text-gray-400 ">
              <p>🌐 open access</p>
              <p>👨🏾 own your data</p>
              <p>⭐ control your reputation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
