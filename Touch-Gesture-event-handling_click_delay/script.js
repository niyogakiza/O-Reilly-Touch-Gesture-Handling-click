
window.onload =function(){
    var a0 = document.querySelectorAll('a')[0];
    var a1 = document.querySelectorAll('a')[1];
    var a2 = document.querySelectorAll('a')[2];

    a0.addEventListener('click',      highlight, false);
    a1.addEventListener('touchStart', highlight, false);
    a2.addEventListener('touched',    highlight, false);


};

function highlight(e){

    /*Preventing default has somewhat unintuitive results. notes:
    -Prevent default on click aborts navigation.
    -Prevent default on touchstart aborts click and page scroll.
    -Prevent default on touchend has npo apparent effect.
     */

    e.preventDefault(); // you might want to prevent default; depends on the app.
    if(e.target.className === 'active'){

        e.target.className = '';

    } else{
        e.target.className = 'active';
    }
}

