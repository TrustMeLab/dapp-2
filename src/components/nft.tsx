export function Nft({ handle, fontSize }: { handle: string; fontSize: number }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        display: 'flex',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        version="1.2"
        viewBox="-200 -50 1000 1000"
        style={{ marginLeft: 25, marginTop: 25 }}
      >
        <path
          fill="#FFFFFF"
          d="M264.5 190.5c0-13.8 11.2-25 25-25H568c13.8 0 25 11.2 25 25v490c0 13.8-11.2 25-25 25H289.5c-13.8 0-25-11.2-25-25z"
        />
        <path
          fill="#FFFFFF"
          d="M265 624c0-13.8 11.2-25 25-25h543c13.8 0 25 11.2 25 25v56.5c0 13.8-11.2 25-25 25H290c-13.8 0-25-11.2-25-25z"
        />
        <path
          fill="#FFFFFF"
          d="M0 190.5c0-13.8 11.2-25 25-25h543c13.8 0 25 11.2 25 25V247c0 13.8-11.2 25-25 25H25c-13.8 0-25-11.2-25-25z"
        />
      </svg>
      <p
        style={{
          fontSize: fontSize ?? 80,
          color: '#FFFFFF',
          position: 'absolute',
          bottom: 50,
          left: 50,
          marginBottom: 0,
        }}
      >
        {handle}.tl
      </p>
    </div>
  )
}
