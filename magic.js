
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
