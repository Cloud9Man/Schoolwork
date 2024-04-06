// Lietojam try-catch, lai mēs varētu iegūt kļūdu, ja tāda veidojas.
try {
  //Ievietojam mainīgo, kuru varam mainīt pēc nepieciešamības.
  var name;

  //Meklējam elementus pēc identifikatora, mūsu gadījumā "meow" un "result".
  const meow = document.getElementById('meow')
  const result = document.getElementById('result')

  //Jautājam lietotājam kāds ir viņa vārds. || prompt() liek ievadīt atbildi/tekstu.
  name = prompt("What is your name?");
  //console.log() konsolē ieraksta tekstu ||| .toString() pārveido mūsu mainīgo uz tekstu, šajā konstekstā tas nav obligāti.
  console.log(`User replied: ${name.toString()}`);
  //alert() izmet paziņojumu ar tekstu; dara to pašu ko prompt(), bet neliek ievadīt neko.
  alert(`You said "${name.toString()}"`)

  //Ķeram kļūdas
  try {
    //Mainam elementa "meow" tekstu ar JS palīdzību.
    meow.innerText = `Sveiks ${yesNo}`;
  } catch (ex) {
    //Ja ir kļūda, lai to izmet konsolē.
    console.log(`Error: ${ex.toString()}`);
  }
} catch (ex) {
  console.log(`Error: ${ex.toString()}`);
}

try {
  //Definējam mainīgos
  let skaitlis1;
  let skaitlis2;

  //ParseInt pārveido tekstu par skaitli, lai ar to varētu rēķināt
  skaitlis1 = parseInt(prompt("Ievadi 1. skaitli invalidka"));
  skaitlis2 = parseInt(prompt("Ievadi 2. skaitli invalidka"));

  alert(`Man tagad ir tavas mājas adreses :3 || ${Math.floor(Number(skaitlis1) + Number(skaitlis2))}`);
  result.innerText = `Rezultāts: ${skaitlis1} + ${skaitlis2} = ${Math.floor(Number(skaitlis1) + Number(skaitlis2))}`

  /*
  Number() - pārveido specifisku lietu uz ciparu
  Math.Floor() - noappaļo vērtību
  
  */
} catch (ex) {
  console.log(`Error: ${ex.toString()}`)
}


//Ķeram kļūdas
try {
  //Definējam mainīgos
  var answerResult;
  var answer = prompt("Yes or no")

  //Ar switch() mēs varam mainīt outputu skatoties uz ievadīto vērtību
  switch (answer) {
    //lietojam || jo tas ļauj gan "yes", gan "yeah"
    case "yes" || "yeah" :
      answerResult = "Yayyy!"
      alert(answerResult);
      break;

    case "no" || "nah" :
      answerResult = "awhhh :["
      alert(answerResult);
      break;

    //default, ja netiek dota neviena no pieejamajām vērtībām
    default: 
      answerResult = "Huh?"
      alert(answerResult);
  }
} catch (ex) {
  console.log(`Error: ${ex.toString()}`)
}

/*
  Bez try-catch arī varam iztikt, tikai netiks uzrādītas kļūdas, ja tādas rodas.



  -- Šadi izskatās mūsu JS fails bez try-catch --
  var name;

  const meow = document.getElementById('meow')
  const result = document.getElementById('result')

  name = prompt("What is your name?");
  console.log(`User replied: ${name.toString()}`);
  alert(`You said "${name.toString()}"`)

  meow.innerText = `Sveiks ${yesNo}`;


  let skaitlis1;
  let skaitlis2;

  skaitlis1 = parseInt(prompt("Ievadi 1. skaitli invalidka"));
  skaitlis2 = parseInt(prompt("Ievadi 2. skaitli invalidka"));

  alert(`Man tagad ir tavas mājas adreses :3 || ${Math.floor(Number(skaitlis1) + Number(skaitlis2))}`);
  result.innerText = `Rezultāts: ${skaitlis1} + ${skaitlis2} = ${Math.floor(Number(skaitlis1) + Number(skaitlis2))}`
*/