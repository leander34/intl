import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR/index.js";
function getWeekDays() {
    const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })
    return Array.from(Array(7).keys())
        .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
        .map((weekday) => {
            return weekday.substring(0, 1).toUpperCase().concat(weekday.substring(1))
        })
}

// console.log(getWeekDays())


const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    // dateStyle: 'short',
    weekday: 'long',
    // day: 'numeric',
    // month: 'long'
})

// console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()))
 
// console.log(dateFormatter.format(new Date(Date.UTC(2023, 6, 1))))
////

const publishedDateRealativeToNow = formatDistanceToNow(new Date('2023-07-13'), {
    locale: ptBR,
    addSuffix: true,
});

console.log(publishedDateRealativeToNow)

const relativeFormatter = (numberDay) => {
    return new Intl.RelativeTimeFormat('pt-BR', {
        style: "long",
        numeric: 'auto',
    }).format(numberDay, 'day')
}

console.log(relativeFormatter(-1000))
//



///

const priceFormater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});


const unitFormater = new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: 'liter',
    unitDisplay: 'long'
});

const formatter = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 3,
    minimumFractionDigits: 1
});

const wordFormatter = new Intl.PluralRules(undefined, {
})
// console.log(priceFormater.format(1000))

// console.log(unitFormater.format(2000))

// console.log(formatter.format(3200.0136999))

console.log(wordFormatter.select(9))