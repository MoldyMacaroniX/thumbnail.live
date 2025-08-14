var avatarupload = "/assets/channel_logo.png";
var username = "Moldy";
var message = "Hey what is going on chat";
var rank = "none";
var color = "#ff0000";
var platform = "youtube";

function deleteMessage(elem) {
    elem.remove();
}

function setPlatform() {
    platform = document.getElementById("platform").value;
    const elements = document.querySelectorAll('.badge-img');
    if (platform == "youtube") {
        document.getElementById("chat-css").href = "/assets/chat.css";
        elements.forEach(element => {
            var checkSource = (element.src).replace(/^.*\/\/[^\/]+/, '');
            if (checkSource == "/assets/twitch_verified.png") {
                element.src = "/assets/verified.svg";
            }
            if (checkSource == "/assets/twitch_mod.png") {
                element.src = "/assets/mod.svg";
            }
        });
    }
    if (platform == "twitch") {
        document.getElementById("chat-css").href = "/assets/chat-twitch.css";
        elements.forEach(element => {
            var checkSource = (element.src).replace(/^.*\/\/[^\/]+/, '');
            if (checkSource == "/assets/verified.svg") {
                element.src = "/assets/twitch_verified.png";
            }
            if (checkSource == "/assets/mod.svg") {
                element.src = "/assets/twitch_mod.png";
            }
        });
    }
}

/**
 * Upload Avatar
 */
function uploadAvatar() {
    avatarupload = URL.createObjectURL(event.target.files[0]);
    document.getElementById("avatarupload-btn").style.backgroundImage = "url('" + avatarupload + "')";
}

function genChat() {
    // uploadAvatar();
    // Set Avatar URL
    // Error check cause Up Next page won't have it
    if (document.getElementById("avatarurl").value !== '') {
        avatarupload = document.getElementById("avatarurl").value;
    } else if (avatarupload != null) {
        // I hate everything
        avatarupload = avatarupload;
    }
    // Set Username
    if (document.getElementById("username").value !== '') {
        username = document.getElementById("username").value;
    }
    // Set message
    if (document.getElementById("message").value !== '') {
        message = document.getElementById("message").value;
    }
    // Set rank
    if (document.getElementById("rank").value !== '') {
        rank = document.getElementById("rank").value;
    }
    // Set color
    var colors = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"];
    var color = colors[Math.floor(Math.random() * colors.length)];
    if (document.getElementById("color").value !== '') {
        color = document.getElementById("color").value;
    }
    // Set badge
    var badgeDisplay = "";
    var badgeLink = "";
    if (rank == "none") {
        var badgeDisplay = "display: none;";
    } else if (rank == "verified") {
        if (platform == "youtube") {
            badgeLink = "/assets/verified.svg";
        }
        if (platform == "twitch") {
            badgeLink = "/assets/twitch_verified.png";
        }
    } else if (rank == "moderator") {
        if (platform == "youtube") {
            badgeLink = "/assets/mod.svg";
        }
        if (platform == "twitch") {
            badgeLink = "/assets/twitch_mod.png";
        }
    }
    message = escapeHTML(message);
    if (color == null) {
        color = "#FF0000";
    }
    console.log(avatarupload, username, message, rank, color);
    var toAdd = `
        <div class="message" onclick="deleteMessage(this);">
            <img class="avatar" src="${avatarupload}" alt="" onerror="this.src='/assets/avatar_fallback.png'">
            <div class="text-wrapper">
                <div class="text">
                    <div style="color: ${color};" class="username rank-${rank}"><span>${username}</span><span style="${badgeDisplay}" class="badge"><img class="badge-img" src="${badgeLink}" alt="" onerror="this.src='/assets/avatar_fallback.png'"></span></div>
                    <div class="text-inner" style="word-wrap: break-word;">${message}</div>
                </div>
            </div>
        </div>
    `;
    document.getElementById("chat-here").insertAdjacentHTML("beforeend", toAdd);
}

// https://stackoverflow.com/a/770533
function addSlashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

// Gemini/google's ai search result came up with this
function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;"); // or &apos;
}

genChat();