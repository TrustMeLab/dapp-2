import { Nft } from '../nft'
import { WalletStatus } from '../wallet/wallet-status'

export function ConnectSection() {
  return (
    <section id="connect" className="container py-8">
      <div className="flex flew-wrap ">
        <div className="w-full lg:w-1/2 px-4">
          <div className="mb-14 lg:mb-0 max-w-[470px]">
            <div className="mt-10">
              <h1 className="font-semibold text-black  text-4xl md:text-[45px] leading-tight md:leading-tight mb-8">
                <p className="font-bold">Mint Your TalentLayer ID</p>
              </h1>
              <h3 className="mb-4 text-xl font-bold text-black">
                Please
                <span className="font-bold text-primary"> connect your wallet</span> to Polygon
              </h3>
              <WalletStatus />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 max-md:hidden">
          <div className="text-center relative z-10 h-[532px]">
            <Nft handle={'yourHandle'} fontSize={40} />
          </div>
        </div>
      </div>
    </section>
  )
}
