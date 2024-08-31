'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

export default function QnAPage() {
  const [input, setInput] = useState('');
  const [qna, setQna] = useState<{ question: string; answer: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // 스크롤을 이동시킬 참조

  // 스크롤을 하단으로 이동시키는 함수
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 질문이나 답변이 업데이트될 때마다 스크롤을 하단으로 이동시킵니다.
  useEffect(() => {
    scrollToBottom();
  }, [qna]);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/chat_gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();

      if (response.ok) {
        setQna([{ question: input, answer: data.result }, ...qna]);
        setInput('');
      } else {
        alert(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error fetching API response:', error);
      alert('Something went wrong! Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'scroll', padding: '10px', paddingBottom: '60px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          {qna.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div
                style={{
                  maxWidth: '66%',
                  padding: '10px',
                  borderRadius: '15px',
                  backgroundColor: '#f0e5a5', // 노란색 버블
                  color: '#000',
                  marginBottom: '5px',
                  alignSelf: 'flex-end',
                }}
              >
                {item.question}
              </div>
              <div
                style={{
                  maxWidth: '66%',
                  padding: '10px',
                  borderRadius: '15px',
                  backgroundColor: '#e0e0e0', // 파란색 버블
                  color: '#000',
                  alignSelf: 'flex-start'
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* 스크롤을 이동시킬 참조 */}
        </div>
      </div>
      <div className="w-1/3" style={{ padding: '10px', borderTop: '1px solid #ccc', backgroundColor: '#fff', position: 'fixed', bottom: 0}}>
        <div  style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              marginRight: '10px',
              outline: 'none',
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
            }}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
