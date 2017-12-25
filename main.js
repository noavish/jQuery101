$(document).ready(function () {
    $('h1').css('color', 'blue');
    $('.red-div').css('color', 'red');
    $('li:first-child').css('color', 'green');
    $('li:nth-child(2)').css('color', 'pink');
    $('#brown-div').css('color', 'brown');
    
    $('#first').click(function () {
        alert ($('#my-input1').val());
    });
    
    $('#second').click(function () {
        var newName = $('#my-input2').val();
        $('.students').append('<li>'+newName+'</li>');
    });
    
    $(document).on('click','.students li', function () {
        $(this).remove();
    });
});
