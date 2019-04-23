//schedule tab table//
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks_1 = document.getElementsByClassName("tablinks_1");
  for (i = 0; i < tablinks_1.length; i++) {
    tablinks_1[i].className = tablinks_1[i].className.replace(" active", "");
  }

  tablinks_2 = document.getElementsByClassName("tablinks_2");
  for (i = 0; i < tablinks_2.length; i++) {
    tablinks_2[i].className = tablinks_2[i].className.replace(" active", "");
  }

  tablinks_3 = document.getElementsByClassName("tablinks_3");
  for (i = 0; i < tablinks_3.length; i++) {
    tablinks_3[i].className = tablinks_3[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
