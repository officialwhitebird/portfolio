import { ImageResponse } from 'next/og'

const size = {
  width: 1200,
  height: 630,
}

export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '58px 64px',
          background: '#f2f0e8',
          color: '#171914',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            right: -80,
            top: 54,
            border: '2px solid rgba(23,25,20,.16)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 236,
              height: 236,
              border: '2px dashed rgba(23,25,20,.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 118,
                height: 118,
                borderRadius: '50%',
                background: '#171914',
                color: '#f2f0e8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 1.05,
                transform: 'rotate(-7deg)',
              }}
            >
              <span>HUMAN</span>
              <span>IN THE LOOP</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              border: '2px solid #171914',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            W
          </div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>officialwhitebird</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: 760 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 78,
              lineHeight: 0.94,
              letterSpacing: '-4px',
              fontWeight: 700,
            }}
          >
            <span>Useful systems,</span>
            <span>built with intent.</span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 34,
              fontSize: 17,
              letterSpacing: '2px',
              fontWeight: 600,
            }}
          >
            AUTOMATION · DECISION SUPPORT · AI ORCHESTRATION
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#5b8f34',
              boxShadow: '0 0 0 5px rgba(91,143,52,.14)',
            }}
          />
          <div style={{ fontSize: 15, letterSpacing: '2px' }}>
            INDEPENDENT BUILDER · JAPAN
          </div>
        </div>
      </div>
    ),
    size
  )
}
