import { Loading } from './form/loading'
import { ReadySection } from './home/ready-section'
import { useTalentLayerUserByHandle } from './modules/talentlayer/hooks/use-talent-user-by-handle'
import { Nft } from './nft'

export function ProfileCard({ handle }: { handle: string }) {
  const { talentLayerUser } = useTalentLayerUserByHandle(handle)

  if (talentLayerUser === undefined) {
    return <Loading />
  }

  if (talentLayerUser === null) {
    return (
      <section id="register" className="container py-8 flex items-center justify-center">
        <div className="w-full lg:w-1/2 px-4">
          <p className="px-16 text-center text-gray-400">
            {handle} is not yet minted on TalentLayer,{' '}
            <a href="https://claim.talentlayer.org/">mint it now!</a>
          </p>
        </div>
      </section>
    )
  }

  const urlToShare = encodeURI(`${process.env.NEXT_PUBLIC_HOST}/profile/${handle}`)

  return (
    <>
      <section id="register" className="container py-8 flex items-center justify-center">
        <div className="w-full lg:w-1/2 px-4">
          <p className="px-16 text-center text-gray-400">
            The handle {handle}.tl is minted on TalentLayer!
          </p>

          <div className="mt-5 flex items-center justify-center px-14">
            <a
              target={'_blank'}
              rel="noreferrer"
              href={`https://twitter.com/intent/tweet?url=${urlToShare}&text=Just minted my handle on @talentlayer!`}
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 mr-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Share it!
            </a>

            <a
              href="https://talentlayer.org/"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Discover TalentLayer
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 max-md:hidden">
          <div className="text-center relative z-10 h-[532px]">
            <Nft handle={handle} fontSize={40} />
          </div>
        </div>
      </section>

      <ReadySection />
    </>
  )
}
