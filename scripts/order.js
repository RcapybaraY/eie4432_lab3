function calculatePrice() {

    let p = "0";

    if (document.forms["drinkOrderForm"]["drinkOpts"].value == "bubble-milktea") {
        if (document.forms["drinkOrderForm"]["size"].value == "S") {
            p = "26";
        } else if (document.forms["drinkOrderForm"]["size"].value == "M") {
            p = "30";
        } else if (document.forms["drinkOrderForm"]["size"].value == "L") {
            p = "34";
        }
    } else if (document.forms["drinkOrderForm"]["drinkOpts"].value == "iced-latte") {
        if (document.forms["drinkOrderForm"]["size"].value == "S") {
            p = "26";
        } else if (document.forms["drinkOrderForm"]["size"].value == "M") {
            p = "30";
        } else if (document.forms["drinkOrderForm"]["size"].value == "L") {
            p = "34";
        }
    } else if (document.forms["drinkOrderForm"]["drinkOpts"].value == "caramel-macchiato") {
        if (document.forms["drinkOrderForm"]["size"].value == "S") {
            p = "30";
        } else if (document.forms["drinkOrderForm"]["size"].value == "M") {
            p = "35";
        } else if (document.forms["drinkOrderForm"]["size"].value == "L") {
            p = "40";
        }
    } else {
        p = "0";
    }

    document.getElementById("price").innerHTML = p;
}

function validateForm() {
    var elements = document.getElementById("drinkOrderForm").elements;
    try {
        for (var i = 0, element; element = elements[i++];) {
            if (element.name == "inputName") {
                let inputName = element.value.trim();
                if (inputName === "") {
                    window.alert("Please enter your name.");
                    return false;
                }
            }
            if (element.name == "drinkOpts" && element.value === "default") {
                window.alert("Please select a drink first.");
                return false;
            }
            if (element.name == "size") {
                if (element.value === "S") {
                    S = element;
                } else if (element.value === "M") {
                    M = element;
                } else if (element.value === "L") {
                    L = element;
                }
            }
            if (element.name == "ice") {
                if (element.value === "normal") {
                    normal = element;
                } else if (element.value === "less") {
                    less = element;
                } else if (element.value === "without") {
                    without = element;
                }
            }
            if (element.name == "sweetness") {
                if (element.value === "full") {
                    full = element;
                } else if (element.value === "half") {
                    half = element;
                } else if (element.value === "none") {
                    none = element;
                }
            }
        }
        if (!(S.checked || M.checked || L.checked)) {
            window.alert("Please select a size.");
            return false;
        }
        if (!(normal.checked || less.checked || without.checked)) {
            window.alert("Please select an ice preference.");
            return false;
        }
        if (!(full.checked || half.checked || none.checked)) {
            window.alert("Please select a sweetness level.");
            return false;
        }
    } catch (err) {
        window.alert("Please complete the form")
    } finally {
        return true;
    }

}

function placeOrder(event) {
    event.preventDefault();
    if (validateForm() == true) {
        var elements = document.getElementById("drinkOrderForm").elements;
        for (var i = 0, element; element = elements[i++];) {
            if (element.name == "inputName") {
                username = element.value.trim();
            }
            if (element.name == "drinkOpts") {
                drink = element.value;
            }
            if (element.name == "size" && element.checked) {
                size = element.value;
            }
            if (element.name == "ice" && element.checked) {
                ice = element.value;
            }
            if (element.name == "sweetness" && element.checked) {
                sweetness = element.value;
            }
        }
        const orderData = [username, drink, size, ice, sweetness];
        localStorage.setItem("orders", orderData);
        //window.alert("Order placed successfully! Thank you for your order.");
        $(".message").html("<div>Order placed successfully! Thank you for your order.</div>").removeClass("d-none");
        $(".message > div").addClass("alert alert-primary").hide().fadeIn(500).delay(3000).fadeOut(500, function () {
            $(".message").remove("alert").addClass("d-none");
            document.getElementById("drinkOrderForm").reset();
            document.getElementById("price").innerHTML = 0;
        });
    };
};

$(document).ready(function () {
    $("#inputName").on("click change", function () {
        if ($(this).val().trim() === "") {
            $(this).addClass("error").removeClass("error-free")
        } else {
            $(this).addClass("error-free").removeClass("error")
        }
    });
    $("#drinkOpts").on("click change", function () {
        if ($(this).val() === null) {
            // console.log($(this).val())
            $(this).addClass("error").removeClass("error-free")
            $("#imgContainer").addClass("d-none")
        } else {
            // console.log($(this).val())
            $(this).addClass("error-free").removeClass("error")
            if ($(this).val() == "bubble-milktea") {
                $("#imgContainer").removeClass("d-none")
                $("#drinkDisplay").attr({ src: "assets/bubble-milktea.png", alt: "Bubble Milktea" })
                // console.log($("#drinkDisplay"))
            } else if ($(this).val() == "iced-latte") {
                $("#imgContainer").removeClass("d-none")
                $("#drinkDisplay").removeClass("d-none").attr({ src: "assets/iced-latte.jpg", alt: "Iced Latte" })
            } else if ($(this).val() == "caramel-macchiato") {
                $("#imgContainer").removeClass("d-none")
                $("#drinkDisplay").removeClass("d-none").attr({ src: "assets/caramel-macchiato.jpg", alt: "Caramel Macchiato" })
            }
        }
    });
});