apx.addEventListener("pageBubble", function (Event, ctx) {
  with (ctx) {
    if (!Event.target) {
      if (Event.type == "Page Create") {
        onPageCreate();
      }
    } else {
      var label = Event.target.get("label");
      if (Event.type == "Tap") {
        if (label.indexOf("r$next_") > -1) {
          onTapNext();
        } else if (label.indexOf("r$check_") > -1) {
          onTapCheck();
        } else if (label == "r$popup") {
          onTapPopup();
        } else if (label == "r$exit") {
          $W("mlc$popup").moveTo(720, 0);
        } else if (label == "r$sound") {
          $W("a$sound").changeState("Play");
        } else if (label == "i$replay") {
          reset();
        } else if (label == "b$link") {
          window.location.href = "https://forms.gle/LauzGsCVbD9rvot7A";
        }
      }
    }

    /**
     * Page Create
     */
    function onPageCreate() {
      var textAttributes =
        "type='text' autocomplete='off' autocapitalize='off' autocorrect='off' style='position: absolute; box-sizing: border-box; margin: 0px; padding: 0px; outline: none; background-color: transparent; border: 0px none; text-shadow: none; color: rgb(0, 0, 0); opacity: 1; width: 100%; height: 100%; line-height: 36px; left: 0px; top: 0px; text-align: center; font-family: NotoSans-Bold; font-size: 40px; cursor: inherit; font-style: normal; font-weight: normal; text-decoration: none; transform: none; letter-spacing: normal; display: block; z-index: 1000000005;' placeholder=''";

      $W("r$inputTextName").set(
        "text",
        "[[HTML]] <input id='inputTextName'" + textAttributes + ">"
      );
      $W("r$inputTextHP").set(
        "text",
        "[[HTML]] <input id='inputTextHP'" + textAttributes + ">"
      );
      $W("r$inputTextWish").set(
        "text",
        "[[HTML]] <input id='inputTextWish'" + textAttributes + ">"
      );
      $W("r$inputTextSign_1").set(
        "text",
        "[[HTML]] <input id='inputTextSign_1'" + textAttributes + ">"
      );
      $W("r$inputTextSign_2").set(
        "text",
        "[[HTML]] <input id='inputTextSign_2'" + textAttributes + ">"
      );
      $W("r$inputTextTree_1").set(
        "text",
        "[[HTML]] <input id='inputTextTree_1'" + textAttributes + ">"
      );
      $W("r$inputTextTree_2").set(
        "text",
        "[[HTML]] <input id='inputTextTree_2'" + textAttributes + ">"
      );
      $W("r$inputTextTop_1").set(
        "text",
        "[[HTML]] <input id='inputTextTop_1'" + textAttributes + ">"
      );
      $W("r$inputTextTop_2").set(
        "text",
        "[[HTML]] <input id='inputTextTop_2'" + textAttributes + ">"
      );
      $W("r$inputTextTreasure_1").set(
        "text",
        "[[HTML]] <input id='inputTextTreasure_1'" + textAttributes + ">"
      );
      $W("r$inputTextTreasure_2").set(
        "text",
        "[[HTML]] <input id='inputTextTreasure_2'" + textAttributes + ">"
      );
      $W("r$inputTextRole_1").set(
        "text",
        "[[HTML]] <input id='inputTextRole_1'" + textAttributes + ">"
      );
      $W("r$inputTextRole_2").set(
        "text",
        "[[HTML]] <input id='inputTextRole_2'" + textAttributes + ">"
      );
      $W("r$inputTextHand_1").set(
        "text",
        "[[HTML]] <input id='inputTextHand_1'" + textAttributes + ">"
      );
      $W("r$inputTextHand_2").set(
        "text",
        "[[HTML]] <input id='inputTextHand_2'" + textAttributes + ">"
      );
      $W("r$inputTextPosition_1").set(
        "text",
        "[[HTML]] <input id='inputTextPosition_1'" + textAttributes + ">"
      );
      $W("r$inputTextPosition_2").set(
        "text",
        "[[HTML]] <input id='inputTextPosition_2'" + textAttributes + ">"
      );
      $W("r$inputTextFigure_1").set(
        "text",
        "[[HTML]] <input id='inputTextFigure_1'" + textAttributes + ">"
      );
      $W("r$inputTextFigure_2").set(
        "text",
        "[[HTML]] <input id='inputTextFigure_2'" + textAttributes + ">"
      );

      set("$inputTextName", window.document.getElementById("inputTextName"));
      set("$inputTextHP", window.document.getElementById("inputTextHP"));
      set("$inputTextWish", window.document.getElementById("inputTextWish"));
      set(
        "$inputTextSign_1",
        window.document.getElementById("inputTextSign_1")
      );
      set(
        "$inputTextSign_2",
        window.document.getElementById("inputTextSign_2")
      );
      set(
        "$inputTextTree_1",
        window.document.getElementById("inputTextTree_1")
      );
      set(
        "$inputTextTree_2",
        window.document.getElementById("inputTextTree_2")
      );
      set("$inputTextTop_1", window.document.getElementById("inputTextTop_1"));
      set("$inputTextTop_2", window.document.getElementById("inputTextTop_2"));
      set(
        "$inputTextTreasure_1",
        window.document.getElementById("inputTextTreasure_1")
      );
      set(
        "$inputTextTreasure_2",
        window.document.getElementById("inputTextTreasure_2")
      );
      set(
        "$inputTextRole_1",
        window.document.getElementById("inputTextRole_1")
      );
      set(
        "$inputTextRole_2",
        window.document.getElementById("inputTextRole_2")
      );
      set(
        "$inputTextHand_1",
        window.document.getElementById("inputTextHand_1")
      );
      set(
        "$inputTextHand_2",
        window.document.getElementById("inputTextHand_2")
      );
      set(
        "$inputTextPosition_1",
        window.document.getElementById("inputTextPosition_1")
      );
      set(
        "$inputTextPosition_2",
        window.document.getElementById("inputTextPosition_2")
      );
      set(
        "$inputTextFigure_1",
        window.document.getElementById("inputTextFigure_1")
      );
      set(
        "$inputTextFigure_2",
        window.document.getElementById("inputTextFigure_2")
      );

      setTimeout(function () {
        $W("mlc$main").changeState("Layer2");
      }, 2000);
    }

    /**
     * 다음 버튼 클릭
     */
    function onTapNext() {
      var target = Event.target;
      var targetNum = target.get("label").split("_")[1];
      var main = $W("mlc$main");

      if (targetNum != 4) {
        main.changeState("Layer" + (parseInt(targetNum) + 1));
      } else {
        main.changeState("Layer6");
      }

      if (targetNum == 10) {
        setTimeout(function () {
          main.changeState("Layer" + (parseInt(targetNum) + 2));
        }, 5000);
        setTimeout(function () {
          main.changeState("Layer" + (parseInt(targetNum) + 3));
        }, 10000);
      }
    }

    /**
     * 체크 버튼 클릭
     */
    function onTapCheck() {
      var target = Event.target;
      var targetNum = target.get("label").split("_")[1];
      var main = $W("mlc$main");
      var answer = "";

      // 이름, 연락처
      if (targetNum == 5) {
        if (
          get("$inputTextName").value !== "" &&
          get("$inputTextHP").value !== ""
        ) {
          main.changeState("Layer6");
        } else {
          $W("t$guide").set("visibility", "visible");
        }
      }
      // 소원
      else if (targetNum == 9) {
        if (get("$inputTextWish").value !== "") {
          $W("mt$wish").set("text", get("$inputTextWish").value);
          main.changeState("Layer10");
        }
      }
      // 간판1
      else if (targetNum == 15) {
        answer = ["풍경소리"];
        if (get("$inputTextSign_1").value !== "") {
          if (get("$inputTextSign_1").value == "피치") {
            main.changeState("Layer16");
          } else if (answer.indexOf(get("$inputTextSign_1").value) > -1) {
            main.changeState("Layer17");
            setTimeout(function () {
              main.changeState("Layer18");
            }, 5000);
            setTimeout(function () {
              main.changeState("Layer19");
            }, 10000);
          }
        }
      }
      // 간판2
      else if (targetNum == 16) {
        answer = ["풍경소리"];
        if (get("$inputTextSign_2").value !== "") {
          if (answer.indexOf(get("$inputTextSign_2").value) > -1) {
            main.changeState("Layer17");
            setTimeout(function () {
              main.changeState("Layer18");
            }, 5000);
            setTimeout(function () {
              main.changeState("Layer19");
            }, 10000);
          }
        }
      }
      // 나무1
      else if (targetNum == 19) {
        answer = ["느티나무", "느티 나무"];
        if (get("$inputTextTree_1").value !== "") {
          if (get("$inputTextTree_1").value == "피치") {
            main.changeState("Layer20");
          } else if (answer.indexOf(get("$inputTextTree_1").value) > -1) {
            main.changeState("Layer21");
          }
        }
      }
      // 나무2
      else if (targetNum == 20) {
        answer = ["느티나무", "느티 나무"];
        if (get("$inputTextTree_2").value !== "") {
          if (answer.indexOf(get("$inputTextTree_2").value) > -1) {
            main.changeState("Layer21");
          }
        }
      }
      // 석탑1
      else if (targetNum == 21) {
        answer = ["9층", "구층", "9", "구"];
        if (get("$inputTextTop_1").value !== "") {
          if (get("$inputTextTop_1").value == "피치") {
            main.changeState("Layer22");
          } else if (answer.indexOf(get("$inputTextTop_1").value) > -1) {
            main.changeState("Layer23");
          }
        }
      }
      // 석탑2
      else if (targetNum == 22) {
        answer = ["9층", "구층", "9", "구"];
        if (get("$inputTextTop_2").value !== "") {
          if (answer.indexOf(get("$inputTextTop_2").value) > -1) {
            main.changeState("Layer23");
          }
        }
      }
      // 보물1
      else if (targetNum == 23) {
        answer = ["범종"];
        if (get("$inputTextTreasure_1").value !== "") {
          if (get("$inputTextTreasure_1").value == "피치") {
            main.changeState("Layer24");
          } else if (answer.indexOf(get("$inputTextTreasure_1").value) > -1) {
            main.changeState("Layer25");
          }
        }
      }
      // 보물2
      else if (targetNum == 24) {
        answer = ["범종"];
        if (get("$inputTextTreasure_2").value !== "") {
          if (answer.indexOf(get("$inputTextTreasure_2").value) > -1) {
            main.changeState("Layer25");
          }
        }
      }
      // 역할1
      else if (targetNum == 25) {
        answer = ["치료", "치유", "약", "위로"];
        if (get("$inputTextRole_1").value !== "") {
          if (get("$inputTextRole_1").value == "피치") {
            main.changeState("Layer26");
          } else if (answer.indexOf(get("$inputTextRole_1").value) > -1) {
            main.changeState("Layer27");
            setTimeout(function () {
              main.changeState("Layer28");
            }, 5000);
          }
        }
      }
      // 역할2
      else if (targetNum == 26) {
        answer = ["치료", "치유", "약", "위로"];
        if (get("$inputTextRole_2").value !== "") {
          if (answer.indexOf(get("$inputTextRole_2").value) > -1) {
            main.changeState("Layer27");
            setTimeout(function () {
              main.changeState("Layer28");
            }, 5000);
          }
        }
      }
      // 손1
      else if (targetNum == 28) {
        answer = ["두개", "2개", "2", "둘"];
        if (get("$inputTextHand_1").value !== "") {
          if (get("$inputTextHand_1").value == "피치") {
            main.changeState("Layer29");
          } else if (answer.indexOf(get("$inputTextHand_1").value) > -1) {
            main.changeState("Layer30");
          }
        }
      }
      // 손2
      else if (targetNum == 29) {
        answer = ["두개", "2개", "2", "둘"];
        if (get("$inputTextHand_2").value !== "") {
          if (answer.indexOf(get("$inputTextHand_2").value) > -1) {
            main.changeState("Layer30");
          }
        }
      }
      // 호랑이 위치1
      else if (targetNum == 30) {
        answer = ["꼬리"];
        if (get("$inputTextPosition_1").value !== "") {
          if (get("$inputTextPosition_1").value == "피치") {
            main.changeState("Layer31");
          } else if (answer.indexOf(get("$inputTextPosition_1").value) > -1) {
            main.changeState("Layer32");
            setTimeout(function () {
              main.changeState("Layer33");
            }, 5000);
          }
        }
      }
      // 호랑이 위치2
      else if (targetNum == 31) {
        answer = ["꼬리"];
        if (get("$inputTextPosition_2").value !== "") {
          if (answer.indexOf(get("$inputTextPosition_2").value) > -1) {
            main.changeState("Layer32");
            setTimeout(function () {
              main.changeState("Layer33");
            }, 5000);
          }
        }
      }
      // 도형1
      else if (targetNum == 33) {
        answer = ["-%=+x", "-%=+*"];
        if (get("$inputTextFigure_1").value !== "") {
          if (get("$inputTextFigure_1").value == "피치") {
            main.changeState("Layer34");
          } else if (answer.indexOf(get("$inputTextFigure_1").value) > -1) {
            main.changeState("Layer35");
          }
        }
      }
      // 도형2
      else if (targetNum == 34) {
        answer = ["-%=+x", "-%=+*"];
        if (get("$inputTextFigure_2").value !== "") {
          if (answer.indexOf(get("$inputTextFigure_2").value) > -1) {
            main.changeState("Layer35");
          }
        }
      }
    }

    /**
     * 지도 확대 클릭
     */
    function onTapPopup() {
      var popup = $W("mlc$popup");
      popup.zIndexTo("Top");
      popup.moveTo(0, 0);
    }
  }
});
