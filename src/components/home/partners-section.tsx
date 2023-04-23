import Image from 'next/image'

export function PartnersSection() {
  return (
    <section id="partners" className="container py-8">
      <div className="relative py-8 px-4 sm:px-10 md:rounded-[20px] md:px-8">
        <div className="mx-auto mb-[70px] max-w-[650px] md:text-center">
          <h2 className="mb-5 text-3xl font-extrabold text-black sm:text-4xl">
            ❤️ A Fully Open-Source Protocol
          </h2>
          <p>
            Our open-source development is proudly funded by protocols & frens that belive the
            future of work is accessible, open, & uncensorable.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <a className="mx-3 flex max-w-[160px] items-center justify-center py-[15px] grayscale transition hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
            <Image src="/images/logo/lens.webp" alt="lens" width={118} height={48} />
          </a>
          <a className="mx-3 flex max-w-[160px] items-center justify-center py-[15px] grayscale transition hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
            <Image src="/images/logo/kleros.webp" alt="kleros" width={118} height={48} />
          </a>
          <a className="mx-3 flex max-w-[160px] items-center justify-center py-[15px] grayscale transition hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
            <Image src="/images/logo/filecoin.webp" alt="filecoin" width={118} height={48} />
          </a>
          <a className="mx-3 flex max-w-[160px] items-center justify-center py-[15px] grayscale transition hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
            <Image src="/images/logo/gitcoin.webp" alt="gitcoin" width={118} height={48} />
          </a>
          <a className="mx-3 flex max-w-[160px] items-center justify-center py-[15px] grayscale transition hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
            <Image
              src="/images/logo/pushprotocol.webp"
              alt="pushprotocol"
              width={118}
              height={48}
            />
          </a>
        </div>

        <div>
          <span className="-z-1 absolute bottom-0 left-14">
            <svg
              width="187"
              height="66"
              viewBox="0 0 187 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M122.036 4.65918C170.944 20.5767 197.688 73.1281 181.771 122.036C165.853 170.944 113.302 197.688 64.3938 181.771C15.4858 165.853 -11.2583 113.302 4.65918 64.3938C20.5767 15.4858 73.1281 -11.2583 122.036 4.65918Z"
                fill="url(#paint0_linear_94_97)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_94_97"
                  x1="4.65914"
                  y1="64.3937"
                  x2="138.999"
                  y2="108.116"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="-z-1 absolute top-0 right-14">
            <svg
              width="169"
              height="67"
              viewBox="0 0 169 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M62.8886 63.1548C18.3442 51.2191 -8.09041 5.433 3.84523 -39.1114C15.7809 -83.6558 61.567 -110.09 106.111 -98.1548C150.656 -86.2192 177.09 -40.4331 165.155 4.11136C153.219 48.6558 107.433 75.0904 62.8886 63.1548Z"
                fill="url(#paint0_linear_94_98)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_94_98"
                  x1="165.155"
                  y1="4.11136"
                  x2="42.8009"
                  y2="-28.6733"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}
