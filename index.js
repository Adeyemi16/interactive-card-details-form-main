
  const btn = document.getElementById("btn");
  btn.addEventListener('click', function master(){
    let num = document.getElementById("cNum").value;
    let nam = document.getElementById("cName").value;
    let dateM = document.getElementById("month").value;
    let dateY = document.getElementById("year").value;
    let cvc = document.getElementById("cvcB").value;
    document.getElementById("number").innerHTML=num;
    document.getElementById("name").innerHTML = nam;
    document.getElementById("dateA").innerHTML = dateM +"/";
    document.getElementById("dateB").innerHTML = dateY;
    document.getElementById("cvc").innerHTML = cvc;
   let clicked=  document.getElementById("clicked").innerHTML;
    document.getElementById("second").innerHTML = clicked
  })
