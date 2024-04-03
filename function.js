var start_btn = document.getElementById("start_btn");
start_btn.addEventListener("click", function () {
  var form = document.getElementById("sentences_form");
  var sentence1 = document.getElementById("sentence1");
  var sentence2 = document.getElementById("sentence2");
  var sentence3 = document.getElementById("sentence3");

  if (sentence1.value.trim() == "" || sentence2.value.trim() == "" || sentence3.value.trim() == "" {
    alert("id와 비번 잘 적어라");
    return false;
  }

  form.action = "http://www.naver.com";
  form.mothod = "GET";
  form.submit();
});