export function PricingSection() {
  return (
    <section id="work" className=" container py-8">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-8  rounded-[20px] bg-white p-10 drop-shadow-2xl sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 ">
            <div className="mb-5 flex items-center">
              <h3 className="text-xl font-bold text-black ">
                ℹ️ How much do<span className="font-bold text-primary"> TalentLayer IDs</span> cost?
              </h3>
            </div>

            <div className="flex flex-wrap">
              <div className="grid place-items-center md:w-1/2">
                <table className="w-full text-center text-sm text-gray-500 ">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 ">
                    <tr className="border-b bg-white">
                      <th className="px-6 py-3">Characters</th>
                      <th className="px-6 py-3">Price (Matic)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white">
                      <td className="px-6 py-4">5+</td>
                      <td className="px-6 py-4">1</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-6 py-4">4</td>
                      <td className="px-6 py-4">25</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">50</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">100</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="pt-8 text-base text-gray-400 md:w-1/2 md:pl-16">
                Standard TalentLayer IDs are between 5 and 20 characters long - they are available
                for minting for 1 MATIC.
                <br />
                <br />
                Specialty TalentLayer IDs are between 1 and 4 characters long - these are available
                for purchase at the price rates below. Proceeds from TalentLayer ID sales go to fund
                TalentLayer’s open-source development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-8  rounded-[20px] bg-white p-10 drop-shadow-2xl sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 ">
            <div className="mb-5 flex items-center">
              <h3 className="text-xl font-bold text-black ">
                ℹ️ Can I trade<span className="font-bold text-primary"> TalentLayer IDs</span>?
              </h3>
            </div>

            <p className="text-base text-gray-400">
              TalentLayer ID’s are Activity Bound NFTs - they are transferable until they are used
              to make any activity on TalentLayer. Activities include creating a job post,
              submitting a proposal, and other actions. Once a TalentLayer ID becomes active, they
              become soul-bound and can not be transferred.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
