# Break week 과제 1

수업 시간에 같이 만들어봤던 [할 일 목록](https://codepen.io/dbeat999/pen/dgVxRN)에 **본인만의 디자인**을 입혀서, Netlify에 배포하신 후

- Github 저장소 URL
- Netlify에 배포한 사이트 URL

을 저에게 Slack direct message로 제출해주세요.

코드를 작성하실 때, [해커톤 템플릿 프로젝트](https://github.com/fds11/fds-game-hackathon)를 **복사**하시고 그 위에서 작업을 해 주세요. 저장소 복사하는 방법을 본 문서 하단에 적어두었으니 참고해주세요.

**기한: 다음주 수요일(10/24) 자정까지**

결과물에 반드시 표시되어야 하는 요소들은 아래와 같습니다:

- 사이트 제목
- 사용법에 대한 간단한 설명
- 푸터 (작성자 정보 포함)
- '삭제', '위로', '아래로' 버튼을 아이콘으로 만들기

참고할 만한 자료:

- ['HTML todo list' 유튜브 검색](https://www.youtube.com/results?search_query=html+todo+list) - 디자인을 직접 하기 힘드시다면 디자인을 베낄만한 사이트를 찾아보세요.
- [Octicons](https://octicons.github.com/) - 여러 아이콘들을 SVG 파일 형태로 제공하는 사이트입니다.
- [Open Color](https://yeun.github.io/open-color/) - 여러 색깔을 체계적인 형태로 미리 만들어 둔 사이트입니다.

---

### 이미 fork한 저장소를 새로 **복사**하고 싶을 때

1. 복사하고 싶은 저장소를 `git clone` 명령을 사용해 내려받는다.
2. **내려받은 폴더로 이동한 후**, `rm -rf .git` 명령을 실행한다.
3. `git init`, `git add .`, `git commit -m "..."` 명령을 차례로 실행한다. (저장소 초기화)
4. Github에서 새 저장소를 만든 후, 위에서 초기화한 저장소를 푸시한다. (Github에서 새 저장소를 만든 후 나오는 설명 페이지에서, `…or push an existing repository from the command line` 아래에 나오는 두 명령을 그대로 터미널에 복사 붙여넣기 하시면 됩니다.)

---

### Netlify에서 배포하실 때

- Build Command 란에는 `npm run build`를
- Publish Directory 란에는 `dist`를

입력하시면 됩니다.
