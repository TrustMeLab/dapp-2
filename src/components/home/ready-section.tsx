export function ReadySection() {
  return (
    <section id="ready" className="container py-8">
      <div className=" md:rounded-[20px] py-8 px-4 md:px-8 sm:px-10 relative">
        <div className="max-w-[650px] mx-auto md:text-center mb-[70px]">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-black mb-5">
            Ready to Get Started?
          </h2>
          <p>Mint your TalentLayer ID handle and join the open work network!</p>
          <div className="w-full space-y-4 px-4 mt-8">
            <div className="text-center space-y-4">
              <a
                href="https://claim.talentlayer.org/#mint"
                className="font-bold text-base text-white bg-primary rounded-xl py-3 px-10 text-center hover:shadow-primary-hover "
              >
                Mint Your Handle
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
