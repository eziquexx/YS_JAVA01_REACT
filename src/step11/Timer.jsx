import React, { useState, useEffect } from 'react';

export function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 작동 중...');
    }, 1000);

    // 컴포넌트가 언마운트될 때 실행될 정리 함수
    return () => {
      clearInterval(timer);
      console.log('타이머 정리 완료.');
    };
  }, []);

  return <div>타이머가 시작되었습니다. 콘솔을 확인하세요.</div>;
}