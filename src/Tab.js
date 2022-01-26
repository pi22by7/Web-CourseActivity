function openTab(e, tabName) {
  var i, tabcontent, tablinks;

  console.log("changed tab");

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
}

$(function () {
  $(".list-group button").click(function (e) {
    e.preventDefault();

    console.log("changed button");
    $that = $(this);

    $that.parent().find("button").removeClass("active");
    $that.addClass("active");
  });
});
