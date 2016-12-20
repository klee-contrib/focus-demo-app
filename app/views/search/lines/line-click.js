import {navigate} from 'focus-core/history';

export default function onLineClick(data) {
    let url = '/';

    if(data.movieType && data.title) {
        url = `/movies/${data.movId}`;
    }
    if(data.fullName) {
        console.log('DATA', data);
        url = `/persons/${data.perId}`;
    }
    navigate(url);
    window.scrollTo(0, 0);
}
