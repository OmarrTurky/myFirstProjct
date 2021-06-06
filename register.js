var myForm = document.forms.myform;
myForm.name.onfoucs = function () {
    myForm.name.style.border = "4px solid pink";
}
//lma ados 3la haga tanya baa
myForm.name.onblur = function () {
    myForm.name.style.border = "none";
}


//button submit zabato bs
var submitButton = document.getElementById("sub");
submitButton.onclick = function () {
    window.close("../myCSSHTMLJSProject/register.html");
    window.open("../myCSSHTMLJSProject/theChunk.html");
}

