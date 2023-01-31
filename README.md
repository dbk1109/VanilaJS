# VanillaJS 공부 리포지토리

### 23.01.31 업데이트 
- 레포 통합건으로 기존에 있던 내용 폴더 안으로 이동 (투두 리스트 크롬 앱 만들기)

- #### paint
  > starting date : 12/01
  **#1.0~#1.5**
    - 배경 그리드 추가 (임시 픽셀 확인용)
    - js에도 canvas의 width와 height를 확인해 주어야 함.
    - 생성 코드 정리
      - `fillRect(x, y, w, h)` : 속이 채워진 네모
      - `rect(x, y, w, h)` : 가상의 네모
      - `beginPath()` : 새 도형 시작
      - `moveTo(x, y)`
      - `lineTo(x, y)` : 선만 그으면 스트로크지만 막으면 fill 가능
      - `arc(x, y, 반지름, 시작각도, 종료각도)` : 곡선
        - 종료각도 : 2 \* Math.PI가 360도 ( 1은 절반 180도 )
    - 속성 코드 정리
      - `fill()` : 채우기
      - `fillStyle = ""` : 채우기 스타일 -> 지정하고 fill 안해주면 안보임
      - `stroke()` : 선
    
  **#2.0~#2.7 (2.5~2.6 제외)**
    - 좌표값 기본은 0,0
    - [html] attr 중에 data- 는 js에서 dataset으로 호출 가능함
    - [js]
      - getElementsByClassName : 이걸로 가져오면 HTMLCollection으로 호출되어서 Array.from()으로 배열화 해야함.
      - querySelectorAll : NodeList
    - 속성코드 정리
      - `lineWidth` : 선 굵기
      - `strokeStyle` : 선 색
      - `fillColor` : 사각형 내부 채우기