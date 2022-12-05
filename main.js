const goodsDataPrice = [522, 10500.235, 247 ]
const goodsDataFullprice = [1051, 11500.235, 475 ]
const last = [2, 1000000, 2]



const selectAll = document.getElementById("check")
const card1 = document.getElementById("checkCard1")
const card2 = document.getElementById("checkCard2")
const card3 = document.getElementById("checkCard3")
const card1Minus = document.getElementById('card1Minus')
const card1Plus = document.getElementById('card1Plus')
const card1Count = document.getElementById('card1Count')
const card2Count = document.getElementById('card2Count')
const card3Count = document.getElementById('card3Count')
const card1price = document.getElementById('card1price')
const card2price = document.getElementById('card2price')
const card3price = document.getElementById('card3price')
const mobilecard1price = document.getElementById('mobilecard1price')
const mobilecard2price = document.getElementById('mobilecard2price')
const mobilecard3price = document.getElementById('mobilecard3price')
const card1fullprice = document.getElementById('card1fullprice')
const card2fullprice = document.getElementById('card2fullprice')
const card3fullprice = document.getElementById('card3fullprice')
const mobilecard1fullprice = document.getElementById('mobilecard1fullprice')
const mobilecard2fullprice = document.getElementById('mobilecard2fullprice')
const mobilecard3fullprice = document.getElementById('mobilecard3fullprice')
const summ = document.getElementById('summ') //price
const summPrice = document.getElementById('summPrice')// full price
const summSale = document.getElementById('summSale') //sale
const payNow = document.getElementById('payNow')
const order = document.getElementById('order')

function totalSale() {
    summSale.innerText = Number(summ.innerText.split('с')[0].replace(/\s/g, ''))
        - Number(summPrice.innerText.split('с')[0].replace(/\s/g, ''))
        + ' сом'
}
function pay() {
    payNow.checked ? order.innerText = `Оплатить ${summ.innerText}` : order.innerText = 'Заказать'
}
function totalPrice1pl() {
    summ.innerText = Number(card1price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summ.innerText.split('с')[0].replace(/\s/g, '')) + " сом"
    summPrice.innerText = Number(card1fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summPrice.innerText.split('с')[0].replace(/\s/g, ''))
        + ' сом'
    totalSale()
    pay()
}
function totalPrice2pl() {
    summ.innerText = Number(card2price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summ.innerText.split('с')[0].replace(/\s/g, '')) + " сом"
    summPrice.innerText = Number(card2fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summPrice.innerText.split('с')[0].replace(/\s/g, ''))
        + ' сом'
    totalSale()
    pay()
}
function totalPrice3pl() {
    summ.innerText = Number(card3price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summ.innerText.split('с')[0].replace(/\s/g, '')) + " сом"
    summPrice.innerText = Number(card3fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summPrice.innerText.split('с')[0].replace(/\s/g, ''))
        + ' сом'
    totalSale()
    pay()
}
function totalPrice1min() {
    summ.innerText =  Number(summ.innerText.split('с')[0].replace(/\s/g, ''))
        - Number(card1price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0]) + ' сом'
    summPrice.innerText = Number(card1fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summPrice.innerText.split('с')[0].replace(/\s/g, ''))
        + ' сом'
    totalSale()
    pay()
}
function totalPrice2min() {
    summ.innerText =  Number(summ.innerText.split('с')[0].replace(/\s/g, ''))
        - Number(card2price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0]) + ' сом'
    summPrice.innerText = Number(card2fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summPrice.innerText.split('с')[0].replace(/\s/g, ''))
        + ' сом'
    totalSale()
    pay()
}
function totalPrice3min() {
    summ.innerText =  Number(summ.innerText.split('с')[0].replace(/\s/g, ''))
        - Number(card3price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0]) + ' сом'
    summPrice.innerText = Number(card3fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
        + Number(summPrice.innerText.split('с')[0].replace(/\s/g, ''))
        + ' сом'
    totalSale()
    pay()
}
function countChange(a) {
    if (a===0) {
        if(card1.checked) {
            totalPrice1min()
        }
        card1price.innerText = goodsDataPrice[a] * card1Count.value + ' сом'
        mobilecard1price.innerText = goodsDataPrice[a] * card1Count.value + ' сом'
        card1fullprice.innerText = goodsDataFullprice[a] * card1Count.value + ' сом'
        mobilecard1fullprice.innerText = goodsDataFullprice[a] * card1Count.value + ' сом'
        if(card1.checked) {
            totalPrice1pl()
        }
    }
    if (a===1) {
        if(card2.checked) {
            totalPrice2min()
        }
        card2price.innerText = goodsDataPrice[a] * card2Count.value + ' сом'
        mobilecard2price.innerText = goodsDataPrice[a] * card2Count.value + ' сом'
        card2fullprice.innerText = goodsDataFullprice[a] * card2Count.value + ' сом'
        mobilecard2fullprice.innerText = goodsDataFullprice[a] * card2Count.value + ' сом'
        if(card2.checked) {
            totalPrice2pl()
        }
    }
    if (a===2) {
        if(card3.checked) {
            totalPrice3min()
        }
        card3price.innerText = goodsDataPrice[a] * card3Count.value + ' сом'
        mobilecard3price.innerText = goodsDataPrice[a] * card3Count.value + ' сом'
        card3fullprice.innerText = goodsDataFullprice[a] * card3Count.value + ' сом'
        mobilecard3fullprice.innerText = goodsDataFullprice[a] * card3Count.value + ' сом'
        if(card3.checked) {
            totalPrice3pl()
        }
    }

}
function cardMin(a) {
    if (a === 0) {
        if (card1Count.value <= 1) {
            return
        }
        card1Count.value = Number(card1Count.value) - 1
    }
    if (a === 1) {
        if (card2Count.value <= 1) {
            return
        }
        card2Count.value = Number(card2Count.value) - 1
    }
    if (a === 2) {
        if (card3Count.value <= 1) {
            return
        }
        card3Count.value = Number(card3Count.value) - 1
    }

    countChange(a)
}
function cardPl(a) {
    if (a === 0) {
        if (card1Count.value >= last[a]) {
            return
        }
        card1Count.value = Number(card1Count.value) + 1
    }
    if (a === 1) {
        if (card2Count.value >= last[a]) {
            return
        }
        card2Count.value = Number(card2Count.value) + 1
    }
    if (a === 2) {
        if (card3Count.value >= last[a]) {
            return
        }
        card3Count.value = Number(card3Count.value) + 1
    }
    countChange(a)
}
function selectAllClick() {
    if (selectAll.checked) {
        card1.checked = true;
        card2.checked = true;
        card3.checked = true;
        summ.innerText = Number(card1price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
            + Number(card2price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
            + Number(card3price.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
            + ' сом'
        summPrice.innerText = Number(card1fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
            + Number(card2fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
            + Number(card3fullprice.innerText.split('\n')[0].replace(/\s/g, '').split('с')[0])
            + ' сом'
        totalSale()
        pay()
    } else {
        card1.checked = false;
        card2.checked = false;
        card3.checked = false;
        summ.innerText = 0
        summPrice.innerText = 0
        summSale.innerText = 0
        pay()
    }
}
function check() {
    selectAll.checked = card1.checked && card2.checked && card3.checked;
}
function cardCheck1() {
    check()
    if (card1.checked) {
        totalPrice1pl()
    } else {
        totalPrice1min()
    }
}
function cardCheck2() {
    check()
    if (card2.checked) {
        totalPrice2pl()
    } else {
        totalPrice2min()
    }
}
function cardCheck3() {
    check()
    if (card3.checked) {
        totalPrice3pl()
    } else {
        totalPrice3min()
    }
}

const regStr = /^(?![\d+_@.-0-9-]+$)[a-zA-ZА-Яа-я]*$/
const regmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
const regphone = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g
const reginn = /(?:\d)[\d\-\(\)]{6,}\d/g
const name = document.getElementById('firstname')
const surname = document.getElementById('firstSurname')
const mail = document.getElementById('recipientEmail')
const phone = document.getElementById('recipientPhone')
const inn = document.getElementById('recipientInn')
const labelname = document.getElementById('labelName')
const labelsurname = document.getElementById('labelSurname')
const labelmail = document.getElementById('labelMail')
const labelphone = document.getElementById('labelPhone')
const labelinn = document.getElementById('labelInn')
const nameVlid = document.getElementById('nameValidation')
const surnameVlid = document.getElementById('surnameValidation')
const mailVlid = document.getElementById('mailValidation')
const phoneVlid = document.getElementById('phoneValidation')
const innVlid = document.getElementById('innValidation')
let popUpBasketflag=1
let popUpMissingflag=1
const basket = document.querySelector('.basketBlock')
const missing = document.getElementById('missing')

function hideBasket() {
    if(popUpBasketflag) {
        basket.classList.add('hidden')
        popUpBasketflag = 0
    } else {
        basket.classList.remove('hidden')
        popUpBasketflag = 1
    }
}

function missingHide() {
    if(popUpMissingflag) {
        missing.classList.add('hidden')
        popUpMissingflag = 0
    } else {
        missing.classList.remove('hidden')
        popUpMissingflag = 1
    }
}

name.onblur = function () {
    if(name.value) {
        labelname.classList.add('label')
        let validasionRes = name.value.match(regStr) || []
        console.log(validasionRes)
        if (validasionRes.length === 0) {
            console.log(1)
            nameVlid.classList.remove('hidden')
            nameVlid.classList.add('show')
            nameVlid.classList.add('validation')
            name.classList.add('invalid')
        } else {
            nameVlid.classList.add('hidden')
            nameVlid.classList.remove('show')
            nameVlid.classList.remove('validation')
            name.classList.remove('invalid')
        }
    } else {
        labelname.classList.remove('label')
        nameVlid.classList.add('hidden')
        nameVlid.classList.remove('show')
        nameVlid.classList.remove('validation')
        name.classList.remove('invalid')
    }
}
surname.onblur = function () {
    if(surname.value) {
        labelsurname.classList.add('label')
        let validasionRes = surname.value.match(regStr) || []
        console.log(validasionRes)
        if (validasionRes.length === 0) {
            console.log(1)
            surnameVlid.classList.remove('hidden')
            surnameVlid.classList.add('show')
            surnameVlid.classList.add('validation')
            surname.classList.add('invalid')
        } else {
            surnameVlid.classList.add('hidden')
            surnameVlid.classList.remove('show')
            surnameVlid.classList.remove('validation')
            surname.classList.remove('invalid')
        }
    } else {
        labelsurname.classList.remove('label')
        surnameVlid.classList.add('hidden')
        surnameVlid.classList.remove('show')
        surnameVlid.classList.remove('validation')
        surname.classList.remove('invalid')
    }
}
mail.onblur = function () {
    if(mail.value) {
        labelmail.classList.add('label')
        let validasionRes = mail.value.match(regmail) || []
        console.log(validasionRes)
        if (validasionRes.length === 0) {
            console.log(1)
            mailVlid.classList.remove('hidden')
            mailVlid.classList.add('show')
            mailVlid.classList.add('validation')
            mail.classList.add('invalid')
        } else {
            mailVlid.classList.add('hidden')
            mailVlid.classList.remove('show')
            mailVlid.classList.remove('validation')
            mail.classList.remove('invalid')
        }
    } else {
        labelmail.classList.remove('label')
        mailVlid.classList.add('hidden')
        mailVlid.classList.remove('show')
        mailVlid.classList.remove('validation')
        mail.classList.remove('invalid')
    }
}
inn.onblur = function () {
    if(inn.value) {
        labelinn.classList.add('label')
        let validasionRes = inn.value.match(reginn) || []
        console.log(validasionRes)
        if (validasionRes.length === 0) {
            console.log(1)
            innVlid.classList.remove('hidden')
            innVlid.classList.add('show')
            innVlid.classList.add('validation')
            inn.classList.add('invalid')
        } else {
            innVlid.classList.add('hidden')
            innVlid.classList.remove('show')
            innVlid.classList.remove('validation')
            inn.classList.remove('invalid')
        }
    } else {
        labelinn.classList.remove('label')
        innVlid.classList.add('hidden')
        innVlid.classList.remove('show')
        innVlid.classList.remove('validation')
        inn.classList.remove('invalid')
    }
}
phone.onblur = function () {
    if(phone.value) {
        labelphone.classList.add('label')
        let validasionRes = phone.value.match(regphone) || []
        console.log(validasionRes)
        if (validasionRes.length === 0) {
            console.log(1)
            phoneVlid.classList.remove('hidden')
            phoneVlid.classList.add('show')
            phoneVlid.classList.add('validation')
            phone.classList.add('invalid')
        } else {
            phoneVlid.classList.add('hidden')
            phoneVlid.classList.remove('show')
            phoneVlid.classList.remove('validation')
            phone.classList.remove('invalid')
        }
    } else {
        labelphone.classList.remove('label')
        phoneVlid.classList.add('hidden')
        phoneVlid.classList.remove('show')
        phoneVlid.classList.remove('validation')
        phone.classList.remove('invalid')
    }
}

const curData = [
    'Бишкек, улица Табышалиева, 57',
    'Бишкек, улица Жукеева-Пудовкина, 77/1',
    'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1'
]
const punktdata = [
    'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
    'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
    'г. Бишкек, улица Табышалиева, д. 57'
]
const modalpay = document.querySelector('.modalPay')
const modalDel = document.querySelector('.modalDel')
const add1 = document.getElementById('add1')
const add2 = document.getElementById('add2')
const add3 = document.getElementById('add3')
const curdel = document.getElementById('curdel')
const punktdel = document.getElementById('punktDel')

function delModOpen() {
    modalDel.classList.remove('hidden')
    modalDel.classList.remove('none')
}
function modDelClode() {
    modalDel.classList.add('hidden')
    modalDel.classList.add('none')
}

function cur() {
    punktdel.classList.remove('cur')
    curdel.classList.add('cur')
    add1.innerText = curData[0]
    add2.innerText = curData[1]
    add3.innerText = curData[2]
}

function punkt() {
    punktdel.classList.add('cur')
    curdel.classList.remove('cur')
    add1.innerText = punktdata[0]
    add2.innerText = punktdata[1]
    add3.innerText = punktdata[2]
}

function modalPayOpen() {
    modalpay.classList.remove('hidden')
    modalpay.classList.remove('none')
}

function modalpayClose() {
    modalpay.classList.add('hidden')
    modalpay.classList.add('none')
}


