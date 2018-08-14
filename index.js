FacebookContestWinner = {
  // List all commented users
  comment(number = 5, pickUsers = []) {
    let users = {};
    let pickWinners = {};
    document.querySelectorAll("div[class=permalinkPost], div[class=UFIList] div[id^=comment_]")
      .forEach((element, index) => {
        let user = element.querySelector(".UFICommentActorName");
        let userId = this.parseURL(user.dataset.hovercard);
        let tempUrl = user.href.split("?")[0];
        users[index] = {
          name: user.textContent,
          id: userId,
          url: (tempUrl.indexOf("profile.php") === -1) ? tempUrl : `${tempUrl}?id=${userId}`,
          pic: element.querySelector(".UFIActorImage").src,
          content: element.querySelector(".UFICommentBody").textContent,
        };

        if (pickUsers.indexOf(`${users[index].id}`) !== -1) {
          pickWinners[`${users[index].id}`] = users[index];
        }
        //console.log(`%c ${users[index].name}(${users[index].id}): ${users[index].url}`, "color: #ffffff; background: #db178a; border: 1px solid #ae0c6b; border-radius: 3px;");
      });
    this.pick(users, number, pickWinners);
  },

  // List all shared users
  share(number = 5, pickUsers = []) {
    let users = {};
    let pickWinners = {};
    document.querySelectorAll("div[id=repost_view_permalink] div[role=article] > div[id^=u_]")
      .forEach((element, index) => {
        let userProfile = element.querySelector("span[class^=fwb] > a[data-hovercard]");
        let userContent = element.querySelector("div > .userContent > p");
        let userId = this.parseURL(userProfile.dataset.hovercard);
        let tempUrl = userProfile.href.split("?")[0];
        users[index] = {
          name: userProfile.textContent,
          id: userId,
          url: (tempUrl.indexOf("profile.php") === -1) ? tempUrl : `${tempUrl}?id=${userId}`,
          pic: element.querySelector("img[role=img]").src,
          content: (userContent) ? userContent.textContent : "",
        };

        if (pickUsers.indexOf(`${users[index].id}`) !== -1) {
          pickWinners[`${users[index].id}`] = users[index];
        }
        //console.log(`%c ${users[index].name}(${users[index].id}): ${users[index].url}`, "color: #ffffff; background: #db178a; border: 1px solid #ae0c6b; border-radius: 3px;");
      });
    this.pick(users, number, pickWinners);
  },

  // Pick one or multiple winners
  pick(users, number = 5, pickWinners = {}) {
    const userLength = Object.keys(users).length;
    const pickWinnerLength = Object.keys(pickWinners).length;
    let winners = {};
    let winnerIndex = 0;
    let winnerIDs = [];
    console.log("%c 🎉 Winners!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)");

    if (pickWinnerLength > 0) {
      for (let pickKey in pickWinners) {
        console.log(`%c ${pickWinners[pickKey].name} ${pickWinners[pickKey].url}`, "color: #ffffff; background: #1d69db; border: 1px solid #0f4ba6; border-radius: 3px;");
        winners[pickWinners[pickKey].id] = pickWinners[pickKey];
        winnerIDs.push(pickWinners[pickKey].id);
      }
    } else {
      do {
        if (userLength < number) {
          number = userLength;
        }

        let winUser = users[Math.floor(Math.random() * userLength)];
        if (winners[winUser.id] === undefined) {
          console.log(`%c ${winUser.name} ${winUser.url}`, "color: #ffffff; background: #1d69db; border: 1px solid #0f4ba6; border-radius: 3px;");
          winners[winUser.id] = winUser;
          winnerIDs.push(winUser.id);
          winnerIndex++;
        }
      } while (winnerIndex < number);
    }

    console.groupCollapsed("%c ⭐ Facebook Contest Winner ⭐ ", "color: #ffffff; background: #000000; border: 1px solid #000000;");
      console.log("Help 🙋 https://github.com/gaerae/facebook-contest-winner");
      console.group("%c Winner Details ", "color: #ffffff; background: #db178a; border: 1px solid #ae0c6b; border-radius: 3px;");
        console.table(winners);
      console.groupEnd();
      console.group("%c Optional Parameter ", "color: #ffffff; background: #db178a; border: 1px solid #ae0c6b; border-radius: 3px;");
        console.log(winnerIDs);
      console.groupEnd();
    console.groupEnd();
  },

  // parse a url
  parseURL(url = "") {
    let tempParsing = [], tempSplit, tempUrls = url.slice(url.indexOf("?") + 1).split("&");
    for (let i = 0; i < tempUrls.length; i++) {
      tempSplit = tempUrls[i].split("=");
      tempParsing[tempSplit[0]] = tempSplit[1];
    }
    return (tempParsing["id"]) ? tempParsing["id"] : "";
  },

  // Automatically view all comments
  viewAllComments() {
    let pager = 0;
    let scroll = setInterval(() => {
      let tempPager = document.querySelector('a[class=UFIPagerLink]');
      if (tempPager) {
        tempPager.click();
        pager++;
        console.log(`a ${pager} pager.`);
      } else {
        clearInterval(scroll);
        console.log("Execution finished.");
      }
    }, 2000);
  },

  // Automatically view all shares
  viewAllShares() {
    let pageY = 0;
    let scroll = setInterval(() => {
      window.scrollBy(0, 1000);
      let currentPageY = window.pageYOffset;
      if (pageY !== currentPageY) {
        pageY = currentPageY;
        console.log(`pageYOffset: ${pageY}`);
      } else {
        clearInterval(scroll);
        console.log("Execution finished.");
      }
    }, 2000);
  },
};

// Usage
// FacebookContestWinner.comment(3);
// FacebookContestWinner.share(3);
// FacebookContestWinner.viewAllComments();
// FacebookContestWinner.viewAllShares();
