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
        } else if (label.indexOf("r$inputText") > -1) {
          $W("r$white_" + $W("mlc$main").get("state").split("Layer")[1]).set(
            "visibility",
            "visible"
          );
        } else if (label == "r$back_10") {
          $W("mlc$main").changeState("Layer9");
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

      $W("r$next_11").set("y", $W("r$next_11").get("y") - 500);
      $W("r$next_12").set("y", $W("r$next_12").get("y") - 500);
      $W("r$next_17").set("y", $W("r$next_17").get("y") - 500);
      $W("r$next_18").set("y", $W("r$next_18").get("y") - 500);
      $W("r$next_27").set("y", $W("r$next_27").get("y") - 500);
      $W("r$next_32").set("y", $W("r$next_32").get("y") - 500);
    }

    /**
     * ?????? ?????? ??????
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
        // setTimeout(function(){
        //     main.changeState("Layer" + (parseInt(targetNum)+2));
        // }, 5000);
        // setTimeout(function(){
        //     main.changeState("Layer" + (parseInt(targetNum)+3));
        // }, 10000);
      }
    }

    /**
     * ?????? ?????? ??????
     */
    function onTapCheck() {
      var target = Event.target;
      var targetNum = target.get("label").split("_")[1];
      var main = $W("mlc$main");
      var answer = "";

      // ??????, ?????????
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
      // ??????
      else if (targetNum == 9) {
        if (get("$inputTextWish").value !== "") {
          $W("mt$wish").set("text", get("$inputTextWish").value);
          main.changeState("Layer10");
        }
      }
      // ??????1
      else if (targetNum == 15) {
        answer = ["????????????"];
        if (get("$inputTextSign_1").value !== "") {
          if (get("$inputTextSign_1").value == "??????") {
            main.changeState("Layer16");
          } else if (answer.indexOf(get("$inputTextSign_1").value) > -1) {
            main.changeState("Layer17");
            // setTimeout(function(){
            //     main.changeState("Layer18");
            // }, 5000);
            // setTimeout(function(){
            //     main.changeState("Layer19");
            // }, 10000);
          }
        }
      }
      // ??????2
      else if (targetNum == 16) {
        answer = ["????????????"];
        if (get("$inputTextSign_2").value !== "") {
          if (answer.indexOf(get("$inputTextSign_2").value) > -1) {
            main.changeState("Layer17");
            // setTimeout(function(){
            //     main.changeState("Layer18");
            // }, 5000);
            // setTimeout(function(){
            //     main.changeState("Layer19");
            // }, 10000);
          }
        }
      }
      // ??????1
      else if (targetNum == 19) {
        answer = ["????????????", "?????? ??????"];
        if (get("$inputTextTree_1").value !== "") {
          if (get("$inputTextTree_1").value == "??????") {
            main.changeState("Layer20");
          } else if (answer.indexOf(get("$inputTextTree_1").value) > -1) {
            main.changeState("Layer21");
          }
        }
      }
      // ??????2
      else if (targetNum == 20) {
        answer = ["????????????", "?????? ??????"];
        if (get("$inputTextTree_2").value !== "") {
          if (answer.indexOf(get("$inputTextTree_2").value) > -1) {
            main.changeState("Layer21");
          }
        }
      }
      // ??????1
      else if (targetNum == 21) {
        answer = ["9???", "??????", "9", "???"];
        if (get("$inputTextTop_1").value !== "") {
          if (get("$inputTextTop_1").value == "??????") {
            main.changeState("Layer22");
          } else if (answer.indexOf(get("$inputTextTop_1").value) > -1) {
            main.changeState("Layer23");
          }
        }
      }
      // ??????2
      else if (targetNum == 22) {
        answer = ["9???", "??????", "9", "???"];
        if (get("$inputTextTop_2").value !== "") {
          if (answer.indexOf(get("$inputTextTop_2").value) > -1) {
            main.changeState("Layer23");
          }
        }
      }
      // ??????1
      else if (targetNum == 23) {
        answer = ["??????"];
        if (get("$inputTextTreasure_1").value !== "") {
          if (get("$inputTextTreasure_1").value == "??????") {
            main.changeState("Layer24");
          } else if (answer.indexOf(get("$inputTextTreasure_1").value) > -1) {
            main.changeState("Layer25");
          }
        }
      }
      // ??????2
      else if (targetNum == 24) {
        answer = ["??????"];
        if (get("$inputTextTreasure_2").value !== "") {
          if (answer.indexOf(get("$inputTextTreasure_2").value) > -1) {
            main.changeState("Layer25");
          }
        }
      }
      // ??????1
      else if (targetNum == 25) {
        answer = ["??????", "??????", "???", "??????"];
        if (get("$inputTextRole_1").value !== "") {
          if (get("$inputTextRole_1").value == "??????") {
            main.changeState("Layer26");
          } else if (answer.indexOf(get("$inputTextRole_1").value) > -1) {
            main.changeState("Layer27");
            // setTimeout(function(){
            //     main.changeState("Layer28");
            // }, 5000);
          }
        }
      }
      // ??????2
      else if (targetNum == 26) {
        answer = ["??????", "??????", "???", "??????"];
        if (get("$inputTextRole_2").value !== "") {
          if (answer.indexOf(get("$inputTextRole_2").value) > -1) {
            main.changeState("Layer27");
            // setTimeout(function(){
            //     main.changeState("Layer28");
            // }, 5000);
          }
        }
      }
      // ???1
      else if (targetNum == 28) {
        answer = ["??????", "2???", "2", "???"];
        if (get("$inputTextHand_1").value !== "") {
          if (get("$inputTextHand_1").value == "??????") {
            main.changeState("Layer29");
          } else if (answer.indexOf(get("$inputTextHand_1").value) > -1) {
            main.changeState("Layer30");
          }
        }
      }
      // ???2
      else if (targetNum == 29) {
        answer = ["??????", "2???", "2", "???"];
        if (get("$inputTextHand_2").value !== "") {
          if (answer.indexOf(get("$inputTextHand_2").value) > -1) {
            main.changeState("Layer30");
          }
        }
      }
      // ????????? ??????1
      else if (targetNum == 30) {
        answer = ["??????"];
        if (get("$inputTextPosition_1").value !== "") {
          if (get("$inputTextPosition_1").value == "??????") {
            main.changeState("Layer31");
          } else if (answer.indexOf(get("$inputTextPosition_1").value) > -1) {
            main.changeState("Layer32");
            // setTimeout(function(){
            //     main.changeState("Layer33");
            // }, 5000);
          }
        }
      }
      // ????????? ??????2
      else if (targetNum == 31) {
        answer = ["??????"];
        if (get("$inputTextPosition_2").value !== "") {
          if (answer.indexOf(get("$inputTextPosition_2").value) > -1) {
            main.changeState("Layer32");
            // setTimeout(function(){
            //     main.changeState("Layer33");
            // }, 5000);
          }
        }
      }
      // ??????1
      else if (targetNum == 33) {
        answer = ["-%=+x", "-%=+*", "-??=+??", "-??=+*", "- ?? = + ??", "- ?? = + *"];
        if (get("$inputTextFigure_1").value !== "") {
          if (get("$inputTextFigure_1").value == "??????") {
            main.changeState("Layer34");
          } else if (answer.indexOf(get("$inputTextFigure_1").value) > -1) {
            main.changeState("Layer35");
          }
        }
      }
      // ??????2
      else if (targetNum == 34) {
        answer = ["-%=+x", "-%=+*", "-??=+??", "-??=+*", "- ?? = + ??", "- ?? = + *"];
        if (get("$inputTextFigure_2").value !== "") {
          if (answer.indexOf(get("$inputTextFigure_2").value) > -1) {
            main.changeState("Layer35");
          }
        }
      }
    }

    /**
     * ?????? ?????? ??????
     */
    function onTapPopup() {
      var popup = $W("mlc$popup");
      popup.zIndexTo("Top");
      popup.moveTo(0, 0);
    }
  }
});
