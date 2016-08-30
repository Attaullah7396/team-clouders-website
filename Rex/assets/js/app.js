/**
 * Created by xoobi on 30-Aug-16.
 */

function goToGoogle(){
    var query = document.getElementById('search').value;
    window.open("http://google.com/?q="+query,"_blank");
    document.getElementById("myForm").reset();
}

