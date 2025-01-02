// Files
var thumbnailupload;
var thumbnailupload2;
var thumbnailupload3;
var avatarupload;

/**
 * Upload Thumbnail
 */
function uploadThumbnail() {
    thumbnailupload = URL.createObjectURL(event.target.files[0]);
    document.getElementById("thumbnailupload-btn").style.backgroundImage = "url('" + thumbnailupload + "')";
}

/**
 * Upload Thumbnail 2
 */
function uploadThumbnail2() {
    thumbnailupload2 = URL.createObjectURL(event.target.files[0]);
    document.getElementById("thumbnailupload2-btn").style.backgroundImage = "url('" + thumbnailupload2 + "')";
}

/**
 * Upload Thumbnail 3
 */
function uploadThumbnail3() {
    thumbnailupload3 = URL.createObjectURL(event.target.files[0]);
    document.getElementById("thumbnailupload3-btn").style.backgroundImage = "url('" + thumbnailupload3 + "')";
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
    //  Set Thumbnail URL 2
    if (document.getElementById("thumbnailurl2").value !== '') {
        document.body.style
        .setProperty('--thumbnail2', 'url(' + document.getElementById("thumbnailurl2").value + ')');
    } else if (thumbnailupload2 != null) {
        document.body.style
        .setProperty('--thumbnail2', 'url(' + thumbnailupload2 + ')');
    }
    //  Set Thumbnail URL 3
    if (document.getElementById("thumbnailurl3").value !== '') {
        document.body.style
        .setProperty('--thumbnail3', 'url(' + document.getElementById("thumbnailurl3").value + ')');
    } else if (thumbnailupload3 != null) {
        document.body.style
        .setProperty('--thumbnail3', 'url(' + thumbnailupload3 + ')');
    }
    // Set Video Title
    if (document.getElementById("videotitle").value !== '') {
        document.getElementById("videotitle-input").innerText = document.getElementById("videotitle").value;
    }
    // Set Video Title 2
    if (document.getElementById("videotitle2").value !== '') {
        document.getElementById("videotitle-input2").innerText = document.getElementById("videotitle2").value;
    }
    // Set Video Title 3
    if (document.getElementById("videotitle3").value !== '') {
        document.getElementById("videotitle-input3").innerText = document.getElementById("videotitle3").value;
    }
    // Set Avatar URL
    // Error check cause Up Next page won't have it
    try {
        if (document.getElementById("avatarurl").value !== '') {
            document.getElementById("avatarurl-input").src = document.getElementById("avatarurl").value;
            document.getElementById("avatarurl-input2").src = document.getElementById("avatarurl").value;
            document.getElementById("avatarurl-input3").src = document.getElementById("avatarurl").value;
        } else if (avatarupload != null) {
            document.getElementById("avatarurl-input").src = avatarupload;
            document.getElementById("avatarurl-input2").src = avatarupload;
            document.getElementById("avatarurl-input3").src = avatarupload;
        }
    } catch (e) {
        console.log("This err is normal for Up next page: " + e);
    }
    // Set Username
    if (document.getElementById("username").value !== '') {
        document.getElementById("username-input").innerText = document.getElementById("username").value;
        document.getElementById("username-input2").innerText = document.getElementById("username").value;
        document.getElementById("username-input3").innerText = document.getElementById("username").value;
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
    localStorage.setItem("thumbnail-thumbnailurl2", document.getElementById("thumbnailurl2").value);
    localStorage.setItem("thumbnail-thumbnailurl3", document.getElementById("thumbnailurl3").value);
    localStorage.setItem("thumbnail-videotitle", document.getElementById("videotitle").value);
    localStorage.setItem("thumbnail-videotitle2", document.getElementById("videotitle2").value);
    localStorage.setItem("thumbnail-videotitle3", document.getElementById("videotitle3").value);
    // Error check cause Up Next page won't have it
    try {
        localStorage.setItem("thumbnail-avatarurl", document.getElementById("avatarurl").value);
    } catch (e) {
        console.log("This err is normal for Up next page: " + e);
    }
    localStorage.setItem("thumbnail-username", document.getElementById("username").value);
}

/**
 * Load From localStorage
 */
function load() {
    if (localStorage.getItem("thumbnail-saved")) {
        document.getElementById("thumbnailurl").value = localStorage.getItem("thumbnail-thumbnailurl");
        document.getElementById("thumbnailurl2").value = localStorage.getItem("thumbnail-thumbnailurl2");
        document.getElementById("thumbnailurl3").value = localStorage.getItem("thumbnail-thumbnailurl3");
        document.getElementById("videotitle").value = localStorage.getItem("thumbnail-videotitle");
        document.getElementById("videotitle2").value = localStorage.getItem("thumbnail-videotitle2");
        document.getElementById("videotitle3").value = localStorage.getItem("thumbnail-videotitle3");
        // Error check cause Up Next page won't have it
        try {
            document.getElementById("avatarurl").value = localStorage.getItem("thumbnail-avatarurl");
        } catch (e) {
            console.log("This err is normal for Up next page: " + e);
        }
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