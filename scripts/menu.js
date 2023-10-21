$(document).ready(function () {
    $.get("assets/drink-menu.json", function (data) {
        // Success Case Handling Here
        console.log("success")
        data.forEach(element => {
            // console.log(element)
            // console.log(element.name)
            const card =
                `<div class="col p-2">
                    <div class="card h-100">
                        <img src="${element.image}" class="card-img-top h-75" alt="${element.name}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${element.name}</h5>
                            <span class="btn btn-success btn-sm mb-2">${element.type}</span>
                            <p class="card-text">${element.price}</p>
                        </div>
                    </div>
                </div>`
            $("#drink-menu").append(card)
        });
    }).fail(function (error) {
        // Fail Case Handling Here
        console.log("fail")
        $("#drink-menu").html("<div>Fail to fetch drink menu. Please try again later. </div>").removeClass("row-cols-md-2 row-cols-lg-4");
        $("#drink-menu > div").addClass("alert alert-danger");
    });
});
