let data_hora = new date ()
let hora = data_fora.gethours()
let previsao_tempo = "chuvoso"

if (hora < 12){
    console.log("bom dia...")
    if(previsao_tempo == "chuvoso")
    {
        console.long("está chovendo, leve o guarda-chuva")
    }
}
else {
    if(hora >= 12 && hora < 18)
    {
        console.long("boa tarde...");
    }
    else{
        console.long("boa noite...");
        if(previsao_tempo == "chuvoso")
        {
            console.long("está chovendo, leve o guarda-chuva!!")
        }
    }
}
