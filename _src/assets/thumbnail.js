// Files
var thumbnailupload;
var avatarupload;

/**
 * Upload Thumbnail
 */
function uploadThumbnail() {
    thumbnailupload = URL.createObjectURL(event.target.files[0]);
    document.getElementById("thumbnailupload-btn").style.backgroundImage = "url('" + thumbnailupload + "')";
}

/**
 * Upload Avatar
 */
function uploadAvatar() {
    avatarupload = URL.createObjectURL(event.target.files[0]);
    document.getElementById("avatarupload-btn").style.backgroundImage = "url('" + avatarupload + "')";
}

/**
 * Reads input values and applies it to thumbnail
 */
function genVideo() {
    //  Set Thumbnail URL
    if (document.getElementById("thumbnailurl").value !== '') {
        document.body.style
        .setProperty('--thumbnail', 'url(' + document.getElementById("thumbnailurl").value + ')');
    } else if (thumbnailupload != null) {
        document.body.style
        .setProperty('--thumbnail', 'url(' + thumbnailupload + ')');
    }
    // Set Video Title
    if (document.getElementById("videotitle").value !== '') {
        document.getElementById("videotitle-input").innerText = document.getElementById("videotitle").value;
    }
    // Set Avatar URL
    if (document.getElementById("avatarurl").value !== '') {
        document.getElementById("avatarurl-input").src = document.getElementById("avatarurl").value;
    } else if (avatarupload != null) {
        document.getElementById("avatarurl-input").src = avatarupload;
    }
    // Set Username
    if (document.getElementById("username").value !== '') {
        document.getElementById("username-input").innerText = document.getElementById("username").value;
    }
    // Save
    save();
}

/**
 * Save To localStorage
 */
function save() {
    localStorage.setItem("thumbnail-saved", true)
    localStorage.setItem("thumbnail-thumbnailurl", document.getElementById("thumbnailurl").value);
    localStorage.setItem("thumbnail-videotitle", document.getElementById("videotitle").value);
    localStorage.setItem("thumbnail-avatarurl", document.getElementById("avatarurl").value);
    localStorage.setItem("thumbnail-username", document.getElementById("username").value);
}

/**
 * Load From localStorage
 */
function load() {
    if (localStorage.getItem("thumbnail-saved")) {
        document.getElementById("thumbnailurl").value = localStorage.getItem("thumbnail-thumbnailurl");
        document.getElementById("videotitle").value = localStorage.getItem("thumbnail-videotitle");
        document.getElementById("avatarurl").value = localStorage.getItem("thumbnail-avatarurl");
        document.getElementById("username").value = localStorage.getItem("thumbnail-username");
        genVideo();
    }
}

/**
 * Run the load() function when page is fully loaded
 */
window.addEventListener("load", (event) => {
    load();
});