const body = document.querySelector('body')

const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

const timer = document.querySelector('#clock__timer')
const start = document.querySelector('#clock__start')
const stop = document.querySelector('#clock__clear')

const modal = document.querySelector('#modal')
const close = document.querySelector('#modal__close')
const modalTimer = document.querySelector('#modal__timer')

timer.addEventListener('click', () => {
    const inputHour = document.querySelector('#input__hour')
    const inputMinute = document.querySelector('#input__minute')
    const inputSecond = document.querySelector('#input__second')
    
    modal.classList.remove('none')
    
    inputHour.value = ''
    inputMinute.value = ''
    inputSecond.value = ''
    
    if (close) {
        close.addEventListener('click', () => {
            modal.classList.add('none')
        })
    }
    
    body.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.add('none')
        }   
    })
    
    inputHour.addEventListener('input', function () {     
        if (Number(inputHour.value) > 59) {
            inputHour.value = '00'
        }
    })
    
    inputMinute.addEventListener('input', function () {
        if (Number(inputMinute.value) > 59) {
            inputMinute.value = '00'
        }
    })
    
    inputSecond.addEventListener('input', function () {
        if (Number(inputSecond.value) > 59) {
            inputSecond.value = '00'
        }
    })

    modalTimer.addEventListener('click', function () {
        
        modal.classList.add('none')
        
        hour.innerHTML = inputHour.value
        minute.innerHTML = inputMinute.value
        second.innerHTML = inputSecond.value
        
        timer.innerHTML = 'Новый таймер'
    })
    
    
    let intervalId
    
    start.addEventListener('click', () => {
        intervalId = setInterval(function() {
            
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
            }
            
        }, 1000)
    })
    
    stop.addEventListener('click', function () {  
        clearInterval(intervalId)
        
        hour.innerHTML = '00'
        minute.innerHTML = '00'
        second.innerHTML = '00'
        
        timer.innerHTML = 'Задать таймер'
    })
})
    
    
    
