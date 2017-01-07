$(function () {
    var tabContainers = $('div.tabs > div'); // получаем массив контейнеров
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // далее обрабатывается клик по вкладке
    $('div.tabs ul.tabnav a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        $('div.tabs ul.tabnav a').removeClass('selected'); // у всех убираем класс 'selected'
        $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
        return false;
    }).filter(':first').click();
    $('.scroll').css("overflow-y", "scroll");


// form 
    $('input').mousemove(function() {
        var name = $(this).attr('name');
        $('label.tooltip[for="'+name+'"]').fadeIn();
    }).mouseout(function(){
        var name = $(this).attr('name');
        $('label.tooltip[for="'+name+'"]').fadeOut();
    });

    $('button').click(function() {
       $('.tooltip').fadeIn(200);
    });
   


 });   



