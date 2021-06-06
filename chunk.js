var parent = document.getElementById("back");
var smallIm = document.getElementById("side");
op = smallIm.getElementsByClassName("im")[0];
op.style.opacity = 1;
var counter = 0;
function changeImage() {
    if (counter > 3 )
    {
        counter = 0;
    }
    else
    {
        if (counter == 0)
        {
            var op0 = smallIm.getElementsByClassName("im")[0];
            var op1 = smallIm.getElementsByClassName("im")[1];
            var op2 = smallIm.getElementsByClassName("im")[2];
            var op3 = smallIm.getElementsByClassName("im")[3];
            op0.style.opacity = 0.5;
            op1.style.opacity = 1;
            op2.style.opacity = 0.5;
            op3.style.opacity = 0.5;
            var child1 = parent.getElementsByTagName("img")[0];
            var remove = parent.removeChild(child1);
            var img1 = document.createElement("img");
            img1.src = "p1.jpg";
            counter++;
            parent.appendChild(img1);
        }
        else if (counter == 1)
        {
            var op0 = smallIm.getElementsByClassName("im")[0];
            var op1 = smallIm.getElementsByClassName("im")[1];
            var op2 = smallIm.getElementsByClassName("im")[2];
            var op3 = smallIm.getElementsByClassName("im")[3];
            op0.style.opacity = 0.5;
            op1.style.opacity = 0.5;
            op2.style.opacity = 1;
            op3.style.opacity = 0.5;
            var child2 = parent.getElementsByTagName("img")[0];
            var remove = parent.removeChild(child2);
            var img2 = document.createElement("img");
            img2.src = "p2.jpg";
            counter++;
            parent.appendChild(img2);
        }
        else if (counter == 2)
        {
            var op0 = smallIm.getElementsByClassName("im")[0];
            var op1 = smallIm.getElementsByClassName("im")[1];
            var op2 = smallIm.getElementsByClassName("im")[2];
            var op3 = smallIm.getElementsByClassName("im")[3];
            op0.style.opacity = 0.5;
            op1.style.opacity = 0.5;
            op2.style.opacity = 0.5;
            op3.style.opacity = 1;
            var child3 = parent.getElementsByTagName("img")[0];
            var remove = parent.removeChild(child3);
            var img3 = document.createElement("img");
            img3.src = "secondOne.png";
            counter++;
            parent.appendChild(img3);
        }
        else
        {
            var op0 = smallIm.getElementsByClassName("im")[0];
            var op1 = smallIm.getElementsByClassName("im")[1];
            var op2 = smallIm.getElementsByClassName("im")[2];
            var op3 = smallIm.getElementsByClassName("im")[3];
            op0.style.opacity = 1;
            op1.style.opacity = 0.5;
            op2.style.opacity = 0.5;
            op3.style.opacity = 0.5;
            var child4 = parent.getElementsByTagName("img")[0];
            var remove = parent.removeChild(child4);
            var img4 = document.createElement("img");
            img4.src = "oldpic.png";
            counter++;
            parent.appendChild(img4);
        }
    }
}
    var myTimer = setInterval(changeImage,3000);

    parent.onclick = function () {
        clearInterval(myTimer);
    }
    
    window.onload = function () {
        alert("Hi sheela!");   
    }
    
    






