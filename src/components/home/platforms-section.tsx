import Image from 'next/image'

export function PlatformsSection() {
  return (
    <section id="platforms" className="container py-8">
      <div className="flex justify-center">
        <div className="w-full px-4">
          <div className="mx-auto mb-[70px] max-w-[650px] md:text-center">
            <h2 className="mb-5 text-3xl font-extrabold text-black  sm:text-4xl">
              👩🏽 One Profile, Many Platforms
            </h2>
            <p className="text-base font-semibold text-gray-400">
              When you create your TalentLayer ID, your profile is automatically indexed and
              searchable on any work platform in the network - that means more work comes to you
              when you need it. Entrepreneurs from around the world are building platforms on
              TalentLayer; here are some of the first ones to go live.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 px-4">
          <div className="bg-white  p-10 sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 rounded-[20px] drop-shadow-2xl mb-8">
            <div className="flex items-center mb-6">
              <Image
                className="w-40"
                src="/images/logo/workx.webp"
                alt="logo"
                width={160}
                height={63}
              />
            </div>
            <div className="mb-5 flex items-center">
              <h3 className="text-xl font-bold text-black ">
                The
                <span className="font-bold text-primary"> Internet of Jobs </span>
              </h3>
            </div>
            <div className="mb-8 flex items-center">
              <div className="flex items-center">
                <Image
                  src="/images/award/person-1.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="h-[38px] w-[38px] rounded-full border-2 border-white"
                />
                <Image
                  src="/images/award/person-2.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="-ml-3 h-[38px] w-[38px] rounded-full border-2 border-white"
                />
                <Image
                  src="/images/award/person-3.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="-ml-3 h-[38px] w-[38px] rounded-full border-2 border-white"
                />
              </div>
            </div>

            <p className="text-base text-gray-400 mb-9">
              Work X is a 0-marginal-cost decentralized platform economy, designed to match
              job-seekers and freelancer with their perfect employer. Work X is powered by a utility
              token & governed by a DAO.
            </p>
            <a
              className="font-bold text-base text-white bg-primary rounded-xl py-3 px-10 text-center hover:shadow-primary-hover"
              href="https://workpi.com/workx"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 xl:w-1/3">
          <div className="mb-8  rounded-[20px] bg-white p-10 drop-shadow-2xl sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12">
            <div className="mb-6 flex items-center">
              <Image
                className="w-40"
                src="/images/logo/workpod.webp"
                alt="logo"
                width={160}
                height={63}
              />
            </div>

            <div className="flex items-center mb-5">
              <h3 className="font-bold text-xl text-black ">
                The
                <span className="font-bold text-primary"> Code Auditing </span> Marketplace
              </h3>
            </div>
            <div className="mb-8 flex items-center">
              <div className="flex items-center">
                <Image
                  src="/images/award/person-7.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="h-[38px] w-[38px] rounded-full border-2 border-white"
                />
                <Image
                  src="/images/award/person-8.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="-ml-3 h-[38px] w-[38px] rounded-full border-2 border-white"
                />
                <Image
                  src="/images/award/person-9.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="-ml-3 h-[38px] w-[38px] rounded-full border-2 border-white"
                />
              </div>
            </div>

            <p className="text-base text-gray-400 mb-9">
              The freelance and bounty marketplace for smart contract and code auditors. Import your
              reputation from CodeArena and other platforms.
            </p>

            <a
              className="font-bold text-base text-white bg-primary rounded-xl py-3 px-10 text-center hover:shadow-primary-hover"
              href="https://www.workpodapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 px-4">
          <div className="bg-white  p-10 sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 rounded-[20px] drop-shadow-2xl mb-8">
            <div className="flex items-center mb-6">
              <Image
                className="w-40"
                src="/images/logo/dex.webp"
                alt="logo"
                width={160}
                height={63}
              />
            </div>
            <div className="flex items-center mb-5">
              <h3 className="font-bold text-xl text-black ">
                The
                <span className="font-bold text-primary"> Decentralized Work Exchange </span>
              </h3>
            </div>
            <div className="flex items-center mb-8">
              <div className="flex items-center">
                <Image
                  src="/images/award/person-1.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="w-[38px] h-[38px] border-2 border-white rounded-full"
                />
                <Image
                  src="/images/award/person-2.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="w-[38px] h-[38px] border-2 border-white rounded-full -ml-3"
                />
                <Image
                  src="/images/award/person-3.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="w-[38px] h-[38px] border-2 border-white rounded-full -ml-3"
                />
              </div>
            </div>

            <p className="text-base text-gray-400 mb-9">
              The trading platform for web 3 workers and hirers to exchange gigs. <br></br>Every job
              completed sends DEX fees to charities.
            </p>
            <a
              className="font-bold text-base text-white bg-primary rounded-xl py-3 px-10 text-center hover:shadow-primary-hover"
              href="https://www.freelancerdex.com/"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 px-4">
          <div className="bg-white  p-10 sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 rounded-[20px] drop-shadow-2xl mb-8">
            <div className="flex items-center mb-6">
              <Image
                className="w-40"
                src="/images/logo/delance.webp"
                alt="logo"
                width={160}
                height={63}
              />
            </div>
            <div className="flex items-center mb-5">
              <h3 className="font-bold text-xl text-black ">
                The
                <span className="font-bold text-primary"> Community-Owned </span> Work Platform
              </h3>
            </div>
            <div className="mb-8 flex items-center">
              <div className="flex items-center">
                <Image
                  src="/images/award/person-4.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="h-[38px] w-[38px] rounded-full border-2 border-white"
                />
                <Image
                  src="/images/award/person-5.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="-ml-3 h-[38px] w-[38px] rounded-full border-2 border-white"
                />
                <Image
                  src="/images/award/person-6.png"
                  width={38}
                  height={38}
                  alt="image"
                  className="-ml-3 h-[38px] w-[38px] rounded-full border-2 border-white"
                />
              </div>
            </div>

            <p className="text-base text-gray-400 mb-9">
              A community-owned freelance platform for design and engineering professionals, powered
              by the DeLa token.
            </p>

            <a
              className="font-bold text-base text-white bg-primary rounded-xl py-3 px-10 text-center hover:shadow-primary-hover"
              href="http://delance.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
