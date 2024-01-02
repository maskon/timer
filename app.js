const body = document.querySelector('body')

const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

const timer = document.querySelector('#clock__timer')
const start = document.querySelector('#clock__start')
const stop = document.querySelector('#clock__clear')

const modal = document.querySelector('#modal')
const modalItem = document.querySelector('#modal__item')
const close = document.querySelector('#modal__close')
const modalTimer = document.querySelector('#modal__timer')

const inputHour = document.querySelector('#input__hour')
const inputMinute = document.querySelector('#input__minute')
const inputSecond = document.querySelector('#input__second')
    
const labelMinute = document.querySelector('#label__minute')
const labelSecond = document.querySelector('#label__second')

let intervalId = null

timer.addEventListener('click', () => {
    
    modal.classList.remove('none')
    
    setTimeout(modalTransform, 200)
    
    function modalTransform() {
        modalItem.style.transform =  'rotateX(0deg)'
    }
    
    function modalTransform2() {   
        modal.classList.add('none')
    }
    
    inputHour.value = ''
    inputMinute.value = ''
    inputSecond.value = ''
    
    if (close) {
        close.addEventListener('click', () => {
            modalItem.style.transform =  'rotateX(90deg)'
            setTimeout(modalTransform2, 1000)
        })
    }
    
    body.addEventListener('click', function (e) {
        if (e.target === modal) {
            modalItem.style.transform =  'rotateX(90deg)'
            setTimeout(modalTransform2, 1000)
        }   
    })
    
    inputHour.addEventListener('input', function () {
        if (Number(inputHour.value) < 10) {
            inputHour.value = '0' + inputHour.value
        } 
        
        else if (Number(inputHour.value) >= 10) {
            inputHour.value = Number(inputHour.value)
        }
           
        if (inputHour.value.length > 2) {
            inputHour.value = inputHour.value.slice(-2)
        }
    })

    inputMinute.addEventListener('input', function () {
        
        if (Number(inputMinute.value) > 59) {
            inputMinute.value = 59
            labelMinute.innerHTML = 'Максимальное кол-во минут : 59'
            labelMinute.style.color = 'red'
        }
        
        if (Number(inputMinute.value) < 59) {
            inputMinute.value = inputMinute.value
            labelMinute.innerHTML = 'Минуты'
            labelMinute.style.color = 'rgb(60, 60, 60)'
        }
        
        if (Number(inputMinute.value) < 10) {
            inputMinute.value = '0' + inputMinute.value
        }
        
        else if (Number(inputMinute.value) >= 10) {
            inputMinute.value = Number(inputMinute.value)
        }
        
        if (inputMinute.value === '00') {
            inputMinute.value = ''
        }   
        
        if (inputMinute.value.length > 2) {
            inputMinute.value = inputMinute.value.slice(-2)
        }
    })
    
    inputSecond.addEventListener('input', function () {
        
        if (Number(inputSecond.value) > 59) {
            inputSecond.value = 59
            labelSecond.innerHTML = 'Максимальное кол-во секунд : 59'
            labelSecond.style.color = 'red'
        }
        
        if (Number(inputSecond.value) < 59) {
            inputSecond.value = inputSecond.value
            labelSecond.innerHTML = 'Секунды'
            labelSecond.style.color = 'rgb(60, 60, 60)'
        }
        
        if (Number(inputSecond.value) < 10) {
            inputSecond.value = '0' + inputSecond.value
        }
        
        else if (Number(inputSecond.value) >= 10) {
            inputSecond.value = Number(inputSecond.value)
        }
        
        if (inputSecond.value === '00') {
            inputSecond.value = ''
        }
          
        if (inputSecond.value.length > 2) {
            inputSecond.value = inputSecond.value.slice(-2)
        }
        
    })

    modalTimer.addEventListener('click', function () {
        
        modalItem.style.transform =  'rotateX(90deg)'
        setTimeout(modalTransform2, 1000)
        
        
        
        if (inputHour.value) {
            hour.innerHTML = inputHour.value
        } else {
            hour.innerHTML = '00'
        }
        
        if (inputMinute.value) {
            minute.innerHTML = inputMinute.value
        } else {
            minute.innerHTML = '00'
        }
         
        if (inputSecond.value) {
            second.innerHTML = inputSecond.value
        } else {
            second.innerHTML = '00'
        }

        timer.innerHTML = 'Новый таймер'
    })  
})

start.addEventListener('click', () => {
        
    clearInterval(intervalId)

    if (start.textContent === 'Старт') {
            
        if (inputSecond.value !== '' || inputMinute.value !== '' || inputHour.value !== '') {
            
            intervalId = setInterval(function() {

                if (inputSecond.value === '' && inputMinute.value === '' && inputHour.value === '') {
                    clearInterval(intervalId)
                } else {
                    second.innerHTML = Number(second.innerHTML) - 1 

                    if (Number(second.innerHTML) < 10 && Number(second.innerHTML) >= 0) {
                        second.innerHTML = '0' + Number(second.innerHTML)
                    }

                    if (Number(second.innerHTML) < 0) {
                        second.innerHTML = 59

                        minute.innerHTML = Number(minute.innerHTML) - 1

                        if (Number(minute.innerHTML) < 10 && Number(minute.innerHTML) >= 0) {
                            minute.innerHTML = '0' + Number(minute.innerHTML)
                        }
                    }

                    if (Number(minute.innerHTML < 0)) {
                        second.innerHTML = 59
                        minute.innerHTML = 59
                        hour.innerHTML = Number(hour.innerHTML) - 1

                        if (Number(hour.innerHTML) < 10 && Number(hour.innerHTML) >= 0) {
                            hour.innerHTML = '0' + Number(hour.innerHTML)
                        }
                    }

                    if (Number(second.innerHTML) === 0 && Number(minute.innerHTML) === 0 && Number(hour.innerHTML) === 0) {
                        clearInterval(intervalId)

                        hour.innerHTML = '00'
                        minute.innerHTML = '00'
                        second.innerHTML = '00'

                        timer.innerHTML = 'Задать таймер'
                        start.innerHTML = 'Старт'
                    }
                }

            }, 1000)
                
            start.innerHTML = 'Пауза'
        }
    }
        
    else if (start.textContent === 'Пауза') {
        clearInterval(intervalId)
        start.innerHTML = 'Старт'
    }     
})

stop.addEventListener('click', function () {
        
    clearInterval(intervalId)
  
    hour.innerHTML = '00'
    minute.innerHTML = '00'
    second.innerHTML = '00'
 
    timer.innerHTML = 'Задать таймер'
    start.innerHTML = 'Старт'
})    
    
    
