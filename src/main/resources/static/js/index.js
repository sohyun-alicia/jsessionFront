function callAPI() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/welcome',
        success: function(res) {console.log(res)},
        error: function(res) {console.log(res)}
    });
}
