# Color Game

![image](https://user-images.githubusercontent.com/38391126/71553795-c3483780-2a58-11ea-8edd-a2dc54df8e6d.png)

Udemy 'The Web Developer Bootcamp' 강의 중 color game 실습. 완성본만 보고 100% 셀프 코딩.

## 개발중에 손가락이 멈칫 하게 된 순간

+ (html css관련) navigation에서 new color와 easy/hard 사이의 간격.
  - 유니티 하던때 처럼 부모공간을 div로 잡고 anchor로 왼쪽정렬, 오른쪽 정렬해야 하나 고민함. 이 방법으로 생각하니까 html depth도 더 복잡해짐.
  - 강의에서 제공하는 샘플 확인했는데 newcolor/빈공간/easy/hard로 잡음. 이게 더 효율적이라 생각해서 수정함.
  - 결과 : 빈 공간을 div로 잡음.

+ (js관련) easy/hard 버튼기능
  - 배경효과를 위해 mouse over, mouse out했을 때 "btnMouseOver"가 추가, 삭제 되도록 처리함.
  - 선택됐을 땐 mouse out이 실행되면 안됨. classlist에 selected가 있으면 mouse out에서 처리전에 return하는 방법으로 짰음.
  - 다른 mode 버튼이 선택됐을 때 유니티 toggle처럼 이전 선택된 것에선 selected 클래스 제거하고, mouseout효과를 넣어야함.
  - 결과 : 본인이 선택됐을 때 "selected"와 "btnMouseOver" 클래스 추가 / 다른게 선택됐을 때 "selected"와 "btnMouseOver" 클래스 삭제.


+ visibility : hidden과 display : none의 차이?
  - visibility : hidden 보이지 않으나 공간 존재.
  - display : none 보이지 않고 공간도 없음.


