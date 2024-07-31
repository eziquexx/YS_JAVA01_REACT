import { useState, useEffect } from "react";
import './SliderZone.css';
import slider1 from "./img/slider1.jpg";
import slider2 from "./img/slider2.jpg";
import slider3 from "./img/slider3.jpg";
import left_btn from "./img/left_btn.png";
import right_btn from "./img/right_btn.png"

// 1. ul태그를 먼저 왼쪽으로 100% 이동 시키는 스타일을 적용 시켜줘야한다.
// $sliderPanel.css('left', `-${index * 100}%`);
// 현재의 index값을 담은 변수를 활용하자.

// 2. slider img가 반복된다. 이것을 map() 함수를 사용하여 간결하게 코드를 변경해보자.
// 첫번재,  먼저 이미지를 담은 배열을 만들어야한다.
// 두번째, 배열로 담은 변수에 .map() 함수를 적용시키자.
// 세번째, return () 안에서는 { } 중괄호를 사용해서 함수, 객체를 사용해야한다. (규칙임)
// 네번째, .map() 함수는 키값을 꼭 줘야한다. return으로 넣은 li태그에 key값을 주자.

// 3. left_btn과 right_btn을 클릭했을 때 슬라이더가 움직이도록 만들자.
// 첫번째, 각 버튼에 onClick 속성을 준다.
// 두번째, onCLick의 값으로 무명함수를 만들고 무명함수 안에 다른 콜백함수를 만들자.
//         다른 콜백함수명만 적어주고 따로 실행문은 return 바깥에서 만들기.
//         함수명을 handleArrowClick으로 했다.
// 세번째, handleArrowClick 함수에 다음과 같은 실행문을 만들자.
//         1) 첫번째 이미지에서 왼쪽으로 더 안 넘어가게 만들고
//            마지막 이미지에서 오른쪽으로 더 안 넘어가게 만들기 위해서
//            if문을 사용하자. if문은
//            currentIndex의 값이 0 미만이면 첫번째 이미지가 보이게.
//            currentIndex의 값이 2 초과면면 마지막 이미지가 보이게.
//            여기서 마지막 이미지는 이미지를 담은 배열의 길이 만큼을 활용하면
//            더 간결하게 코드를 짤 수 있다.
//            그리고 handleArrowCllick에 파라미터를 받아와서 currentIndex + 파라미터 값
//            을 계산해주면 된다.
//         2) if문을 작성하고 아래에 setCurrentIndex함수를 호출하여 
//            _index값을 전달해준다.
//            그러면 setCurrentIndex함수가 안에 있는 값을 currentIndex로 전달해준다.

// 4. slider가 자동으로 움직이게 만들자.
// 첫번째, useEffect hook을 사용한다.
// 두번째, useEffect hook안에 콜백함수를 만들어서 콜백함수 안에 실행문을
//         다음과 같이 작성하자.
//         1) setInterval을 사용한다.
//         2) setInterval 함수 안에 콜백함수를 사용하여 1, 2, 3 값을 출력하도록 하자.
//            출력된 값은 currentIndex의 값으로 들어갈 것이고,
//            currentIndex의 값이 1이면 ul 태그에 준 style 속성의 left가 -100% 이동하고
//            값이 2면 left가 -200% 이동한다. 값이 3이면 left가 -300% 이동.


export function SlideZone(){

  // 현재 index값 변수에 담기
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliders = [slider1, slider2, slider3];

  // left_btn, right_btn을 클릭하면 일어나는 이벤트
  const handleArrowClick = (direction) => {
    // 맨 처음에 첫번째 이미지가 보여야하기 때문에 현재의 값에 파라미터로 -1값을 받아와서
    // 0으로 맞춰주어야한다.
    let _index = currentIndex + direction;

    if(_index < 0) {
      _index = 0;
    } else if(_index > sliders.length-1) { // -1을 준 이유는 현재 배열은 3의 길이를 가지고 있기 때문이다. 배열은 0, 1, 2 순인데 _index가 sliders.length(= 3개)보다 작으면 0, 1, 2, 3의 값을 가지기 때문이다. 0, 1, 2의 값만 가지게 하기 위해서는 sliders.length에 -1을 준 것이다. 
      // _index = 2;
      // 여기서 마지막 이미지를 가르키기 때문에 sliders 배열 객체의 길이를
      // 사용하면 나중에 이미지를 계속 추가해도 값을 변경할 필요가 없어진다.
      _index = sliders.length-1;
    }

    setCurrentIndex(_index);
  }

  // 자동으로 슬라이더가 움직이게 만들기 - useEffect 사용
  useEffect(() => {
    // 먼저 setInterval 함수를 담은 변수를 만들자. 함수명은 interval로 해서 만들자.
    const interval = setInterval(() => {
      setCurrentIndex((idx) => { (idx+1) % sliders.length });
    }, 3000)

    // 
    return () => clearInterval(interval);
  }, [sliders.length]) // sliders.length가 변경될때에만 useEffect안의 실행문이 실행됨.
  
  return (
    <>
      <div id="sliderZone">
        <div id="sub_photo_bg">
            <ul className="slider_panel" style={{left: `-${currentIndex * 100}%`}}>
              {
                sliders.map((slider, index) => {
                  return (
                    <li key={ index } className="slider_image"><img src={ slider } alt="" /></li> 
                  )
                })
              }
                {/* <li className="slider_image"><img src={ slider1 } alt="" /></li>
                <li className="slider_image"><img src={ slider2 } alt="" /></li>
                <li className="slider_image"><img src={ slider3 } alt="" /></li> */}
            </ul>
            <div className="control_panel">
                <div className="control_btn active"  data-index="0"></div>
                <div className="control_btn" data-index="1"></div>
                <div className="control_btn" data-index="2"></div>
            </div>
            <div className="direct_btn">
                <div className="left_btn" onClick={() => {handleArrowClick(-1)}}><img src={ left_btn } alt="" /></div>
                <div className="right_btn" onClick={() => {handleArrowClick(1)}}><img src={ right_btn } alt="" /></div>
            </div>
        </div>
      </div>
    </>
  );
}