var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?language=Pt-Br&api_key=310eb62863ceb78ace90f8b44e2035a8");

xhr.send(data);
