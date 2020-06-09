// USING JQUERY 'GET'
import $ from 'jquery';

let user = {
    name: 'Mark Facebook',
    avatar: 'mark.jpg'
};

let promise = $.post(
    "http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", user
);

promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);