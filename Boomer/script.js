document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");
    var card = document.querySelector(".card");
    var loveSong = document.getElementById('loveSong');
    var userMessageInput = document.getElementById('userMessage');
    var textContainer = document.querySelector('.text');

    container.addEventListener("mouseenter", function() {
        requestAnimationFrame(function() {
            animateCard("-90px");
            playLoveSong();
        });
    });

    container.addEventListener("mouseleave", function() {
        requestAnimationFrame(function() {
            animateCard("0");
            pauseLoveSong();
        });
    });

    function animateCard(topValue) {
        card.style.top = topValue;
    }

    function playLoveSong() {
        loveSong.play();
    }

    function pauseLoveSong() {
        loveSong.pause();
    }

    function updateMessage() {
        var userMessage = userMessageInput.value;
        if (userMessage) {
            textContainer.innerHTML = userMessage.replace(/\n/g, '<br>');
        }
    }

    var messageInput = document.querySelector('.message-input button');
    messageInput.addEventListener('click', updateMessage);
});
