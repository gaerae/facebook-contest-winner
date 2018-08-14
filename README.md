![Facebook Contest Winner Title](https://1.bp.blogspot.com/-C6_kRLuy3m4/W2l4tkUWmlI/AAAAAAAANGM/0SvXoYTyksEhRG0ipEz0pgppd-YL4QP3ACLcBGAs/s1600/facebook-contest-winner-title.png)
# Facebook Contest Winner
A easily and quickly way to pick a winner for Facebook timeline promotion.

**[😎 English](README.md)** • [한국어 (Korean)](https://blog.gaerae.com/2018/08/facebook-contest-winner.html)

## Overview

📋 You can easily and quickly pick a winner by browser.
1. Open the Facebook page or group post.
2. Open the Facebook comment or share dialog in a new tab.
3. Open the Console in browser.(Windows or Linux: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> / macOS: <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>J</kbd>)
4. Copy and Paste all the contents of the [index.js](https://raw.githubusercontent.com/gaerae/facebook-contest-winner/master/index.js) file.
5. Click the Button to View more comments or shares.
6. Go to [Usage](#usage).

## Usage

#### 🎉 Pick a Winner from Comment

Example: [Facebook Comment](https://www.facebook.com/zuck/posts/10105044271137001)

```javascript
// Number of winners
FacebookContestWinner.comment(3);

// Designated winners is Optional Parameter
FacebookContestWinner.comment(3, [123, 456, 789]);
```

#### 🎉 Pick a Winner from Share

Example: [Facebook Share](https://www.facebook.com/shares/view?id=10105044271137001)

```javascript
// Number of winners
FacebookContestWinner.share(3);

// Designated winners is Optional Parameter
FacebookContestWinner.comment(3, [123, 456, 789]);
```

#### 📜 Automatically view all comments (Optional)
Please use it on the comment page.

Example: [Facebook Comment](https://www.facebook.com/zuck/posts/10105044271137001)

```javascript
FacebookContestWinner.viewAllComments();
```

#### 📜 Automatically view all shares (Optional)
Please use it on the share page.

Example: [Facebook Share](https://www.facebook.com/shares/view?id=10105044271137001)

```javascript
FacebookContestWinner.viewAllShares();
```

## Screen
#### Result
![Facebook Contest Winner](https://4.bp.blogspot.com/-2ueejgjX-xo/W2l2vZSYlWI/AAAAAAAANGA/DhgO9pnAeoocSia-LN3n-T23IonWYVzLgCLcBGAs/s1600/facebook-contest-winner.png)

#### Facebook post
![](https://4.bp.blogspot.com/-8lNuqe8NPVc/W2l8YJyvohI/AAAAAAAANGY/a4C2k7sordUvxfMCgf6xbYJhjlXUmdtpwCLcBGAs/s1600/facebook-contest-winner-timeline.png)
