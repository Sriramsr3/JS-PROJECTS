let itemList=[];
let addItem=()=>{
    let item=document.getElementById('todo').value;
    itemList.push(item);
    console.log(itemList);
    document.getElementById('todo').value="";
    getItem();
}

let getItem=()=>{
    let emptystr="";
    let sno=0;
    itemList.forEach(function(value,index){
        sno +=1;
        emptystr +="<tr><td>"+sno+"</td><td>"+value+"<?td><td><button onclick=deleteItem("+index+")>Remove</td></tr>";
    })
    document.getElementById('tbl').innerHTML=emptystr;
    
}

function deleteItem(id){
    itemList.splice(id,1);
    getItem();
}

document.getElementById('btn').addEventListener('click',addItem);