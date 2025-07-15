function showThumbnail() {
    var url = "";
    // get URL
    url = document.getElementById("videoURL").value;
    var id;
    // https://stackoverflow.com/a/27728417
    var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    id = url.match(rx); // stored in id[1]
    // Check if ID found
    if (id == null) {
        // ID not found
        return;
    }
    document.getElementById("thumb-hd").src = "https://img.youtube.com/vi/" + id[1] + "/maxresdefault.jpg";
    document.getElementById("thumb-hd-a").href = "https://img.youtube.com/vi/" + id[1] + "/maxresdefault.jpg";

    document.getElementById("thumb-normal").src = "https://img.youtube.com/vi/" + id[1] + "/hqdefault.jpg";
    document.getElementById("thumb-normal-a").href = "https://img.youtube.com/vi/" + id[1] + "/hqdefault.jpg";

    document.getElementById("thumb-small").src = "https://img.youtube.com/vi/" + id[1] + "/mqdefault.jpg";
    document.getElementById("thumb-small-a").href = "https://img.youtube.com/vi/" + id[1] + "/mqdefault.jpg";
}

function downloadThumbnail(quality) {
    if (quality == 2) { // HD
        
    }
    if (quality == 1) { // Medium

    }
    if (quality == 0) { // Small

    }
}