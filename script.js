$(document).ready(function() {
    $(".container")
    .mouseenter(function() {
        requestAnimationFrame(function() {
            $(".card").stop().animate(
                {
                    top: "-90px",
                },
                "slow"
            );
        });
    })
    .mouseleave(function() {
        requestAnimationFrame(function() {
            $(".card").stop().animate(
                {
                    top: 0,
                },
                "slow"
            );
        });
    });
});
