var a = document.getElementById('div1');
var b = document.createElement('div');
b.setAttribute('id', 'mydiv');
a.appendChild(b);
var c = document.createElement('h1');
c.setAttribute('id','h1');
var d = document.createTextNode('Todo App');
c.appendChild(d);
b.appendChild(c);
var input1 = document.createElement('input');
input1.setAttribute('class','form-control');
input1.setAttribute('type','text');
input1.setAttribute('placeholder','Enter');
input1.setAttribute('id','text1');
b.appendChild(input1);
//button
var button1 = document.createElement('input');
button1.setAttribute('class','input-group-text')
button1.setAttribute('type','button');
button1.setAttribute('value','Add');
button1.setAttribute('id','button1');
button1.setAttribute('onclick','buttonFun()');
b.appendChild(button1);



function buttonFun(){
    var value1 = document.getElementById('text1').value;

    if(value1 === ""){
        alert("Please Enter value")
    }
    else{

    var div3 = document.createElement('div');
    var ol1 = document.createElement('ul')
    var li1 = document.createElement('li');
    li1.setAttribute('id',value1);
    var text2 = document.createTextNode(value1);
    li1.appendChild(text2);
    ol1.appendChild(li1);
    div3.appendChild(ol1);
    a.appendChild(div3);

    var edit1 = document.createElement('input');
    // edit1.setAttribute('class','btn btn-primary btn-sm')
    edit1.setAttribute('type','button');
    edit1.setAttribute('value','Edit');
    edit1.setAttribute('id','edit1');
    edit1.setAttribute('onclick','edit1Fun()');

    var delete1 = document.createElement('input');
    // delete1.setAttribute('class','btn btn-primary btn-sm');
    delete1.setAttribute('type','button');
    delete1.setAttribute('value','Delete');
    delete1.setAttribute('id','delete1');
    delete1.setAttribute('onclick','delete1Fun()');
    li1.appendChild(edit1);
    li1.appendChild(delete1);

    delete1.addEventListener('click',function() {
        delete1.parentNode.remove()
    })
    edit1.addEventListener('click',function() {
        var li = this.parentNode;
        console.log("li",li);
        var text = prompt("Enter",li.id)
        console.log("text",text);
        li.innerText = text
        li.appendChild(edit1)
        li.appendChild(delete1)
        
        })
        document.getElementById("text1").value=""
    }
}