// https://api.themoviedb.org/3/movie/550?api_key=b0311f58ddd265bc5809363ab58f8f48
$.getJSON("https://api.themoviedb.org/3/movie/550?api_key=b0311f58ddd265bc5809363ab58f8f48", function (a) {
    // $('#main').html(a.weather[0].main); //Só a EXEMPLO de array - esta linha não será usada, mas não apague ainda
    $('.resultado_busca').prepend('<hr>')
    $('.resultado_busca').append('<h3>Title: ' + a.original_title + ' '
    + '<span class="small">' + a.release_date + '</span>' + '</h3>')
    // $('.resultado_busca').append('Language: ' + a.original_language+'<br>')
    $('.resultado_busca').append('Overview: ' + a.overview+'<br>')
    $('.resultado_busca').append('Homepage: ' + a.homepage+'<br>')

});

//EXEMPLO DE RESPOSTA DA API
// {
//   "adult": false,
//   "backdrop_path": "\/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
//   "belongs_to_collection": null,
//   "budget": 63000000,
//   "genres": [
//     {
//       "id": 18,
//       "name": "Drama"
//     }
//   ],
//   "homepage": "http:\/\/www.foxmovies.com\/movies\/fight-club",
//   "id": 550,
//   "imdb_id": "tt0137523",
//   "original_language": "en",
//   "original_title": "Fight Club",
//   "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//   "popularity": 14.634384,
//   "poster_path": "\/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
//   "production_companies": [
//     {
//       "name": "Regency Enterprises",
//       "id": 508
//     },
//     {
//       "name": "Fox 2000 Pictures",
//       "id": 711
//     },
//     {
//       "name": "Taurus Film",
//       "id": 20555
//     },
//     {
//       "name": "Linson Films",
//       "id": 54050
//     },
//     {
//       "name": "Atman Entertainment",
//       "id": 54051
//     },
//     {
//       "name": "Knickerbocker Films",
//       "id": 54052
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "DE",
//       "name": "Germany"
//     },
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "1999-10-15",
//   "revenue": 100853753,
//   "runtime": 139,
//   "spoken_languages": [
//     {
//       "iso_639_1": "en",
//       "name": "English"
//     }
//   ],
//   "status": "Released",
//   "tagline": "Mischief. Mayhem. Soap.",
//   "title": "Fight Club",
//   "video": false,
//   "vote_average": 8.2,
//   "vote_count": 8482
// }
//
