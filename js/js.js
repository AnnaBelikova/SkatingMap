$('#loginButton').click(function(){
    $('#loginModal').modal('toggle');
});

$('#buttonDir').click(function(){
    $('#skateRouting').modal('toggle');
});

$('#buttonNews').click(function(){
    $('#newsAdding').modal('toggle');
});

$('#buttonRoute').click(function(){
    $('#routeAdding').modal('toggle');
});

$('#regLink').click(function(){
    $('#loginModal').modal('hide');
    $('#regModal').modal('toggle');
    
});

$('#passwordLink').click(function(){
    $('#loginModal').modal('hide');
    $('#passModal').modal('toggle');s   
});

