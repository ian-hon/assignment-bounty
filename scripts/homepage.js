var tagLibrary = [
    "Vector Maths",
    "Integration",
    "Differentiation",
    "Computer Science",
    "Chemistry",
    "IGSCE",
    "A-Levels",
    "Software Engineering",
    "Physics",
    "Maths",
    "Advanced Maths",
    "Additional Maths",
    "Exponential Differentiation",
    "Algebra"
];

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

