import { useState } from "react";
import { useEffect } from "react";

export function UnmountComp() {
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    console.log('컴포넌트 마운딩됨'); // 마운팅된 뒤, 수정된 뒤 실행
    return () => {
      console.log('컴포넌트 언마운팅 전');
    }
  }, []);

 

return (
  <div>
    컴포넌트
  </div>
)
}