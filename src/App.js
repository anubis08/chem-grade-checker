import React, { useState } from 'react';

function GradeCheck() {
  const [currentPoints, setCurrentPoints] = useState('');
  const [bigExam, setBigExam] = useState('');
  const [miniExam, setMiniExam] = useState('');
  const [result, setResult] = useState('');

  const calculateGrade = () => {
    const totalPoints = Math.min(
      Number(currentPoints) + Number(bigExam) + Number(miniExam),
      365
    );
    const targetGrade = 450;
    const maxHugeExamPoints = 135;
    let guaranteedGrade = 0;

    if (totalPoints >= 360) guaranteedGrade = 130;
    else if (totalPoints >= 350) guaranteedGrade = 120;
    else if (totalPoints >= 340) guaranteedGrade = 110;
    else if (totalPoints >= 330) guaranteedGrade = 100;
    else if (totalPoints >= 320) guaranteedGrade = 90;
    else if (totalPoints >= 310) guaranteedGrade = 80;
    else if (totalPoints >= 300) guaranteedGrade = 70;
    else if (totalPoints >= 290) guaranteedGrade = 60;
    else if (totalPoints >= 280) guaranteedGrade = 50;
    else if (totalPoints >= 270) guaranteedGrade = 40;
    else guaranteedGrade = 30;

    const totalAfterSkipping = totalPoints + guaranteedGrade;
    const totalAfterTaking = totalPoints + maxHugeExamPoints;

    let output = `You're at ${totalPoints}/365.\nGuaranteed grade without Huge Exam: ${guaranteedGrade}`;

    if (totalAfterSkipping >= targetGrade) {
      output += `\n✅ You can skip the Huge Exam and still get an A- or better.`;
    } else if (totalAfterTaking >= targetGrade) {
      output += `\n🟡 You can't skip the Huge Exam.`;
      const remainingPoints = targetGrade - totalPoints;
      output += `\nYou will need to score ${remainingPoints} or better on the Huge Exam to have an A- or better (450 - ${totalPoints} = ${remainingPoints}).`;
    } else {
      output += `\n🟡 You can't skip the Huge Exam.\n❌ You can't get an A- even if you take the Huge Exam.`;
    }

    setResult(output);
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem' }}>
        Chem Skip Checker
      </h2>

      <label style={labelStyle}>Points right now (out of 277):</label>
      <input
        value={currentPoints}
        onChange={e => setCurrentPoints(e.target.value)}
        type='number'
        style={inputStyle}
      />

      <label style={labelStyle}>Big Exam (out of 40):</label>
      <input
        value={bigExam}
        onChange={e => setBigExam(e.target.value)}
        type='number'
        style={inputStyle}
      />

      <label style={labelStyle}>Mini Exam (out of 48):</label>
      <input
        value={miniExam}
        onChange={e => setMiniExam(e.target.value)}
        type='number'
        style={inputStyle}
      />

      <button
        onClick={calculateGrade}
        style={{
          backgroundColor: '#1d1d1d',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '6px',
          marginTop: '1rem',
          cursor: 'pointer',
          fontSize: '1rem',
          width: '100%',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={e => (e.target.style.backgroundColor = '#333')}
        onMouseLeave={e => (e.target.style.backgroundColor = '#1d1d1d')}
      >
        Check My Grade
      </button>

      <pre
        style={{
          marginTop: '20px',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '1rem',
          borderRadius: '6px',
          fontSize: '1rem',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          color: '#fff',
        }}
      >
        {result}
      </pre>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  margin: '1rem 0 0.5rem',
  fontWeight: '600',
  fontSize: '1rem',
  color: '#fff',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1.5rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #555',
  outline: 'none',
  boxSizing: 'border-box',
  background: '#333',
  color: '#fff',
};

export default GradeCheck;
