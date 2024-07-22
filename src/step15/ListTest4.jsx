const students = [
  {id: 1, name: '홍길동', job: '백수'},
  {id: 2, name: '강감찬', job: '공무원'},
  {id: 3, name: '이순신', job: '군인'},
]

// 출력
// 1. 홍길동(백수)
// 2. 강감찬(공무원)
// 3. 이순신(군인)

export function ListTest4() {

  return (
    <>
      <ul style={{listStyle:'none',}}>
        {
          students.map((student)=>{
            return <li key={student.id}>{student.id}. {student.name}({student.job})</li>
          })
        }
      </ul>
    </>
  );
}