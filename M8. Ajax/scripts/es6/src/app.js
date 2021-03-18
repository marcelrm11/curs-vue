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

    let lista = [];
    fetch('http://api.icndb.com/jokes').then(response => response.json()).then(function (data) {
        let x = data.value;
        for (let i = 0; i < x.length; i++) {
            lista.push(x[i].joke);
        }
    });
    
    $("#searchbtn").click(function (e) { 
        e.preventDefault();
        $("#jokesResult").html(`10 Best Joke results`);
        let search = document.getElementById("searchcontent").value.toLowerCase();
        let count=0;
        for (let i = 0; i < lista.length; i++) {
            let pos = lista[i].toLowerCase().search(search);
            if (count==10) {
                break;
            }
            else if (pos!==-1) {
                $("#jokesResult").html($("#jokesResult").html()+`
                <li> ${lista[i]} </li>`);
                count++;
            }
        }
        if (count==0) {
            $("#jokesResult").html(`
                No results <i class="far fa-sad-tear"></i> Try again with other words`);
        }
    });

    $("#clearbtn").click(function (e) { 
        e.preventDefault();
        $("#jokesResult").html(`10 Best Joke results`);
    });
});
