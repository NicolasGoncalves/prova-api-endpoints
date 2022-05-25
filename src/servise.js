
export function somar (j, n){
    return n + j;
}

export function dobro (n){
    return n * 2;
}


export function temperatura(temp){
    let x="";
    if(temp<=37){
     x="temperatura normal";
    }

    else if(temp>37 && temp<=37.5){
        x="Febrícula"
    }

    else if(temp>=37.6 && temp <=38.5){
        x="Febre moderada"
    }
    else if(temp>=38.6){
        x="Febre alta"
    }
    return x;
}

export function tabuada(numero){

    let x=[];
    for(let i=0;i<=10;i++){
        x[i]=numero*i;
    }
    return x;
}

export function media( ){



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

export function ingresso (semana, meia, inteira,nacionalidade){
    
    if(nacionalidade == 'brasileira')
        return(inteira + meia)*4; 
    
    else if(semana =='quarta')
        return(interia + meia) * 14;
    
    else
        return(inteira * 28) + (meia * 14);

}

export function caracter(texto, caractere ){

    let q = 0;
    
    for (let letra  of texto){
        if(letra == caractere ){
            q++;
        }
    }
    return q;
}

export function maiornumero(numero){

    let M = Number.MIN_VALUE;
    for(let item of numero){

        if(item > maior){
            maior = item;
        }
    } 
    return maior;
}