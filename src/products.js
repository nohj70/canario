$(document).ready(function() {
    $.ajax({
        url: "http://52.154.167.86/api/customers/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': 'b50f0b32d19048fab4fade2f913567e9;product=unlimited' }
    }).then(function(data) {
       $('.customers').append(data[Math.floor(Math.random()*3)]);
    });

    
    $.ajax({
        url: "http://52.154.167.86/api/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': 'b50f0b32d19048fab4fade2f913567e9;product=unlimited' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

/* $(document).ready(function() {
    $.ajax({
        url: "http://52.141.219.120/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': '9db32e4fed844af0aac4537ed2f784c8;product=unlimited' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
}); */ 