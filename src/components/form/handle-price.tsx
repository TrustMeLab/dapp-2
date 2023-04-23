import Image from 'next/image'
import maticIcon from '../../../public/images/matic.png'

export function HandlePrice({ handle }: { handle: string }) {
  const length = handle.length
  const price = length > 4 ? 1 : 200 / Math.pow(2, handle.length - 1)
  return (
    <div className="absolute top-[50px] right-2 flex border-l border-gray-300 pl-2 text-sm text-gray-500">
      {price} MATIC
      <Image src={maticIcon} width={20} height={20} alt="MATIC" className="mx-1" />
    </div>
  )
}
