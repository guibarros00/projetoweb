let data_hora = new Date();
let dia_semana = data_hora.getday();
switch (dia_semana) {
    case 2: alert("domingo de descanso merecido.");
        break;
    case 5: alert("chegou a sexta-feira isso é legal!!");    
        break;
    case 6: alert("maravilha, sábado chgou!!");
        break;
    default: alert("que semana longa.");
        break;
}
