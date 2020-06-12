var hora = document.querySelector('#agenda');
count=10;
while (count<=20){
  tabela(count,'00');
  if (count == 20 || count >24){
    break;
  }
  else{
    tabela(count,30);
  }
  count++;
}
function tabela(h, y){
  var tr =document.createElement('tr');
  var tdSEgunda= document.createElement('td');
  var tdTerca =document.createElement('td');
  var tdQuarta =document.createElement('td');
  var tdQuinta= document.createElement('td');
  var tdSexta= document.createElement('td');
  var tdSabado= document.createElement('td');
  var tdDomingo= document.createElement('td')
  tdSEgunda.classList.add("segunda");
  tdTerca.classList.add("terca");
  tdQuarta.classList.add("quarta");
  tdQuinta.classList.add("quinta");
  tdSexta.classList.add("sexta");
  tdSabado.classList.add("sabado");
  tdDomingo.classList.add("domingo")
  tdSEgunda.textContent=h+':'+y;
  tdTerca.textContent=h+':'+y;
  tdQuarta.textContent=h+':'+y;
  tdQuinta.textContent=h+':'+y;
  tdSexta.textContent=h+':'+y;
  tdSabado.textContent=h+':'+y;
  tdDomingo.textContent=h+':'+y;
  hora.appendChild(tr);
  tr.appendChild(tdSEgunda);
  tr.appendChild(tdTerca);
  tr.appendChild(tdQuarta);
  tr.appendChild(tdQuinta);
  tr.appendChild(tdSexta);
  tr.appendChild(tdSabado);
  tr.appendChild(tdDomingo);
}

function iniciamodal(modalId){
  var modal=document.getElementById(modalId);
  modal.classList.add('mostrar');
  modal.addEventListener('click', function(e){
    if(e.target.id==modalId || e.target.className=='fechar'){
      modal.classList.remove('mostrar')
    }
  })
}
var td =document.querySelector('table');
td.addEventListener('click',function(e){
  var h=document.getElementById('horario');
  h.value=e.target.textContent;
  var d=document.getElementById('diaDaSemana');
  d.value=e.target.classList;
  iniciamodal('modal-promocao');
  console.log(e.target);
});
