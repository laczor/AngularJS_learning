//Execute function, after the string in the url behind the # is changed

window.addEventListener('hashchange', function() {

// It is a fragment identifier in the html, so it will know where to jump in a long html
// or it can mimic, the pageloading.
    if (window.location.hash === '#/bookmark/1') {
        console.log('Page 1 is cool.');
    }
    
    if (window.location.hash === '#/bookmark/2') {
        console.log('Let me go get Page 2.');
    }
    
    if (window.location.hash === '#/bookmark/3') {
        console.log('Here\'s Page 3.');
    }
    
});