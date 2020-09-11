
function changeVisible(eleId){
    var allIds = ["a1", "a2", "a3", "a4"] ;
    var count = 0;

    //remove all active states once per click
    document.getElementById('a1').classList.remove('active');
    document.getElementById('a2').classList.remove('active');
    document.getElementById('a3').classList.remove('active');
    document.getElementById('a4').classList.remove('active');

    //remove all elements from visibility once per click
    document.getElementById('sec0').className = "invis";
    document.getElementById('sec1').className = "invis";
    document.getElementById('sec2').className = "invis";
    document.getElementById('sec3').className = "invis";

    //run through the list of possible clicks to find which one
    allIds.forEach(setEm);

function setEm(item, index){

   // debugging code: console.log("item is " + item + "count is " + count + "eleId is " + eleId.id + "sec would be " + "sec" + count);

    //once you get to the one that was clicked make active and visible
    if(item == eleId.id){
        document.getElementById(eleId.id).className = "active";

        //remove link clicked from invisible class
        document.getElementById("sec" + count).classList.remove("invis") ;
        return
    }
    count = count + 1;
}
return
}

//this runs on load to make sure no section is visible
function pageInit(){
    document.getElementById('sec0').className = "invis";
    document.getElementById('sec1').className = "invis";
    document.getElementById('sec2').className = "invis";
    document.getElementById('sec3').className = "invis";
}