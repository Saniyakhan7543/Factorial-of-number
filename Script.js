

    function fact(){
        var a;
        a=Number(document.getElementById("first").value);
        let factorial = 1;
        for (i = 1; i <= a; i++) {
            factorial *= i;}
        document.getElementById("number").innerHTML= factorial;
        
        }