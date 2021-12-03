const $container = document.querySelector('.container')
const $date = document.getElementById('date')
const $text = document.getElementById('text')
const $button = document.getElementById('button')


const current = new Date()
console.log(current);


button.addEventListener("click", e => {
const selected = new Date($date.value)
console.log(selected)


const difference = selected.getTime() - current.getTime()

function toDays(ms){
    const days = Math.floor(ms/ 1000/ 60/ 60/ 24)
    return days
}


function toHours(ms){
    const days = toDays(ms)
    const hours = Math.floor(ms/1000/60/60)

    const remainingHours = hours - (days * 24)

    return remainingHours
}

function toMinutes(ms){
    const days = toDays(ms)
    const hours = toHours(ms)
    const minutes = Math.floor(ms/ 1000/60)
    const remainingMinutes = minutes - (hours * 60) - (days * 24 * 60)

    return remainingMinutes
}

function text(ms){
    let text = $text.value
    return text
}

console.log(`days: ${toDays(difference)}`)
console.log(`Hours: ${toHours(difference)}`)
console.log(`Minutes: ${toMinutes(difference)}`)


$container.innerHTML = `<h1>${text()}</h1>
Days: ${toDays(difference)} Hours: ${toHours(difference)} Minutes: ${toMinutes(difference)}`

});

