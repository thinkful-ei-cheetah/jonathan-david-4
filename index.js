/* eslint-disable strict */
$(function () {
    $('#number-chooser').submit(event => {
        event.preventDefault();
        const num = $('input#number-choice').val();
        let answerArray = [];
        for (let i = 1; i <= num; i++) {
            if (i % 15 === 0) {
                answerArray.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
            }
            else if (i % 5 === 0) {
                answerArray.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
            }
            else if (i % 3 === 0) {
                answerArray.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
            }
            else {
                answerArray.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
            }
        }
        $('.js-results').html(answerArray);
    });
});