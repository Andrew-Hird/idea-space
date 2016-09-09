window.onload = function() {
    var text_input = document.getElementById('inputField')
    text_input.focus()
    text_input.select()

    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);

    function fontIncrease() {
        $(".contentContainer").dblclick(function() {
            var fontSize = parseInt($(this).css("font-size"))
            fontSize = fontSize + 5 + "px"
            $(this).css({
                'font-size': fontSize
            })
        })
    }
    fontIncrease()

    function fontDecrease() {
        $(".contentContainer").contextmenu(function() {
            var fontSize = parseInt($(this).css("font-size"))
            fontSize = fontSize - 5 + "px"
            $(this).css({
                'font-size': fontSize
            })
        })
    }
    fontDecrease()

    function drag() {
        $(".contentContainer").draggable();
    }
    drag()
}
