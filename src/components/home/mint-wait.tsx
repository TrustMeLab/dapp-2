import { CountDown } from '../count-down'
import { Nft } from '../nft'

export function MintWait() {
  return (
    <section id="wait" className="container py-8">
      <div className="flex flew-wrap ">
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h1 className="font-semibold text-black  text-4xl md:text-[45px] leading-tight md:leading-tight mb-8 text-center">
              <p className="font-bold">Whitelist minting opening soon!</p>
            </h1>
            <p className="pb-10 text-center">
              TalentLayer ID whitelist minting opens on 4/4 at 4:04 pm UTC for wallets who
              participated in early claiming. <br />
              Didn&rsquo;t claim your TalentLayer ID in time? Open minting goes live on 4/14 at 4:14
              pm UTC. Get alerts by following us on Twitter.
            </p>
            <a
              target={'_blank'}
              className="font-bold text-base text-white bg-primary rounded-xl py-3 px-10 text-center hover:shadow-primary-hover"
              href="https://twitter.com/TalentLayer"
              rel="noreferrer"
            >
              Get Alerts
            </a>

            <CountDown targetDate={1680624244000} />
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
