

function changeVisible(eleId)
{
    //remove link clicked from invisible class
    document.getElementById(eleId).classList.remove("invis") ;

    //set nav to active
    if (eleId == "sec1") {
        document.getElementById('a1').className = "active";
        //reset the rest to in-active
        document.getElementById('a2').classList.remove('active');
        document.getElementById('a3').classList.remove('active');
        document.getElementById('a4').classList.remove('active');

        //make sure the rest are invisible
        document.getElementById('sec2').className = "invis";
        document.getElementById('sec3').className = "invis";
        document.getElementById('sec4').className = "invis";
      }

      if (eleId == "sec2") {
        document.getElementById('a2').className = "active";
        //reset the rest to in-active
        document.getElementById('a1').classList.remove('active');
        document.getElementById('a3').classList.remove('active');
        document.getElementById('a4').classList.remove('active');
        //make sure the rest are invisible
        document.getElementById('sec1').className = "invis";
        document.getElementById('sec3').className = "invis";
        document.getElementById('sec4').className = "invis";
      }

      if (eleId == "sec3") {
        document.getElementById('a3').className = "active";
        //reset the rest to in-active
        document.getElementById('a1').classList.remove('active');
        document.getElementById('a2').classList.remove('active');
        document.getElementById('a4').classList.remove('active');
        //make sure the rest are invisible
        document.getElementById('sec1').className = "invis";
        document.getElementById('sec2').className = "invis";
        document.getElementById('sec4').className = "invis";
      }
      if (eleId == "sec4") {
        document.getElementById('a4').className = "active";
        //reset the rest to in-active
        document.getElementById('a1').classList.remove('active');
        document.getElementById('a2').classList.remove('active');
        document.getElementById('a3').classList.remove('active');
        //make sure the rest are invisible   
        document.getElementById('sec1').className = "invis";
        document.getElementById('sec2').className = "invis";
        document.getElementById('sec3').className = "invis";
      }

      return
}

//this runs on load to make sure no section is visible
function pageInit(){
    document.getElementById('sec1').className = "invis";
    document.getElementById('sec2').className = "invis";
    document.getElementById('sec3').className = "invis";
    document.getElementById('sec4').className = "invis";
}