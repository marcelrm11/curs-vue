// recorda fer el git Bash i npm run build

$(document).ready(function () {
    $("#joke").click(function (e) { 
        e.preventDefault();
        $.getJSON("http://api.icndb.com/jokes/random",
            function (data) {
                console.log(data);
                $("#jokesList").html(`
                ${data.value.joke}
                `);
            }
        );
    });


    // s'ha de fer amb el metode fetch (post?)
    let chistes;
    $.getJSON("http://api.icndb.com/jokes",
        function (data) {
            chistes=data.value;
            $("#searchbtn").click(function (e) { 
                e.preventDefault();
                let chiste = $(this.joke);
                console.log(chistes);
                $.each(chistes, function (i, item) { 
                    if (item.joke.indexOf(joke)!==-1) {
                        
                    }
                });
                
                
            });
        }
    );
});
