//converter
// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.

function convert() {
    const UAH_USD =0.038;
    const USD_UAH =26.239;
    const UAH_EUR =0.033;
    const EUR_UAH =30.563;
    const EUR_USD =1.165;
    const USD_EUR =0.859;
    let countval = prompt('Введите Валюту которую хотите поменять?');
    let countin = prompt('Введите на какую Валюту хотите обменять?');
    let countout = prompt('Какую сумму валюты хотите обменять?');
    function result(countval, countin, countout) {
        if(countval === null || !isNaN(countval) || countval === ''){
            alert('error');
        } else if (countin === null || !isNaN(countin) || countin === ''){
            alert('error 2');
        } else if(countout === null || isNaN(countout) || countout === ''){
            alert('error 3');
        } else if (countval==='UAH' && countin === 'USD'){
            return `${countout*UAH_USD}USD`;
        } else if (countval==='USD' && countin === 'UAH'){
            return `${countout*USD_UAH}UAH`;
        } else if (countval==='UAH' && countin === 'EUR'){
            return `${countout*UAH_EUR}EUR`;
        } else if (countval==='EUR' && countin === 'UAH'){
            return `${countout*EUR_UAH}UAH`;
        } else if (countval==='EUR' && countin === 'USD'){
            return `${countout*EUR_USD}USD`;
        } else if (countval==='USD' && countin === 'EUR'){
            return `${countout*USD_EUR}EUR`;
        }
    }
    return result(countval,countin,countout);
}
alert (convert());