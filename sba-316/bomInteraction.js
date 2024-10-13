// This file handles interacting with the browser's BOM

export function setupResizeListener() {
    window.addEventListener('resize', function() {
        if (window.innerWidth < 600) {
            alert('You are in mobile view');
        }
    });
}

export function modifyUrlHash() {
    window.location.hash = '#taskApp';
}
