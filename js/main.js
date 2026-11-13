function puzzel() {
  var num = Math.floor(Math.random() * 50) + 1;
  var i = 6;
  var flag;
  var win = 0;
  var ans = [];
  while (i) {
    ans.push(parseInt(prompt("Guess a Number 1-50" + " (" + num + ")")));
    flag =
      isNaN(ans[ans.length - 1]) ||
      ans[ans.length - 1] < 1 ||
      ans[ans.length - 1] > 50;
    while (flag) {
      ans.pop();
      ans.push(parseInt(prompt("Invalid try agan!")));

      flag =
        isNaN(ans[ans.length - 1]) ||
        ans[ans.length - 1] < 1 ||
        ans[ans.length - 1] > 50;
    }

    if (ans[ans.length - 1] > num) {
      alert("the number is too high!");
    } else if (ans[ans.length - 1] < num) {
      alert("the number is too low!");
    } else {
      alert("Valid Guess!");
      win = 1;
      break;
    }
    i--;
  }
  alert("you enterd " + ans.join() + " the true number is " + num);

  // ===========================================================================

  sysControl = document.getElementById("sys-control");

  if (win) {
    setTimeout(function () {
      var div = document.createElement("div");

      div.classList.add("control", "remove"); 
      div.innerHTML = `
            <img src="media/sys.jpg" width="50%" style="margin-right:20px">
            <form>
                <input type="button" value="ON" class="on">
                <input type="button" value="OFF" class="off">
            </form>
        `;

      sysControl.after(div);
      sysControl.remove();
    }, 1000);
  } else {
    var p = document.createElement("p");

    p.innerHTML = `
  Cannot Access the IoT Device!
  `;
    p.setAttribute("class", "remove");
    var accessDiv = document.getElementsByClassName("acssess")[0];
    accessDiv.after(p);
    sysControl.remove();
  }

  var reset = document.getElementById("reset");

  reset.innerHTML = `
  <button class="on" onclick="rest()" style="margin: 20px;">Reset</button>
`;
}
function rest() {
  
  var ele = document.getElementsByClassName("remove");
  while (ele.length > 0) {
    ele[0].remove();
  }

  var accessDiv = document.getElementsByClassName("acssess")[0];
  accessDiv.innerHTML = `
    <button onclick="puzzel()" class="on" id="sys-control" style="margin: 20px;">
      Access IoT Device
    </button>
  `;
  document.getElementById("reset").innerHTML = "";
}
