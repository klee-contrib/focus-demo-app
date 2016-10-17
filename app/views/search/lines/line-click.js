// import {navigate} from 'focus-core/history';
//
// //TODO : à revoir avec Pierre et Nicolas => comment je connais le type de ligne ???
// export default function onLineClick(data) {
//     let url = '/';
//     const isMovie = !!data.movieType && !!data.title; // baaaaaad ! do not copy !
//     const isPerson = !!data.fullName; // baaaaaad ! do not copy !
//     const {code} = data;
//     //console.log(data, '\n', isMovie,'\n', isPerson,'\n', code);
//     if(isMovie) {
//         url = `/movies/${code}`;
//     }
//     if(isPerson) {
//         url = `/persons/${code}`;
//     }
//     navigate(url);
//     window.scrollTo(0, 0);
// }
