import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const title =
      searchParams.get('title')?.slice(0, 100) ??
      'I create beautiful websites that make the internet look great!';

    const route = searchParams.get('route') ?? '';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <svg
            width="75"
            viewBox="0 0 75 65"
            fill="#000"
            style={{ margin: '0 75px' }}
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </svg>
          <div style={{ marginTop: 40, marginBottom: 10 }}>{title}</div>
          <div style={{ fontSize: 18, marginBottom: 10 }}>Philip Laxamana</div>
          <div style={{ fontSize: 16 }}>{route}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
