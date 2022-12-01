# paint_app
> starting date : 2021/12/01

#### day1 #1
- 배경 그리드 추가 (임시 픽셀 확인용)
- js에도 canvas의 width와 height를 확인해 주어야 함.
- 생성 코드 정리
  - .fillRect(x, y, w, h) : 속이 채워진 네모
  - .rect(x, y, w, h) : 가상의 네모
  - .beginPath() : 새 도형 시작
  - .moveTo(x, y)
  - .lineTo(x, y) : 선만 그으면 스트로크지만 막으면 fill 가능
  - .arc(x, y, 반지름, 시작각도, 종료각도) : 곡선
    * 종료각도 : 2 * Math.PI가 360도 ( 1은 절반 180도 )
- 속성 코드 정리
  - .fill() : 채우기
  - .fillStyle = "" : 채우기 스타일 -> 지정하고 fill 안해주면 안보임
  - .stroke() : 선