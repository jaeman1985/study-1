# study -1
dom 요소 조작하는 방법과 css 속성 공부

🔶 함수 호출에 대한 설명
함수 호출 방식에 따라 코드가 다르게 작동한다.

### 소괄호가 있는 경우
---
btnCloses.forEach(btn => {
    btn.addEventListener('click', titleClose());
});

titleClose() 는 함수 호출 구문이다. 즉, 이 코드는 함수가 즉시 실행되고, 실행 결과(반환값)가
addEventListener 에 전달된다.
따라서, 클릭 이벤트 리스너가 설정될 때 titleClose 함수가 한 번 실행되고, 그 결과(여기서 아무 것도 반환하지 않으면
undefined) 가 이벤트 리스너로 등록된다.
결과적으로, 클릭 이벤트가 발생해도 아무 일도 일어나지 않는다.

### 소괄호가 없는 경우
---
btnCloses.forEach(btn => {
    btn.addEventListener('click', titleClose);
});

titleClose 는 함수 참조(또는 함수 객체)이다. 이는 titleClose 함수 그 자체를 가리킨다.
클릭 이벤트가 발생할 때마다 addEventListener 가 titleClose 함수를 호출한다.
이 방식은 이벤트가 발생할 때만 함수가 실행된다.

### 함수에 인수를 전달 하는 경우
---
btnCloses.forEach(btn => {
    btn.addEventListener('click', function() {
        titleClose(btn);
    });
});

함수에 인수를 전달해야 하는 경우는 익명 함수를 사용하여 이벤트 발생 시점에 함수를 호출하도록 한다.
즉, 익명 함수를 이벤트 리스너로 등록하여 클릭 이벤트가 발생할 때 마다 익명 함수가 실행되고, 그 내부에서 titleCose 함수가 btn 인수와 함께 호출된다.

🔶 CSS flex
Flexbox 는 기본적으로 flex-direction 속성이 row 로 설정되어 있다.
즉, 요소들이 가로 방향으로 정렬된다.
그래서 세로 방향으로 정렬하고 싶다면 fiex-direction: column 해주면된다.
---
.container {
    display: flex;
    flex-direction: column;
}
