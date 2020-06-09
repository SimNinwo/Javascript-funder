// USING JQUERY 'GET'
import $ from 'jquery';

let promise = $.get("http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users");

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);