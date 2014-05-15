(function(global){
    "use strict";

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    console.log('adding listener');
    
    document.body.addEventListener('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();

        var files = e.dataTransfer.files; // FileList object
        var file = files[0]; // only consider the first file for now.

        var reader = new FileReader();

        reader.addEventListener('load', function(e){
            coussin.render(file.name, e.target.result, document.querySelector('sigma-scene'));
        });

        reader.readAsText(file);
    });

    document.body.addEventListener('dragover', function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    });

})(this);
