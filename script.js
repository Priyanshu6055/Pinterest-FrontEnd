var arr = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "model", image: "https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "car", image: "https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "bird", image: "https://images.unsplash.com/photo-1611077877535-82353626c118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "food", image: "https://images.unsplash.com/photo-1573126161855-f9633aa8a9f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "clock", image: "https://images.unsplash.com/photo-1509005395573-2d973751f2b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "photo", image: "https://plus.unsplash.com/premium_photo-1675882505334-382d4cb3d718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "man", image: "https://images.unsplash.com/photo-1620400975473-777541fd7add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaG90b3N8ZW58MHx8MHx8fDA%3D" },
];

function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
            <img class="cursor-pointer" src="${obj.image}" alt="image">
            <div class="caption">Lorem ipsum </div>
        </div>`;
    });
    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality() {
    var input = document.querySelector("#searchinput");
    var searchData = document.querySelector(".searchdata");
    var overlay = document.querySelector(".overlay");

    input.addEventListener("focus", function () {
        overlay.style.display = "block";
    });

    input.addEventListener("blur", function () {
        setTimeout(() => {
            overlay.style.display = "none";
            searchData.style.display = "none";
        }, 200);
    });

    input.addEventListener("input", function () {
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        var clutter = "";
        filteredArray.forEach(function (obj) {
            clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
        });
        searchData.style.display = "block";
        searchData.innerHTML = clutter;
    });

    document.addEventListener("click", function (event) {
        if (!input.contains(event.target) && !searchData.contains(event.target)) {
            searchData.style.display = "none";
        }
    });
}

handleSearchFunctionality();
showTheCards();
