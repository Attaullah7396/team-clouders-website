/**
 * Created by xoobi on 30-Aug-16.
 */

function goToGoogle(){
    var query = document.getElementById('search').value;
    window.open("http://google.com/?q="+query,"_blank");
    document.getElementById("myForm").reset();
}

function sendEmail(){
    var name = document.getElementById('contactName').value;
    var userEmail = document.getElementById('contactEmail').value;
    var content = document.getElementById('contactDetail').value;
    emailjs.send("gmail","template_gCHF6oh5",{name: name,from:userEmail, text:content})
        .then(function(response) {
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            console.log("FAILED. error=", err);
        });
}

