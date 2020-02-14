

function ajaxCall(params)
{
    if(params)
    {

        var url = params.url;
        var parameters = '?';
        for(var i in params.parameters)
        {
            parameters+=Object.keys(params.parameters[i])[0]+"="+params.parameters[i][Object.keys(params.parameters[i])[0]];
        }

        url+=parameters;

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function()
        {

            if(this.readyState == 4 && this.status == 200)
            {
                console.log(this.responseText);
                var output = JSON.parse(this.responseText);

                switch(params.parameters[0].action)
                {
                    case"affich" :
                        for(var i in output)
                    {
                        var div = document.createElement('div');
                        div.innerHTML = "<strong>"+output[i].pseudo+"</strong>";
                        div.innerHTML+= "<p>"+output[i].commentaire+"</p>";
                        div.innerHTML+="<hr>";
                        document.getElementById('main').appendChild(div);
                    }
                        break;

                    case "ajout":

                        for(var j in output)
                        {
                            var div = document.createElement('div');
                            div.innerHTML = "<strong>"+output[j].pseudo+"</strong>";
                            div.innerHTML+= "<p>"+output[j].commentaire+"</p>";
                            div.innerHTML+="<hr>";
                            document.getElementById('main').appendChild(div);

                            ajaxCall(
                                {'url' : 'script.php',
                                    'parameters' :
                                        [
                                        {'action' : 'affich'}
                                     ]
                                }
                            );
                        }
                        break;

                }
            }
        };

        xhttp.open("GET",url,true);

        xhttp.send();



    }
}
ajaxCall(
    {'url' : 'script.php',
        'parameters' : [
            {'action' : 'affich'}
        ]
    }
);

document.getElementById('btn').addEventListener('click', function()
{
    console.log(document.getElementById("pseudo").value);
    console.log(document.getElementById("com").value);

    ajaxCall(
        {'url' : 'script.php',
            'parameters' : [
                {'action' : 'ajout'},
                {"pseudo" : "&"+document.getElementById("pseudo").value},
                {"com" : "&"+document.getElementById("com").value}
            ]
        }
    );


});


