// 추가버튼을 눌렀을 때 계속 리스트가 추가되게 하기 위해 밖으로 빼줌
const todoFormEl = document.querySelector(".todo-form");
const toDoListEl = document.querySelector(".todo-list");

// 폼 전송이 일어났을 때 발생하는 이벤트
todoFormEl.addEventListener("submit", e => {
  // 폼이 실제로 전송되지는 않음!
  e.preventDefault();
  //사용자가 입력한 텍스트 : 폼 요소 안에서 name이 todo인 애의 값을 addTodo 함수의 매개변수로 넘김
  addTodo(e.target.elements.todo.value);
  // input안의 내용을 초기화 1 : `value`에 값 대입하기
  // e.target.elements.todo.value = ' '
  // input안의 내용을 초기화 2 : 폼의 reset메소드 사용하기
  e.target.reset();
});

// 재사용 할 기능을 함수로 미리 만들어 놓음
function addTodo(newTodoText) {
  //li태그를 만들어서, 내용을 채운 뒤에 문서 안에 삽입하기
  const todoItemEl = document.createElement("li");
  // css 클래스추가
  todoItemEl.classList.add("todo-list-item");
  todoItemEl.textContent = newTodoText;
  // ul태그 뒤에 li삽입
  toDoListEl.appendChild(todoItemEl);
  // 삭제 버튼 만들기
  const delButtonEl = document.createElement("button");
  delButtonEl.classList.add("todo-list-item-btn1");
  delButtonEl.classList.add("icon-cancel");
  // delButtonEl.textContent = "삭제";
  todoItemEl.appendChild(delButtonEl);
  // 삭제 버튼을 클릭했을 때 할일 항목이 삭제되도록 만들기
  delButtonEl.addEventListener("click", e => {
    toDoListEl.removeChild(todoItemEl);
  });

  // 위로 버튼을 만들어서 문서 안에 넣기
  const upButtonEl = document.createElement("button");
  upButtonEl.classList.add("todo-list-item-btn2");
  upButtonEl.classList.add("icon-up-dir");
  todoItemEl.appendChild(upButtonEl);
  upButtonEl.addEventListener("click", e => {
    // 버튼이 잘 동작하는지 확인하기 위한 코드
    // alert('위로 버튼이 클릭되었습니다.')
    //.insertBefore_넣고싶은놈, 어디 앞에 넣어줄건지
    // previousElement가 null이 아닐때만 코드 실행시킴
    if (todoItemEl.previousElementSibling !== null) {
      toDoListEl.insertBefore(todoItemEl, todoItemEl.previousElementSibling);
    }
  });
  // 아래로 버튼을 만들어서 문서 안에 넣기
  const downButtonEl = document.createElement("button");
  downButtonEl.classList.add("todo-list-item-btn3");
  downButtonEl.classList.add("icon-down-dir");
  todoItemEl.appendChild(downButtonEl);
  downButtonEl.addEventListener("click", e => {
    // 아래로 버튼 눌렀을 때 오류해결 : 'null'의 nextElementSibling을 찾을 수 없다고해서
    if (todoItemEl.nextElementSibling !== null) {
      toDoListEl.insertBefore(
        todoItemEl,
        todoItemEl.nextElementSibling.nextElementSibling
      );
    }
  });
}

addTodo("과제하기");

// input에 keydown이벤트 먹이기
// document.querySelector('.todo-input').addEventListener('keydown', e => {
//   console.log('키를 눌렸을 때')
//   // 어떤 키가 눌러졌는지 문자열로 출력됨
//   console.log('key:', e.key)
// })

// input에 keypress이벤트 먹이기
// document.querySelector('.todo-input').addEventListener('keyup', e => {
//   console.log('키를 떼졌을 때')
//   // 어떤 키가 눌러졌는지 문자열로 출력됨
//   console.log('key:', e.key)
// })
// document.querySelector(".todo-input").addEventListener("keypress", e => {
//   console.log("keypress");
//   // 어떤 키가 눌러졌는지 문자열로 출력됨
//   console.log("key:", e.key);
//   // 아래 화살표 버튼을 눌렀을 때 스크롤이 되는 것을 방지
//   // e.preventDefault()
// });
