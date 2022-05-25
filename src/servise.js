
export function somar (j, n){
    return n + j;
}

export function dobro (n){
    return n * 2;
}

export function corprimaria(cor){

    let img = "";

    if((cor == "azul") ||(cor == "amarelo") || (cor =="vermelho")) {
        img = "true";
    }
    else(
        img="false;"
    )
    return img;
}

export function ingresso (dia,nascionalidade,meia){
    let x=28.50;
    if(nascionalidade=="nascional"){
        x=5;
    }
    else if(dia=="quarta"){
        x=14.25;
    }
    else if(meia=="meia"){
        x=14.25;
    }
    return x;
}

export function temperatura(temp){
    let x="";
    if(temp<=37)
    x="temperatura normal";
    else if(temp>37 && temp<=37.5)
    x="Febrícula"
    else if(temp>=37.6 && temp <=38.5)
    x="Febre moderada"
    else if(temp>=38.6)
    x="Febre alta"
    return x;
}

export function tabuada(numero){
    let x=[];
    for(let i=0;i<=10;i++){
        x[i]=numero*i;
    }
    return x;
}