document.addEventListener('DOMContentLoaded', function() {
    var samay = new Date();
    var videshSamay = samay.getUTCHours();

    if ((videshSamay >= 0 && videshSamay < 8) || videshSamay > 22) {
        document.getElementById('isHeSleeping').innerHTML = "honestly, given the late hour, he's probably catching up on his beauty sleep. 💤";
    }
    else {
        // Nothing needs to be done
    }
 });

function thankyou() {
    var popup = document.getElementById(tyDiv);

    popup.style.display = 'block';
    setTimeout(
        function() {
            popup.style.display = 'none';
        }, 2000);
}
