import Image from 'next/image'

export function LensSection() {
  return (
    <section id="lens" className="container md:py-8">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-8  rounded-[20px] bg-white p-10 drop-shadow-2xl sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 ">
            <div className="mb-6 flex items-center">
              <Image
                className="w-40"
                src="/images/logo/lens.webp"
                alt="logo"
                width={160}
                height={58}
              />
            </div>
            <div className="mb-5 flex items-center">
              <h3 className="text-xl font-bold text-black ">
                Claim Your
                <span className="font-bold text-primary"> Lens Handle </span> on TalentLayer
              </h3>
            </div>

            <p className="text-base text-gray-400">
              Have a Lens handle? You re in luck! We’ve reserved your handle on TalentLayer. Mint
              your handle with your whitelisted wallet before TalentLayer minting to everyone ( your
              handle will be mintable by others)!
            </p>
            <div className="mt-8 w-full space-y-4 px-4">
              <div className="space-y-4 text-center">
                <a
                  href="https://claim.talentlayer.org/#mint"
                  className="hover:shadow-primary-hover rounded-xl bg-primary py-3 px-10 text-center text-base font-bold text-white"
                >
                  Mint now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
