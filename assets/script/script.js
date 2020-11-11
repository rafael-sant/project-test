function addValueToInput() {
    $(".number ul li").not("#featured, #historic, #back").click(function(){
        
        var value = $("#visor").val();
        var newValue = value + $(this).text(); 
        $("#visor").val(newValue);
    })
}

function deleteNumber() {
    $(".number ul li#back").click(function(){
        var value = $("#visor").val();
        $("#visor").val(value.substring(0, value.length - 1))
    });
}

function showHistoric() {
    $("#historic").click(function(){
        $(".historic").toggleClass("active")
    })
}



$(document).ready(function(){
    addValueToInput();
    deleteNumber();
    showHistoric();
})
