import React, { useEffect, useState } from 'react';

export function ComponentWithEffect() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
    };
  }, []); // 빈 배열을 전달하여 mount 시에만 실행되도록 함

  const handleUnmount = () => {
    setMounted(false); // 언마운트를 트리거
  };

  if (!mounted) {
    return <div>Component is unmounted!</div>;
  }

  return (
    <div>
      <h1>Component with useEffect</h1>
      <button onClick={handleUnmount}>Unmount Component</button>
      <p>This component demonstrates useEffect similar to componentWillUnmount.</p>
    </div>
  );
}