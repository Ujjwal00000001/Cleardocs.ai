'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  async function explain() {
    const res = await fetch('/api/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    setOutput(data.result);
  }

  return (
    <div style={{ padding: 20 }}>
      <textarea
        placeholder="Paste document text"
        value={text}
        onChange={e => setText(e.target.value)}
        rows={8}
        style={{ width: '100%' }}
      />
      <button onClick={explain}>Explain</button>

      <pre>{output}</pre>
    </div>
  );
}
