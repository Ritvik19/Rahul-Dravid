$(document).ready(function(){
   $('.sidenav').sidenav();
 });

 function openTab(evt, tabName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";
 }
 document.getElementById("defaultOpen").click();

 function loadDoc(filepath, elid) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText)
      console.log(JSON.parse(this.responseText));
      document.getElementById(elid).innerHTML = '<div class="row"><div class="col m12 s12"><div class="card">'+
      '<div class="card-content"><table class="striped"><tbody>'+
      '<tr><td class="padd">'+'Matches'+'</td><td class="padd">'+data['Matches'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'Innings'+'</td><td class="padd">'+data['Innings'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'Aggregate'+'</td><td class="padd">'+data['Aggregate'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'Highest Score'+'</td><td class="padd">'+data['Highest Score'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'Average'+'</td><td class="padd">'+data['Average'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'Scoring Rate'+'</td><td class="padd">'+data['Scoring Rate'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'50s'+'</td><td class="padd">'+data['50s'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'100s'+'</td><td class="padd">'+data['100s'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'Not Outs'+'</td><td class="padd">'+data['Not Outs'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'Ducks'+'</td><td class="padd">'+data['Ducks'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'4s'+'</td><td class="padd">'+data['4s'][0]+'</td></tr>'+
      '<tr><td class="padd">'+'6s'+'</td><td class="padd">'+data['6s'][0]+'</td></tr>'+
      '</tbody></table></div></div></div></div>';
    }
    else {
      console.log('Something Went Wrong');
    }
  };
  xhttp.open("GET", filepath, true);
  xhttp.send();
}

function loadStats(format, elid){
  filepath = '../data/'+format+'-'+elid+'-Highlights.json'
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText)
      console.log(JSON.parse(this.responseText));
      document.getElementById(elid).innerHTML = '<div class="card-content">'+
      '<span class="card-title">'+elid+'</span>'+
      '<table class="striped"><tbody>'+
      '<tr><td>'+'Matches'+'</td><td>'+data['Matches'][0]+'</td></tr>'+
      '<tr><td>'+'Innings'+'</td><td>'+data['Innings'][0]+'</td></tr>'+
      '<tr><td>'+'Aggregate'+'</td><td>'+data['Aggregate'][0]+'</td></tr>'+
      '<tr><td>'+'Highest Score'+'</td><td>'+data['Highest Score'][0]+'</td></tr>'+
      '<tr><td>'+'Average'+'</td><td>'+data['Average'][0]+'</td></tr>'+
      '<tr><td>'+'Scoring Rate'+'</td><td>'+data['Scoring Rate'][0]+'</td></tr>'+
      '<tr><td>'+'50s'+'</td><td>'+data['50s'][0]+'</td></tr>'+
      '<tr><td>'+'100s'+'</td><td>'+data['100s'][0]+'</td></tr>'+
      '<tr><td>'+'Not Outs'+'</td><td>'+data['Not Outs'][0]+'</td></tr>'+
      '<tr><td>'+'Ducks'+'</td><td>'+data['Ducks'][0]+'</td></tr>'+
      '</tbody></table></div>';
    }
    else {
      console.log('Something Went Wrong');
    }
  };
  xhttp.open("GET", filepath, true);
  xhttp.send();
}
