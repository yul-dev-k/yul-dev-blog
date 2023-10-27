# 🌊 기술 블로그 개발

React를 통해 개인 기술 블로그를 제작 중 입니다.

> 개발기간: 2023.10.09 ~

<details>
<summary>🏷️ 목차</summary>

- [🌊 기술 블로그 개발](#-기술-블로그-개발)
  - [🌕 Stacks](#-stacks)
    - [Environment](#environment)
    - [Config](#config)
    - [Devleopment](#devleopment)
  - [👀 화면 구성](#-화면-구성)
  - [🧑‍💻 주요 기능](#-주요-기능)
  - [📚 개발 하면서](#-개발-하면서)
    - [Learning Something](#learning-something)
    - [Commit Message Convention](#commit-message-convention)

</details>

## 🌕 Stacks

### Environment

<img src="https://img.shields.io/badge/visual studio code-444444?style=for-the-badge&logo=visualstudiocode"> <img src="https://img.shields.io/badge/git-444444?style=for-the-badge&logo=git"> <img src="https://img.shields.io/badge/git hub-444444?style=for-the-badge&logo=github">

### Config

<img src="https://img.shields.io/badge/npm-444444?style=for-the-badge&logo=npm">

### Devleopment

**MERN stack**

<img src="https://img.shields.io/badge/mongo db-444444?style=for-the-badge&logo=mongodb"> <img src="https://img.shields.io/badge/express-444444?style=for-the-badge&logo=express"> <img src="https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react"> <img src="https://img.shields.io/badge/node js-444444?style=for-the-badge&logo=nodedotjs">

## 👀 화면 구성

## 🧑‍💻 주요 기능

## 📚 개발 하면서

### Learning Something

| **No.** | **Issue**                                                                                                                                                                                                                                             | **Solution**                                                                   | **Link**                                                                                                                               |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 01      | [리액트 라우터 6으로 변경 후 하위 라우터 페이지 이동이 안되는 이슈](https://github.com/yul-dev-k/yul-dev-blog/commit/2cfec8c1b70f0b24572312d5d8df7fc737506486)                                                                                        | 부모 라우터를 `index`로 지정해줌으로써 부모 라우터에 우선 순위를 부여해주었다. | [액트 라우터 - 2. 하위 페이지(index, outlet), 동적경로(useParams)](https://url.kr/li7kcd) / **iberis.log**님 블로그                    |
| 01      | [배열의 중복값 제거](https://velog.io/@iberis/%EC%BD%94%EB%93%9C%EC%9E%87-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-2.-%ED%95%98%EC%9C%84-%ED%8E%98%EC%9D%B4%EC%A7%80index-outlet-%EB%8F%99%EC%A0%81%EA%B2%BD%EB%A1%9CuseParams)        | filter(), indexOf() 메서드 이용                                                | [간단간단! 자바스크립트(JS) 문자열, 배열 중복값 제거하기](https://url.kr/li7kcd) / **검은바닷가재**님 블로그                           |
| 01      | [블로그 포스트 리스트가 최신 순 부터 나오던 이슈](https://github.com/yul-dev-k/yul-dev-blog/commit/3c8b1c464c600d2c836c2f9caab93e215c95c7f4)                                                                                                          | postList의 배열 값을 reverse() 메서드를 통해 뒤집어 준다.                      | [React에서 reverse()사용](https://velog.io/@nearworld/React%EC%97%90%EC%84%9C-reverse-%EC%82%AC%EC%9A%A9) / **nearworld.log**님 블로그 |
| 02      | Shallow Copy에 의해 MainPosts.jsx에서 Posts.jsx로 넘어갈 때 마다 reverse가 발생하던 이슈 발생                                                                                                                                                         | [...Array]를 이용하여 배열 복사                                                | [React에서 reverse()사용](https://url.kr/c4mezx) / **nearworld.log**님 블로그                                                          |
| 03      | [ref를 하위 컴포넌트에 전달하는 이슈 발생](https://github.com/yul-dev-k/yul-dev-blog/commit/c3259d051497e6cc7ed58be3a9316a7158f2d776)                                                                                                                 | 하위 컴포넌트 React.forwordRef 감싸서 ref 전달                                 | [React 컴포넌트에 ref props 전달하기 (feat. forwardRef, useImperativeHandle)](https://url.kr/xm7kzp) / **hoontae24.blog**님 블로그     |
| 04      | [height가 width 크기에 맞춰 항상 정사각형을 유지하기 위해 가상돔인 width의 값을 리사이즈될 때마다 값 구해야 하는 이슈 발생](https://github.com/yul-dev-k/yul-dev-blog/commit/fb4be1ba9f390572ccda7dd539dfbf84358b7d1e)                                | window의 `resize` 이벤트를 통해 받아올 수 있다.                                | [stack overflow](https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element)                                 |
| 05      | [useEffect 마운트 시 ref값을 받아와도 첫 렌더링 시 0으로 받아와지는 이슈](https://github.com/yul-dev-k/yul-dev-blog/commit/fb4be1ba9f390572ccda7dd539dfbf84358b7d1e#:~:text=const%20getWidth%20%3D%20()%20%3D%3E%20refElWidth.current.offsetWidth%3B) | C3                                                                             | d3                                                                                                                                     |

### Commit Message Convention

> **참고** <br> <https://velog.io/@archivvonjang/Git-Commit-Message-Convention>

차후 협업을 대비해 깃 컨벤션을 설정하여 작업을 진행했습니다.

| **Tag Name** | **Description**                                       |
| ------------ | ----------------------------------------------------- |
| Feat         | 새로운 기능 추가                                      |
| Fix          | 버그 수정                                             |
| Design       | CSS 등 사용자 UI 디자인 변경                          |
| Style        | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| Comment      | 필요한 주석 추가 및 변경                              |
| Rename       | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
| Remove       | 파일을 삭제하는 작업만 수행한 경우                    |
| Docs         | 문서 수정                                             |
| Update       | 코드와는 무관한 것이 수정 및 업데이트 된 경우         |
