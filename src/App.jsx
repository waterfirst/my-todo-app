import { useState } from 'react';

const FILTERS = ['전체', '진행중', '완료'];

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', done: true },
    { id: 2, text: 'EC2에 배포하기', done: false },
    { id: 3, text: '해커톤 준비하기', done: false },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('전체');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const filtered = todos.filter(t => {
    if (filter === '진행중') return !t.done;
    if (filter === '완료') return t.done;
    return true;
  });

  const doneCount = todos.filter(t => t.done).length;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', sans-serif",
      padding: '20px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        width: '100%',
        maxWidth: '480px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        {/* 헤더 */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#2d3748', margin: 0 }}>
            📝 My Todo
          </h1>
          <p style={{ color: '#718096', marginTop: '6px', fontSize: '14px' }}>
            총 {todos.length}개 중 {doneCount}개 완료
          </p>
          {/* 진행률 바 */}
          <div style={{ background: '#e2e8f0', borderRadius: '99px', height: '8px', marginTop: '10px' }}>
            <div style={{
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              width: `${todos.length ? (doneCount / todos.length) * 100 : 0}%`,
              height: '100%',
              borderRadius: '99px',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>

        {/* 입력창 */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            placeholder="새 할 일을 입력하세요..."
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              fontSize: '15px',
              outline: 'none',
            }}
          />
          <button
            onClick={addTodo}
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 20px',
              fontSize: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >+</button>
        </div>

        {/* 필터 버튼 */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '6px 16px',
                borderRadius: '99px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '600',
                background: filter === f ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f7fafc',
                color: filter === f ? 'white' : '#718096',
              }}
            >{f}</button>
          ))}
        </div>

        {/* 할 일 목록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', color: '#a0aec0', padding: '40px 0', fontSize: '15px' }}>
              할 일이 없습니다 🎉
            </div>
          )}
          {filtered.map(todo => (
            <div key={todo.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 16px',
              borderRadius: '12px',
              background: todo.done ? '#f7fafc' : 'white',
              border: `2px solid ${todo.done ? '#e2e8f0' : '#ebf4ff'}`,
            }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#667eea' }}
              />
              <span style={{
                flex: 1,
                fontSize: '15px',
                color: todo.done ? '#a0aec0' : '#2d3748',
                textDecoration: todo.done ? 'line-through' : 'none',
                fontWeight: '500',
              }}>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#fc8181',
                  fontSize: '18px',
                  padding: '0 4px',
                }}
              >✕</button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#cbd5e0', fontSize: '12px', marginTop: '30px' }}>
          Claude Code로 만든 Todo App 🤖
        </p>
      </div>
    </div>
  );
}
