![Facebook Contest Winner Title](https://1.bp.blogspot.com/-C6_kRLuy3m4/W2l4tkUWmlI/AAAAAAAANGM/0SvXoYTyksEhRG0ipEz0pgppd-YL4QP3ACLcBGAs/s1600/facebook-contest-winner-title.png)

# 페이스북 프로모션 당첨자 추첨기
페이스북에서 댓글 혹은 공유한 사용자 중 당첨자를 추출하기 위한 쉽고 빠른 도구입니다.

[English](readme-en.md) • **[😎 한국어 (Korean)](readme-ko.md)**

## 개요

📋 브라우저에서 당첨자를 쉽고 빠르게 선택할 수 있는 도구입니다.
1. 이벤트를 진행한 페이스북 페이지 혹은 그룹의 게시물로 브라우저로 열어주세요.
2.  댓글 혹은 공유 링크를 새로운 탭으로 열어주세요.
3. 브라우저 개발자 도구의 콘솔 창을 열어주세요. (Windows or Linux: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> / macOS: <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>J</kbd>)
4. [index.js](https://raw.githubusercontent.com/gaerae/facebook-contest-winner/master/index.js) 파일의 전체 내용을 복사 후 앞에서 열었던 콘솔 창에 붙여넣기해주세요.
5. 댓글 및 공유 목록이 모두 보이도록 해주세요.
6. 이제 아래 "사용 방법"을 참고하여 실행해주세요.

## 사용 방법

#### 🎉 댓글에서 당첨자 추첨 하기

예제: [Facebook Comment](https://www.facebook.com/zuck/posts/10105044271137001)

```javascript
// 당첨자 수를 넣어서 실행하세요.
FacebookContestWinner.comment(3);

// 당첨자 수와 페이스북 사용자 고유 번호를 넣어서 실행하세요.
// 페이스북 사용자 고유 번호를 넣으면, 입력한 사용자가 리스트에 있을 경우 당첨자로 표시됩니다. 
FacebookContestWinner.comment(3, [123, 456, 789]);
```

#### 🎉 공유에서 당첨자 추첨 하기

예제: [Facebook Share](https://www.facebook.com/shares/view?id=10105044271137001)

```javascript
// 당첨자 수를 넣어서 실행하세요.
FacebookContestWinner.share(3);

// 당첨자 수와 페이스북 사용자 고유 번호를 넣어서 실행하세요.
// 페이스북 사용자 고유 번호를 넣으면, 입력한 사용자가 리스트에 있을 경우 당첨자로 표시됩니다. 
FacebookContestWinner.comment(3, [123, 456, 789]);
```

#### 📜 모든 댓글 자동 보기 (옵션)
댓글 페이지에서만 사용하세요.

예제: [Facebook Comment](https://www.facebook.com/zuck/posts/10105044271137001)

```javascript
FacebookContestWinner.viewAllComments();
```

#### 📜 모든 공유 자동 보기 (옵션)
공유 페이지에서만 사용하세요.

예제: [Facebook Share](https://www.facebook.com/shares/view?id=10105044271137001)

```javascript
FacebookContestWinner.viewAllShares();
```

## 화면
#### 결과 화면
![Facebook Contest Winner](https://4.bp.blogspot.com/-2ueejgjX-xo/W2l2vZSYlWI/AAAAAAAANGA/DhgO9pnAeoocSia-LN3n-T23IonWYVzLgCLcBGAs/s1600/facebook-contest-winner.png)

#### 페이스북 포스트 화면
![](https://4.bp.blogspot.com/-Wuwh37vH9hY/W2mCigZpI6I/AAAAAAAANGo/_Cc5TJJF50Mop05l6-254l-Vb6j_m2bxgCLcBGAs/s1600/facebook-contest-winner-timeline-ko.png)
