import { useEffect } from "react";
export function MemberItem(props){

  useEffect(() =>{
    console.log('콤포넌트 마운딩됨 =>'+props.name);//마운팅된뒤, 수정된뒤 실행
    return ()=>{
      console.log('콤포넌트 언마운팅 전 =>' + props.name);
    }
  },[]);

  const delete2 = ()=>{
    props.call_func(props.id);
  }
  return (    
    <li key={props.id}>{props.id}. {props.name}({props.age}세){props.job} <button className="delBtn" onClick={delete2}>삭제</button></li>
  );
}