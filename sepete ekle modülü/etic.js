
var tıklanan=document.querySelectorAll('.table-responsive button')
tıklanan.forEach(function(item){
    item.addEventListener('click', function() {
    var row= this.parentNode.parentNode;
    var product=row.querySelectorAll('.align-middle');
    ekle(product)
  });
})
 
 function ekle(product){
    
   
    var tbody=document.querySelector("#tbody")

    var tr=document.createElement("tr");
    var td1=document.createElement("td")
    td1.innerHTML="*"
    tr.appendChild(td1);
    
    
      product.forEach(function(item){ 
          var td=document.createElement("td")
          td.innerHTML=(item.textContent)
          tr.appendChild(td);
     })
     
     tbody.appendChild(tr)
 }

 search=document.querySelector("#inputDefault")
 
 search.addEventListener('input',function(){
    liste=document.querySelector('.table')
   var satır=liste.querySelectorAll('tr td:nth-child(1)');
 
  satır.forEach(element => {
    if ((element.textContent.toLowerCase()).includes(search.value.toLowerCase())) {
      element.parentNode.style.display='table-row';
     }
     else{
      element.parentNode.style.display='none';
     }
    
  });

 

 })