$(document).ready(function () {
    let bookingStatus = ["3"];
    let selectTableId = null;
    localStorage.setItem("bookedTable", JSON.stringify(bookingStatus));

    $(".table").each(function () {
        if (bookingStatus.toString().includes($(this).attr("id"))) {
            $(this).addClass("booked");
        }
    });

    $(".table").on("click", function () {
        if ($(this).attr("class").includes("booked")) {
            window.alert("This table is aready booked.")
            $("#selected-table").html("Click a Table to book.");
        } else {
            selectTableId = $(this).attr("id");
            $("#selected-table").html("Do you want to book Table " + selectTableId);
        }
    })

    if (localStorage.getItem("bookedTable") != "") {
        bookingStatus = JSON.parse(localStorage.getItem("bookedTable"));
    }

    $("#confirm").on("click", function () {
        bookingStatus.push(selectTableId)
        localStorage.setItem("bookedTable", JSON.stringify(bookingStatus));
        $(".table").each(function () {
            if (bookingStatus.toString().includes($(this).attr("id"))) {
                $(this).addClass("booked");
            }
        });
        $("#selected-table").html("You have selected Table" + selectTableId);
        $("#confirm").addClass("d-none");
    })

    $("#dismiss").on("click", function () {
        $("#selected-table").html("Click a Table to book.");
        $("#confirm").removeClass("d-none");
        bookingStatus.pop(selectTableId)
        localStorage.setItem("bookedTable", JSON.stringify(bookingStatus));
        $(".table").each(function () {
            if (!(bookingStatus.toString().includes($(this).attr("id")))) {
                $(this).removeClass("booked");
            }
        });
    });

});