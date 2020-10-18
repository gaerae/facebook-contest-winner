(function (){
  /**
   * Random winner picker
   */
  function winner(users, numberOfWinners) {
    // Quick pick winning user numbers array 
    let userWinning = [];
    let randomIndex = 0;
    for (let i = 0; i < numberOfWinners; i++) {
      randomIndex = Math.floor(Math.random() * users.length);

      if (users[randomIndex].name != ""  && users[randomIndex].name != null) {
        userWinning[i] = users[randomIndex];
      }
      // Gets random numbers and removes them after use
      users.splice(randomIndex, 1);
    }

    // Header Title
    console.info("%c🎉 Winner!", "font-weight: bold; font-size: 50px; padding: 20px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)");


    // Summary Information
    let textUserWinning = "";
    userWinning.forEach((element) => {
      console.info(`%c   %c ${element.name} %c ${element.id} `, `background:url(${element.pic}) no-repeat; backdround-size: contain; padding: 15px; font-size: 20px; `, "padding: 15px; font-weight: bold; font-size: 20px; color: #ffffff; background: #1d69db", "padding: 15px; font-size: 20px; color: #1d69db; background: #ffffff;");
      textUserWinning += `● ${element.name} (${element.id})\n`;
    });

    // Detail Information
    console.info("%c", "padding: 10px;");
    console.groupCollapsed(`%c ⭐ ${Object.keys(userWinning).length} Winners and Results ⭐ `, "font-weight: bold; font-size: 15px; color: #FFC83D; background: #000000;padding: 10px;");
    console.info("Help 🙋 https://github.com/gaerae/facebook-contest-winner");

    console.group("%c Winners ", "color: #ffffff; background: #db178a; border: 1px solid #ae0c6b; border-radius: 3px;");
    console.table(userWinning);
    console.info(textUserWinning);
    console.groupEnd();

    console.group("%c excluding winners ", "color: #ffffff; background: #db178a; border: 1px solid #ae0c6b; border-radius: 3px;");
    console.info(users);
    console.groupEnd();
    console.groupEnd();
  }

  /**
   * List Analysis
   */
  function listAnalysis(type, numberOfWinners) {
    let listElement = {
      comment : "div[data-visualcompletion=ignore-dynamic] div[role=article]",
      share : "div[role=dialog] div.sjgh65i0:not([role=progressbar])",
      like : "div[data-visualcompletion=ignore-dynamic] div.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi.a8c37x1j",
    }

    let tempTypes = type.split("_");
    let tempUsers = [];
    let tempUserKeys = [];
    let users = [];

    // Type
    tempTypes.forEach((typeKey, typeIndex) => {
      tempUsers[typeIndex] = [];
      tempUserKeys[typeIndex] = [];

      // DOM Selector
      document.querySelectorAll(listElement[typeKey]).forEach((element, index) => {
        let user = userAnalysis(typeKey, element);
        tempUsers[typeIndex][index] = user;
        tempUserKeys[typeIndex][index] = user.id;

        // Duplicate User
        if (typeIndex === 1 && tempUserKeys[typeIndex-1].indexOf(user.id) !== -1) {
          users.push(user);
        }
      });
    });

    // winner picker
    users = (users.length > 0) ? users : tempUsers[0];

    // Debug Information
    clear();
    console.groupCollapsed("%c⭐ Facebook Contest Winner ⭐ ", "font-weight: bold; font-size: 15px; color: #FFC83D; background: #000000;padding: 10px;");
    console.info("tempUsers", tempUsers);
    console.info("users", users);
    console.groupEnd();

    winner(users, numberOfWinners)
  }

  /**
   * User Analysis
   */
  function userAnalysis(type, element) {
    let user = {};
    let tempElement = {};
    // user.id
    tempElement = element.querySelector("a[role=link]");
    tempElement = tempElement ? tempElement.href : "";
    user.id = tempElement
      .split("comment_id")[0]
      .split("__cft__")[0]
      .replace(/https:\/\/www\.facebook\.com\//, "")
      .replace(/profile.php\?id=/, "")
      .replace(/[?&]/g, "")
      .replace(/\/$/, "");

    // user.name
    tempElement = {};
    switch (type) {
      case "comment":
      case "share":
        tempElement = element.querySelector("a[role=link] span");
        user.name = tempElement ? tempElement.textContent : "";
        break;
      case "like":
        tempElement = element.querySelector("a[role=link]");
        user.name = tempElement ? tempElement.getAttribute("aria-label") : "";
        break;
      default:
        user.name = "";
        break;
    }

    // user.text
    tempElement = {};
    switch (type) {
      case "comment":
        tempElement = element.querySelector("div.ecm0bbzt.e5nlhep0.a8c37x1j");
        user.text = tempElement ? tempElement.textContent : "";
        break;
      case "share":
        tempElement = element.querySelector("div[id=jsc_c_v]");
        user.text = tempElement ? tempElement.textContent : "";
        break;
      default:
        user.text = "";
        break;
    }

    // user.pic
    tempElement = {};
    tempElement = element.querySelector("image");
    user.pic = tempElement ? tempElement.getAttributeNS('http://www.w3.org/1999/xlink', 'href') : "";

    return user;
  }

  /**
   * FacebookContestWinner
   */
  fcw = {
    comment : (numberOfWinners) => {listAnalysis("comment", numberOfWinners)},
    share : (numberOfWinners) => {listAnalysis("share", numberOfWinners)},
    like : (numberOfWinners) => {listAnalysis("like", numberOfWinners)},
    share_comment : (numberOfWinners) => {listAnalysis("share_comment", numberOfWinners)},
    like_comment : (numberOfWinners) => {listAnalysis("like_comment", numberOfWinners)},
  }
})();
