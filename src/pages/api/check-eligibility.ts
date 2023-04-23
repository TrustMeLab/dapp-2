import type { NextApiRequest, NextApiResponse } from 'next'
import keccak256 from 'keccak256'
import MerkleTree from 'merkletreejs'
import whitelist from '../../merkle/whitelist.json'

export interface IProof {
  proof: Array<string>
  isValid: boolean
}

const merkleTree = new MerkleTree(whitelist, keccak256, { hashLeaves: true, sortPairs: true })

export default async function checkEligibility(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query
  const { handle, address } = query

  function getWhitelistProof(address: any, handle: any): IProof {
    const whitelistEntry = `${address.toLowerCase()};${handle}`
    const leaf = keccak256(whitelistEntry)
    const proof = merkleTree.getHexProof(leaf)
    const root = merkleTree.getHexRoot()
    const isValid = merkleTree.verify(proof, leaf, root)
    return { proof, isValid }
  }

  const { proof, isValid } = getWhitelistProof(address, handle)

  res.status(200).json({ isEligible: isValid, proof: proof, address: address, handle: handle })
}
