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

예제는 당첨자 3명을 기준으로 작성되었습니다.

예제: [Facebook Comment](https://www.facebook.com/zuck/posts/10105044271137001)

```javascript
// 댓글에서 우승자 추첨
fcw.comment(3);

// 공유에서 우승자 추첨
fcw.share(3);

// 좋아요에서 우승자 추첨
fcw.like(3);

// 공유와 댓글 모두 참여한 우승자 추첨
fcw.share_comment(3);

// 좋아요와 댓글 모두 참여한 우승자 추첨
fcw.like_comment(3);
```


## 화면
#### 결과 화면
![Facebook Contest Winner](https://4.bp.blogspot.com/-2ueejgjX-xo/W2l2vZSYlWI/AAAAAAAANGA/DhgO9pnAeoocSia-LN3n-T23IonWYVzLgCLcBGAs/s1600/facebook-contest-winner.png)

#### 페이스북 포스트 화면
![](https://4.bp.blogspot.com/-Wuwh37vH9hY/W2mCigZpI6I/AAAAAAAANGo/_Cc5TJJF50Mop05l6-254l-Vb6j_m2bxgCLcBGAs/s1600/facebook-contest-winner-timeline-ko.png)
