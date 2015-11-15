(function() {
    var btnShow = document.querySelector(".write-us-btn");
    var writeForm = document.querySelector(".write-us-popup");
    var closeForm = document.querySelector(".closing-write-us");
    var userName = document.querySelector("#popup-user-name");
    var userEmail = document.querySelector("#popup-user-email");
    var userMessage = document.querySelector("#message-text");
    var form = document.querySelector(".write-us-popup form");
    var storageName = localStorage.getItem("userName");
    var storageEmail = localStorage.getItem("userEmail");

    var btnBuy = document.querySelectorAll(".buy-accept");
    var cart = document.querySelector(".add-to-cart-popup");
    var closeCart = document.querySelectorAll(".closing-cart");

    var mapShow = document.querySelector(".open-modal-map");
    var map = document.querySelector(".modal-map");
    var closeMap = document.querySelector(".closing-map");

    var linkArrow = document.querySelectorAll(".promo-slides button");
    var inputNav = document.querySelectorAll('[name^="promo"]');

    if (writeForm) {
        btnShow.addEventListener("click", function(event) {
            event.preventDefault();
            writeForm.classList.add("write-us-popup-show");

            if (storageName && !storageEmail) {
                userName.value = storageName;
                userEmail.focus();
            } else if (storageName && storageEmail) {
                userName.value = storageName;
                userEmail.value = storageEmail;
                userMessage.focus();
            } else {
                userName.focus();
            }
        });

        form.addEventListener('submit', function(event) {
            if (!userName.value || !userEmail.value || !userMessage.value) {
                event.preventDefault();
                writeForm.classList.add("modal-error");
            } else {
                localStorage.setItem("userName", userName.value);
                localStorage.setItem("userEmail", userEmail.value);
            }
        });

        closeForm.addEventListener("click", function(event) {
            event.preventDefault();
            writeForm.classList.remove("write-us-popup-show");
            writeForm.classList.remove("modal-error");
        });

        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) {
                if (writeForm.classList.contains("write-us-popup-show")) {
                    writeForm.classList.remove("write-us-popup-show");
                    writeForm.classList.remove("modal-error");
                }
            }
        });
    };
    for (var i = 0; i < btnBuy.length; i++) {
        btnBuy[i].addEventListener("click", function(event) {
            event.preventDefault();
            cart.classList.add("add-to-cart-show");
        });
    }

    for (var i = 0; i < closeCart.length; i++) {
        closeCart[i].addEventListener("click", function(event) {
            event.preventDefault();
            cart.classList.remove("add-to-cart-show");
        });
    }

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (cart.classList.contains("add-to-cart-show")) {
                cart.classList.remove("add-to-cart-show");
            }
        }
    });
    if (map) {
        mapShow.addEventListener("click", function(event) {
            event.preventDefault();
            map.classList.add("modal-map-show");
        })

        closeMap.addEventListener("click", function(event) {
            event.preventDefault();
            map.classList.remove("modal-map-show");
        })

        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) {
                if (map.classList.contains("modal-map-show")) {
                    map.classList.remove("modal-map-show");
                }
            }
        });
    };
    for (var i = 0; i < linkArrow.length; i++) {
        linkArrow[i].addEventListener('click', function(e) {
            var currentInput = document.querySelector(".promo-block-slider input:checked");
            var currentInputIndex = [].indexOf.call(inputNav, currentInput);
            var inputCount = inputNav.length;
            switch (this.dataset.direction) {
                case "left":
                    if (currentInputIndex == 0) {
                        inputNav[inputCount - 1].checked = true;
                    } else {
                        inputNav[currentInputIndex - 1].checked = true;
                    }
                    break;

                case "right":
                    if ((inputCount - 1) == currentInputIndex) {
                        inputNav[0].checked = true;
                    } else {
                        inputNav[currentInputIndex + 1].checked = true;
                    }
                    break;
            }
        });
    };
})();