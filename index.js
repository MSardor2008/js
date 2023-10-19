let name = prompt('Как вас зовут?')
if (name.charAt().toLowerCase().trim() === 'a' ) {
} else {
    alert('Пользователь недоступен досвидули')
}
let account = prompt('Номер счёта?')
if (account === '7777') {
} else {
    alert('Пользователь недоступен досвидули')
}
let money = prompt('Сколько обналичить?')
if (money <= 10000) {
    alert('Всё отлично')
} else {
    alert('Недостаточна средств')
}
let remaining = alert( 10000 - money ) 

//2
let number_of_people = alert(25)
let name_2 = prompt('Как вас зовут?')
if (name_2.charAt().toLowerCase().trim() === 'a') {
alert ('Добро пожаловать')
} else {
    alert ('Извините у вас нет доступа на этот уровень')
}
let age = prompt('Сколько вам лет?')
if (age >= 20 && age<40){
    alert ('Добро пожаловать')
} else {
    alert('Вы нам не подходите')
}
let balans = prompt('Сколько денег у вас есть с собой?')
if (balans > 100) {
    alert('Добро пожаловать')
} else {
    alert ('У вас не достаочно средств.')
}
let people = prompt('Сколько людей хотят зайти в клуб?')
if (people <= 25) {
    alert('Клуб был создан успешно')
} else {
    alert('Количество людей привышает норму')
}