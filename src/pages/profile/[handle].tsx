import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { ProfileCard } from '../../components/profile-card'
import { NextSeo } from 'next-seo'

// Here we need getServerSideProps else seo information are not available on first answer which lead to issue with sharing
// @ts-ignore
export const getServerSideProps: GetServerSideProps<{ handle: string }> = async (context) => {
  const { handle } = context.query
  return { props: { handle } }
}

// @ts-ignore
const Profile: NextPage = ({ handle }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/profile/${handle}`

  return (
    <>
      <NextSeo
        title={`TalentLayer Handle ${handle} registered!`}
        description="Your new unique profile on TalentLayer"
        canonical={url}
        openGraph={{
          url,
          images: [
            {
              url: `http://talentlayer.org/assets/images/preview.png`,
              width: 900,
              height: 520,
              alt: 'TalentLayer',
              type: 'image/png',
            },
          ],
        }}
      />
      <ProfileCard handle={handle as string} />
    </>
  )
}

export default Profile
