import React, { useState} from 'react'
import { UseContext } from '../Contract/Context'
import {Link} from 'react-router-dom'
import nazad from '../nazad.svg'

const Mai =()=> {
    const { web3, Contract } = UseContext()// глобальные переменные
    const [owner, Owner] = useState('')
    const [pass, passw] = useState('')
    let [password, passwords] = useState('')// Пароль
    let [password2, passwords2] = useState('')// Пароль
    const [last_name, last_names] = useState('')// Фамилия
    const [name, names] = useState('')// Имя
    const [patronymic, patronymics] = useState('')// Отчество
    const [role, roles] = useState('')// Роль
    const [expertise, expertises] = useState('')// Стаж
    const [login, logins] = useState('')

    // Регистрация !!!
    async function Registration() {
        if (password == password2){
                setTimeout(async()=>{
                let a = await web3.eth.personal.newAccount(password)
                await web3.eth.personal.unlockAccount("0x98512363C537B8fE4e88f6e0AeFb519BF0075969", "0000").then(console.log)
                console.log(a)
                await web3.eth.sendTransaction({from: "0x98512363C537B8fE4e88f6e0AeFb519BF0075969", to: a,  value: "50000000000000000000"})
                await web3.eth.personal.unlockAccount(a,password)

                    await Contract.methods.Registration(last_name, name, patronymic, "client",expertise, login).send({ from:a }).then(console.log)
                    last_names(""); names(""); patronymics(""); roles(""); expertises(""); passwords(""); passwords2(""); logins("")
                    alert("Регистрация прошла успешно!")
                })
            
        }else{alert('Ошибка, пароли не совпадают!');}
    }

    return (
        <>
        <br/>
        {<div style={{ float: "right", marginRight: "20px" }}><Link to="./Main" ><li className="button2"><img src={nazad} width="60" alt=""/></li></Link ></div>}<br/>

        <div style={{ color: "#688cc2" }}><center><h2>РЕГИСТРАЦИЯ</h2></center></div>

        {<div style={{ marginLeft: "780px" }}>
                <p>
                    <lable > Фамилия</lable><br />
                    <input type="text" value={last_name} onChange={e => last_names(e.target.value)} /><br />
                    <lable>Имя</lable><br />
                    <input type="text" value={name} onChange={e => names(e.target.value)} /><br />
                    <lable>Отчество</lable><br />
                    <input type="text" value={patronymic} onChange={e => patronymics(e.target.value)} /><br />
                    <lable>Стаж</lable><br />
                    <input type="text" placeholder="Кол-во лет" value={expertise} onChange={e => expertises(e.target.value)} /><br />
                    <label>Логин </label><br/>
                    <input type="text" value={login} onChange={e => logins(e.target.value)} /><br />
                    <label>Пароль </label><br/>
                    <input type="text" id="password-input" type="password" value={password} onChange={e => passwords(e.target.value)} /><br />
                    <label>Подтверждение пароля </label><br/>
                    <input type="text" id="userPassword" type="password" placeholder="Повторно введите пароль" value={password2} onChange={e => passwords2(e.target.value)} /><br />
                    <br/><button className="button" href='#' onClick={() => Registration()}>Зарегистрироваться</button><br />
                </p>
        </div>}

        

        </>)
}
export default Mai