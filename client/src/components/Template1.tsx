interface Template1Props {
  problemNumber: 1 | 2;
}

export function Template1({ problemNumber }: Template1Props) {
  // Problem 1: 7-24-25 Pythagorean triplet, find Sec C + Cot A
  const problem1 = {
    sides: { ab: "7 cm", bc: "24 cm", ac: "25 cm" },
    equation: "AC - BC = 1",
    tripletCheck: "25 - 24 = 1      25² - 24² = 7²",
    tripletResult: "7, 24, 25 is a Pythagorean triplet",
    secValue: "25/24",
    cotValue: "7/24",
    answer: "4/3"
  };

  // Problem 2: 5-12-13 Pythagorean triplet, find Sin A + Cos C
  const problem2 = {
    sides: { ab: "5 cm", bc: "12 cm", ac: "13 cm" },
    equation: "AC - BC = 1",
    tripletCheck: "13 - 12 = 1      13² - 12² = 5²",
    tripletResult: "5, 12, 13 is a Pythagorean triplet",
    sinValue: "12/13",
    cosValue: "12/13",
    answer: "24/13"
  };

  const data = problemNumber === 1 ? problem1 : problem2;

  return (
    <div style={{ fontFamily: 'Calibri, sans-serif', fontSize: '27px', fontWeight: 'bold' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
          background: 'white',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          gap: '80px',
          maxWidth: 'fit-content'
        }}
        data-testid="template1-container"
      >
        {/* Left Column - Explanations */}
        <div>
          <div
            style={{
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              width: 'fit-content',
              gap: '20px',
              alignItems: 'center'
            }}
          >
            {/* Equation */}
            <div
              style={{
                borderRadius: '12px',
                padding: '10px 20px',
                margin: '10px 0',
                fontWeight: 'bold',
                display: 'inline-block',
                textAlign: 'center'
              }}
            >
              <span style={{ background: '#ED8392', color: 'black', padding: '4px 8px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>A</span>
              <span style={{ background: '#B7F3F0', color: 'black', padding: '4px 8px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>C</span>
              {' - '}
              <span style={{ background: '#7BC3EC', color: 'black', padding: '4px 8px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>B</span>
              <span style={{ background: '#B7F3F0', color: 'black', padding: '4px 8px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>C</span>
              {' = 1'}
            </div>

            {/* Pythagorean Triplet Verification */}
            <div style={{ border: '2px solid #ccc', borderRadius: '10px', background: '#F2F2F2' }}>
              <div
                style={{
                  borderRadius: '12px',
                  padding: '10px 20px',
                  margin: '10px 0',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
              >
                <div>{data.tripletCheck}</div>
                <div>
                  <img src="/arrow.png" alt="arrow" style={{ width: '50px' }} />
                </div>
                <div>{data.tripletResult}</div>
              </div>
            </div>

            {/* Final Calculation */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '6px' }}>
              <span>
                {problemNumber === 1 ? '(Sec ' : '(Sin '}
                <span style={{ background: problemNumber === 1 ? '#b3d8f1' : '#f79ba2', color: 'black', padding: '4px 8px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>
                  {problemNumber === 1 ? 'C' : 'A'}
                </span>
                {problemNumber === 1 ? ' + Cot ' : ' + Cos '}
                <span style={{ background: problemNumber === 1 ? '#f79ba2' : '#b3d8f1', color: 'black', padding: '4px 8px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>
                  {problemNumber === 1 ? 'A' : 'C'}
                </span>
                {') = '}
              </span>
              <Fraction top={problemNumber === 1 ? "25" : "12"} bottom={problemNumber === 1 ? "24" : "13"} />
              <span>&nbsp;+&nbsp;</span>
              <Fraction top={problemNumber === 1 ? "7" : "12"} bottom={problemNumber === 1 ? "24" : "13"} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '190px' }}>
              <span>=</span>
              <div
                style={{
                  fontSize: '30px',
                  backgroundColor: '#1BAD83',
                  color: 'white',
                  padding: '6px 20px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  marginLeft: '10px',
                  boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)'
                }}
                data-testid="text-answer"
              >
                {data.answer}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Triangle & Formulas */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Triangle Diagram */}
          <div style={{ position: 'relative', width: '240px', height: '140px', margin: '40px auto' }}>
            {/* AB side (left vertical) */}
            <div style={{ position: 'absolute', left: 0, bottom: 0, width: '4px', height: '140px', background: 'black' }} />
            
            {/* BC side (bottom horizontal) */}
            <div style={{ position: 'absolute', left: 0, bottom: 0, width: '240px', height: '4px', background: 'black' }} />
            
            {/* AC side (hypotenuse) with filled triangle */}
            <svg style={{ position: 'absolute', left: 0, bottom: 0 }} width="240" height="140">
              <polygon points="0,140 0,0 240,140" fill="rgba(173, 216, 230, 0.2)" />
              <line x1="0" y1="0" x2="240" y2="140" stroke="black" strokeWidth="4" />
            </svg>

            {/* Point Labels */}
            <div style={{ position: 'absolute', top: '-20px', left: '-15px', background: '#ED8392', fontWeight: 'bold', padding: '2px 6px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)', color: 'black' }}>A</div>
            <div style={{ position: 'absolute', bottom: '-25px', left: '-15px', background: '#7BC3EC', fontWeight: 'bold', padding: '2px 6px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)', color: 'black' }}>B</div>
            <div style={{ position: 'absolute', bottom: '-25px', right: '-15px', background: '#B7F3F0', fontWeight: 'bold', padding: '2px 6px', borderRadius: '6px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)', color: 'black' }}>C</div>

            {/* Dimension Labels */}
            <div style={{ position: 'absolute', left: '-40px', top: '45px', background: 'linear-gradient(to top, #F5FAFF, #3399FF)', padding: '2px 6px', borderRadius: '10px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>{data.sides.ab}</div>
            <div style={{ position: 'absolute', bottom: '-35px', left: '90px', background: 'linear-gradient(to top, #F9FAD6, #F3DDFF)', padding: '2px 6px', borderRadius: '10px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>{data.sides.bc}</div>
            <div style={{ position: 'absolute', top: '40px', right: '90px', background: 'linear-gradient(to top, #F3DDFF, #FEB78A)', padding: '2px 6px', borderRadius: '10px', boxShadow: '3px 3px 4px rgba(181, 181, 181, 1.5)' }}>{data.sides.ac}</div>
          </div>

          {/* Formula Tables */}
          <div style={{ width: '298px', display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '10px' }}>
            <div style={{ background: '#222', color: 'white', borderRadius: '10px 10px 0px 0px', padding: '10px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '6px' }}>
                {problemNumber === 1 ? 'Sec ' : 'Sin '}
                <span style={{ background: problemNumber === 1 ? '#b3d8f1' : '#f79ba2', color: 'black', padding: '4px 8px', borderRadius: '6px' }}>
                  {problemNumber === 1 ? 'C' : 'A'}
                </span>
                {' = '}
                <Fraction top={problemNumber === 1 ? "Hypotenuse" : "Opposite"} bottom={problemNumber === 1 ? "Base" : "Hypotenuse"} white />
              </div>
            </div>
            <div style={{ background: '#222', color: 'white', borderRadius: '0px 0px 10px 10px', padding: '10px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '6px' }}>
                {problemNumber === 1 ? 'Cot ' : 'Cos '}
                <span style={{ background: problemNumber === 1 ? '#f79ba2' : '#b3d8f1', color: 'black', padding: '4px 8px', borderRadius: '6px' }}>
                  {problemNumber === 1 ? 'A' : 'C'}
                </span>
                {' = '}
                <Fraction top={problemNumber === 1 ? "Perpendicular" : "Base"} bottom={problemNumber === 1 ? "Base" : "Hypotenuse"} white />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fraction({ top, bottom, white = false }: { top: string; bottom: string; white?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>{top}</div>
      <div style={{ width: white ? '140px' : '40px', height: '3px', background: white ? 'white' : 'gray' }} />
      <div>{bottom}</div>
    </div>
  );
}
