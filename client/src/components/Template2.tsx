interface Template2Props {
  problemNumber: 1 | 2;
}

export function Template2({ problemNumber }: Template2Props) {
  // Problem 1: Principal 12000, Rate r%, Time 3 years, Amount 20736
  const problem1 = {
    principal: "12000",
    time: "3",
    amount: "20736",
    rate: "20%",
    numerator1: "216",
    denominator1: "125",
    cubeRoot1: "6",
    cubeRoot2: "5",
    fraction1: "1",
    fraction2: "5",
    amount2Years: "17280",
    description: "Amount of the same sum in 2 years at the same rate of compound interest"
  };

  // Problem 2: Principal 8000, Rate r%, Time 3 years, Amount 13824
  const problem2 = {
    principal: "8000",
    time: "3",
    amount: "13824",
    rate: "20%",
    numerator1: "216",
    denominator1: "125",
    cubeRoot1: "6",
    cubeRoot2: "5",
    fraction1: "1",
    fraction2: "5",
    amount2Years: "11520",
    description: "Amount of the same sum in 2 years at the same rate of compound interest"
  };

  const data = problemNumber === 1 ? problem1 : problem2;

  return (
    <div style={{ fontFamily: 'Calibri, sans-serif', fontSize: '27px', fontWeight: 'bold', background: '#fff' }}>
      <div
        style={{
          maxWidth: '1120px',
          margin: 'auto',
          display: 'flex',
          gap: '0px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          borderRadius: '12px',
          padding: '50px 86px',
          position: 'relative',
          background: 'white'
        }}
        data-testid="template2-container"
      >
        {/* Arrow Column */}
        <div style={{ width: '40px', position: 'relative', marginRight: '10px' }}>
          <div style={{ position: 'absolute', left: 0, top: '50px', fontSize: '30px', color: '#888' }}>➜</div>
          <div style={{ position: 'absolute', left: 0, top: '216px', fontSize: '30px', color: '#888' }}>➜</div>
          <div style={{ position: 'absolute', left: 0, top: '369px', fontSize: '30px', color: '#888' }}>➜</div>
          <div style={{ position: 'absolute', left: 0, top: '525px', fontSize: '30px', color: '#888' }}>➜</div>
          <div style={{ position: 'absolute', left: 0, top: '647px', fontSize: '30px', color: '#888' }}>➜</div>
        </div>

        {/* Left Column */}
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Step 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NumBox>{data.principal}</NumBox>
            <span>=</span>
            <Bracket>
              <BigBracket>[</BigBracket> 1 +
              <FractionBox top={<VarBox>r</VarBox>} bottom="100" />
              <BigBracket>]</BigBracket> <sup>3</sup>
            </Bracket>
            <span>=</span>
            <NumBox>{data.amount}</NumBox>
          </div>

          {/* Step 2 - Nested calculations */}
          <div style={{ position: 'relative', left: '130px', display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bracket>
                <BigBracket>[</BigBracket> 1 +
                <FractionBox top={<VarBox>r</VarBox>} bottom="100" />
                <BigBracket>]</BigBracket><sup>3</sup>
              </Bracket>
              <span>=</span>
              <FractionBox top={data.amount} bottom={data.principal} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bracket>
                <BigBracket>[</BigBracket> 1 +
                <FractionBox top={<VarBox>r</VarBox>} bottom="100" />
                <BigBracket>]</BigBracket><sup>3</sup>
              </Bracket>
              <span>=</span>
              <FractionBox top={data.numerator1} bottom={data.denominator1} />
            </div>

            {/* Dashed container with cube roots */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', position: 'relative', alignItems: 'center' }}>
              <Bracket>
                <BigBracket>[</BigBracket> 1 +
                <FractionBox top={<VarBox>r</VarBox>} bottom="100" />
                <BigBracket>]</BigBracket>
              </Bracket>
              <span>=</span>
              <FractionBox 
                top={<NumBox gradient="num6">{data.cubeRoot1}</NumBox>} 
                bottom={<NumBox gradient="num5">{data.cubeRoot2}</NumBox>} 
              />
              <div style={{ width: 0, borderLeft: '3px dashed #000', height: '70px', position: 'relative', top: '5px' }} />
              <div style={{ background: '#222', color: '#fff', padding: '10px 14px', borderRadius: '8px', fontSize: '27px', boxShadow: '2px 2px 6px rgba(0,0,0,0.3)', whiteSpace: 'pre-line' }}>
                6³ = 216<br />5³ = 125
              </div>
            </div>
          </div>

          {/* Final rate calculation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <VarBox>r</VarBox>
            <span>=</span>
            <FractionBox 
              top={<NumBox gradient="num1">{data.fraction1}</NumBox>} 
              bottom={<NumBox gradient="num5">{data.fraction2}</NumBox>} 
            />
            <span>× 100</span>
            <VarBox style={{ marginLeft: '80px' }}>r</VarBox>
            <span>=</span>
            <NumBox data-testid="text-rate">{data.rate}</NumBox>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '54px' }}>
          {/* Top box with icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '3px dashed #6d6d6d', padding: '10px', borderRadius: '12px' }}>
            <img src="/interesticon.png" alt="interest icon" style={{ width: '90px', height: '121px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span>Interest Compounded Annually</span>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-12px', left: '177px', transform: 'translateX(-50%)', width: '2px', height: '94px', background: 'white', zIndex: 1, rotate: '270deg' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '12px solid white' }} />
                </div>
                <div style={{ background: '#222', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '2px 2px 6px rgba(0,0,0,0.3)', textAlign: 'center', display: 'flex', gap: '31px' }}>
                  <NumBox>{data.principal}</NumBox>
                  <NumBox gradient="num3">{data.time}</NumBox>
                  <NumBox>{data.amount}</NumBox>
                </div>
              </div>
              <span style={{ textAlign: 'center' }}>years</span>
            </div>
          </div>

          {/* Description box */}
          <div style={{ background: '#222', color: '#fff', padding: '15px', paddingLeft: '35px', borderRadius: '10px', boxShadow: '2px 2px 6px rgba(0,0,0,0.3)', textAlign: 'left' }}>
            {data.description}
          </div>

          {/* Calculation steps */}
          <div style={{ position: 'relative', left: '126px', display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>=</span>
              <NumBox>{data.principal}</NumBox>
              <Bracket>
                <BigBracket>[</BigBracket>1 +
                <FractionBox top="20" bottom="100" />
                <BigBracket>]</BigBracket> <sup>2</sup>
              </Bracket>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>=</span>
              <NumBox>{data.principal}</NumBox>
              <span>×</span>
              <FractionBox top="6" bottom="5" />
              <span>×</span>
              <FractionBox top="6" bottom="5" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>=</span>
              <Highlight data-testid="text-final-amount">{data.amount2Years}</Highlight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function NumBox({ children, gradient, ...props }: { children: React.ReactNode; gradient?: string; [key: string]: any }) {
  const gradients: Record<string, string> = {
    num0: 'linear-gradient(to bottom, #F8BACA, #A1C1E0)',
    num1: 'linear-gradient(to bottom, #EBE0C7, #97B5BB)',
    num2: 'linear-gradient(to bottom, #F3DDFF, #F9FAD7)',
    num3: 'linear-gradient(to bottom, #FFBFBD, #C0EEFC)',
    num4: 'linear-gradient(to bottom, #F5DEE7, #EEB8CC)',
    num5: 'linear-gradient(to bottom, #FFB686, #F3DDFF)',
    num6: 'linear-gradient(to bottom, #CA8454, #FBF6F3)',
    num7: 'linear-gradient(to bottom, #3399FE, #F0F7FF)',
    num8: 'linear-gradient(to bottom, #B8DDFF, #ffffff)',
    num9: 'linear-gradient(to bottom, #F1FAFB, #8DD6D8)',
  };

  return (
    <span
      style={{
        background: gradient ? gradients[gradient] : '#ffffff',
        padding: '2px 12px',
        borderRadius: '6px',
        display: 'inline-block',
        margin: '0 4px',
        boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.15)',
        zIndex: 2
      }}
      {...props}
    >
      {children}
    </span>
  );
}

function VarBox({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span
      style={{
        padding: '3px 17px',
        borderRadius: '6px',
        display: 'inline-block',
        margin: '0 4px',
        boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(to bottom, #FFB686, #F3DDFF)',
        ...style
      }}
    >
      {children}
    </span>
  );
}

function Bracket({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#ffeaea',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
      }}
    >
      {children}
    </div>
  );
}

function BigBracket({ children }: { children: React.ReactNode }) {
  return <span style={{ fontSize: '100px', fontWeight: 100 }}>{children}</span>;
}

function FractionBox({ top, bottom }: { top: React.ReactNode; bottom: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 5px'
      }}
    >
      <span style={{ padding: '3px 17px' }}>{top}</span>
      <span style={{ borderTop: '2px solid #000', padding: '0 6px' }}>{bottom}</span>
    </span>
  );
}

function Highlight({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return (
    <span
      style={{
        background: '#1bad83',
        color: 'white',
        padding: '2px 12px',
        borderRadius: '6px',
        boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.15)',
        fontSize: '30px'
      }}
      {...props}
    >
      {children}
    </span>
  );
}
