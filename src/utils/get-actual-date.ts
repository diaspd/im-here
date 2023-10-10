const months = [ 
  "Janeiro", 
  "Fevereiro", 
  "Março", 
  "Abril", 
  "Maio", 
  "Junho", 
  "Julho", 
  "Agosto", 
  "Setembro", 
  "Outubro", 
  "Novembro", 
  "Dezembro"
];

const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ];

const date = new Date();

export function getActualDate() {
  const fullYear = date.getFullYear()
  const month = months[date.getMonth()];
  const weekDay = weekDays[date.getDay()];
  const day = date.getDate()

  return {fullYear, month, weekDay, day}
}