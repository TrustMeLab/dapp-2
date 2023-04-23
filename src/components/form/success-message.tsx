import Image from 'next/image'
import successPicture from '../../../public/images/success_1.gif'
import successPicture2 from '../../../public/images/success_2.jpg'
import { motion } from 'framer-motion'
import { useTalentLayerIdContractParams } from '../../hooks/use-contract-params'
import Link from 'next/link'

export function SuccessMessage({ handle, id }: { handle: string; id: string }) {
  const { address } = useTalentLayerIdContractParams()
  const urlToShare = encodeURI(`${process.env.NEXT_PUBLIC_HOST}/profile/${handle}`)

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="">
        <div className="md:flex">
          <div className="w-full p-3 text-center">
            <h1 className="mb-8 text-4xl  font-semibold leading-tight text-black md:text-[45px] md:leading-tight">
              <p className="font-bold">Congrats {handle}!</p>
            </h1>

            <div className="flex justify-center">
              {parseInt(id) % 6 == 0 ? (
                <Image src={successPicture2} width={300} height={200} alt="success" />
              ) : (
                <Image src={successPicture} width={200} height={200} alt="success" />
              )}
            </div>

            <p className="md:px-16 text-center text-gray-400 pt-4">
              You are now part of a network of passionate workers, hirers, and platforms! <br />
              LFG 🚀
            </p>

            <a
              rel="noreferrer"
              target={'_blank'}
              href={`https://opensea.io/assets/matic/${address}/${id}`}
              className="block underline mt-4"
            >
              Check on Opensea
            </a>

            <div className="mt-8 flex items-center justify-center ">
              <a
                rel="noreferrer"
                target={'_blank'}
                href={`https://twitter.com/intent/tweet?url=${urlToShare}&text=Just minted my handle on @talentlayer!`}
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 mr-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Share on Twitter
              </a>

              <Link
                href="/profile/edit"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 mr-2 text-base font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Complete your profile
              </Link>

              <a
                rel="noreferrer"
                target={'_blank'}
                href={`https://www.workx.io/register#user`}
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 mr-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Visit the first marketplace
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
