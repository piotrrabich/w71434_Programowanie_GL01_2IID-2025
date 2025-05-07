//zadanie1
function sprawdzPelnoletnosc() {
    
    const wiek = parseInt(prompt("Podaj swój wiek:"));

    
    if (wiek >= 18) {
        console.log("Jesteś pełnoletni.");
    } else {
        console.log("Nie jesteś pełnoletni.");
    }
}


sprawdzPelnoletnosc();

//zadanie2
function konwertujCelsjuszNaFahrenheit() {
    
    const celsius = parseFloat(prompt("Podaj temperaturę w stopniach Celsjusza:"));

    
    const fahrenheit = (celsius * 9/5) + 32;

    
    console.log(`${celsius}°C to ${fahrenheit}°F.`);
}


konwertujCelsjuszNaFahrenheit();

//zadanie3
function operacjeNaTablicy() {
   
    const tablica = [3, 12, 5, 8, 17, 2, 25, 8, 3];

    
    const suma = tablica.reduce((acc, curr) => acc + curr, 0);
    console.log(`Suma wartości: ${suma}`);

    
    const parzyste = tablica.filter(num => num % 2 === 0);
    console.log(`Liczby parzyste: ${parzyste}`);

    
    const pomnozone = tablica.map(num => num * 3);
    console.log(`Liczby pomnożone przez 3: ${pomnozone}`);

    
    const numerAlbumu = 12345;
    tablica.push(numerAlbumu);  
    const indeksAlbumu = tablica.indexOf(numerAlbumu);  
    console.log(`Numer albumu ${numerAlbumu} znajduje się na indeksie: ${indeksAlbumu}`);

    
    const srednia = suma / tablica.length;
    console.log(`Średnia arytmetyczna: ${srednia}`);

    
    const max = Math.max(...tablica);
    console.log(`Największa liczba: ${max}`);

    
    const liczbaDoZliczenia = 8;
    const liczbaWystapien = tablica.filter(num => num === liczbaDoZliczenia).length;
    console.log(`Liczba ${liczbaDoZliczenia} występuje ${liczbaWystapien} razy.`);
}


operacjeNaTablicy();
//zadanie4
function generujCiągFibonacciego(iloscElementow) {
    const fib = [0, 1];  

    for (let i = 2; i < iloscElementow; i++) {
        
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}


const ciagFibo100 = generujCiągFibonacciego(100);


console.log(ciagFibo100);
