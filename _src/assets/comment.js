// Files
var avatarupload;

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
    // Set Comment
    if (document.getElementById("comment").value !== '') {
        document.getElementById("comment-input").innerText = document.getElementById("comment").value;
    }
    // Save
    save();
}

/**
 * Save To localStorage
 */
function save() {
    localStorage.setItem("comment-saved", true)
    localStorage.setItem("comment-avatarurl", document.getElementById("avatarurl").value);
    localStorage.setItem("comment-username", document.getElementById("username").value);
    localStorage.setItem("comment-comment", document.getElementById("comment").value);
}

/**
 * Load From localStorage
 */
function load() {
    if (localStorage.getItem("comment-saved")) {
        document.getElementById("avatarurl").value = localStorage.getItem("comment-avatarurl");
        document.getElementById("username").value = localStorage.getItem("comment-username");
        document.getElementById("comment").value = localStorage.getItem("comment-comment");
        genVideo();
    }
}

/**
 * Run the load() function when page is fully loaded
 */
window.addEventListener("load", (event) => {
    load();
});