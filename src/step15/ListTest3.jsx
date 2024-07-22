const animals = [
  '고양이', '호랑이', '기러기',
]

export function ListTest3() {
  
  return (
    // map() 함수는 두번째 인자를 index를 줘야하고
    // key값을 줘야한다.
    // key값은 index보다는 이름을 줘야한다.
    // 배열의 요소가 추가되거나 삭제될 때 문제가 발생할 수 있기 때문이다.
    // 최적의 방법은 배열의 각 요소가 교유한 값을 가지고 있을 때 그 값을 'key'로 사용하는 것이다.
    // <ul>
    //   { animals.map(
    //     (animal, index) => {
    //       return <li key={index}>{index}.{animals}</li>
    //     }
    //   )}
    // </ul>
    <ul>
      { animals.map(
        (animal) => {
          return <li key={animal}>{animals}</li>
        }
      )}
    </ul>
  );
}