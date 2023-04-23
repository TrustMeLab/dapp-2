import Image from 'next/image'

export function ReputationSection() {
  return (
    <section id="reputation" className="container py-8">
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 max-md:hidden lg:w-1/3">
          <div className="mb-14 text-center lg:mb-0">
            <Image
              src="/images/about/about-image-3.svg"
              alt="image"
              className="max-full"
              width={400}
              height={365}
            />
          </div>
        </div>
        <div className="w-full px-8 lg:order-first lg:w-2/3">
          <div>
            <span className="mb-2 block text-base font-bold text-primary">
              The Open Network Layer for Work
            </span>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-black sm:text-4xl">
              ⭐ One Reputation That Follows You
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-400 lg:mb-4">
              Your work history and reviews are stored on-chain at the network level. When you grow
              your reputation, it&apos;s visible to hirers across integrated platforms. Your
              reputation is owned by you, forever - backed by the blockchain.
            </p>
            <p className="text-lg leading-relaxed text-gray-400  lg:mb-4">
              <strong className="text-black">What is a TalentLayer ID?</strong>
              <br />
              TalentLayer IDs are soul-bound NFTs that represent your on-chain work history. Every
              ID has a unique handle and is searchable on platforms in the network. As you complete
              jobs, reviews that are left for you by hirers are associated with your handle.
              TalentLayer IDs don&apos;t live in a silo - they&apos;re designed to be composable
              with any other forms of identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
