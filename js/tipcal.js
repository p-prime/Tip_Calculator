
  function calculate() {

    var bill = document.getElementById("bill").value;

    var tip = document.getElementById("Tip").value;

    var person = document.getElementById("person").value;

    if ( bill <= 0 || tip <= 0 ) {
      alert("Please Enter the Validate Value(s)");
      return;
    }

    if ( person === "" || person <= 1 ) {

      person = 1;// assign default as 1

      //hiding per person 
      document.getElementById("each").style.display = "none";// for tip

      document.getElementById("Each").style.display = "none";// for total
          
    }
    else {
      document.getElementById("each").style.display = "inline-block";// for tip

      document.getElementById("Each").style.display = "inline-block";// for total
    }
        // calculate tip

    var totaltip = bill * ( tip / 100 ) / person; // to calculate tip per person
    
    var total_amt = bill / person + totaltip; // to calculate total per person

    totaltip = Math.round ( totaltip * 100 ) / 100; 
    // round upto two decimal place
    totaltip = totaltip.toFixed(2);

    total_amt=Math.round ( total_amt * 100) / 100 ; 
    // round upto two decimal place
    total_amt = total_amt.toFixed(2);

    document.getElementById("t_tip").style.display = "inline-block";

    document.getElementById("t_tip").innerHTML = "$" + totaltip;

    document.getElementById("tip").style.display = "inline-block";

    document.getElementById("tip").innerHTML = "$" + total_amt;

    // for printing thanks
    document.getElementById("greet").style.display = "block";

  }
  //Initially hiding per person 
      document.getElementById("each").style.display = "none";// for tip

      document.getElementById("Each").style.display = "none";// for total

  //hiding thanks
  document.getElementById("greet").style.display = "none";

  //function call on click
  document.getElementById("CALCULATE").onclick = function() {
    calculate();
  };