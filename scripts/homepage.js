var tagLibrary = [];
var userData;

sendPostRequest(`${BOUNTY_BACKEND_ADDRESS}/user/ensure_existance`, login_info(), (r) => {

    sendPostRequest(`${BOUNTY_BACKEND_ADDRESS}/user/fetch_data`, login_info(), (r) => {
        let response = JSON.parse(r);
        userData = JSON.parse(decodeURIComponent(response['data']));

        document.querySelector("#top-bar #balance").innerHTML = currencyFormatter.format(userData.balance);
        document.querySelector("#top-bar #username").innerHTML = userData.username;
    })
})

// #region Tag
sendGetRequest(`${BOUNTY_BACKEND_ADDRESS}/tag/fetch_all`, (r) => {
    tagLibrary = JSON.parse(r);
})

var selectedTags = [];

document.querySelector("#tag-container input").addEventListener('keyup', (e) => {
    if (e.target.value.length <= 0) {
        return;
    }
    
    updateTagList();
});

function updateTagList() {
    let q = document.querySelector("#tag-container input").value;

    let result = '';
    let n = 0;

    tagLibrary.every((e, i) => {
        if (selectedTags.includes(e)) {
            return true;
        }

        if (e.toLowerCase().includes(q)) {
            result += `<h4 onclick="addTag('${e}');">${e}</h4>`;
            n++;
        }

        if (n >= 5) {
            return false;
        }
        return true;
    });

    document.querySelector("#tag-container #dropdown").innerHTML = result;
}

function addTag(t) {
    selectedTags.push(t);

    document.querySelector("#tag-container input").value = '';
    updateTagList();
    updateSelectedTags();
}

function removeTag(t) {
    selectedTags = selectedTags.filter((e) => {
        return e !== t;
    })

    updateSelectedTags();
}

function updateSelectedTags() {
    let result = '';

    selectedTags.forEach((e) => {
        result += `<div class="tag" onclick="removeTag('${e}')">
    <h4 id="title">${e}</h4>
    <h4 id="cross">X</h4>
</div>`;
    });

    document.querySelector("#tag-container #tags").innerHTML = result;
}
// #