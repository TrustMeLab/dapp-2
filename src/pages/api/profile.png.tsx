/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { Nft } from '../../components/nft'

export const config = {
  runtime: 'edge',
}

export default function (req: NextRequest) {
  const { searchParams } = new URL(req.url)

  // ?handle=<handle>
  const hasHandle = searchParams.has('handle')
  const handle = hasHandle ? searchParams.get('handle')?.slice(0, 20) : 'TalentLayer'

  return new ImageResponse(<Nft handle={handle || ''} fontSize={80} />, {
    width: 1000,
    height: 500,
  })
}
