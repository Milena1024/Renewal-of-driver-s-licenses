import React, { useState, useEffect } from 'react'
import { UseContext } from '../Contract/Context'
import icon from '../email.svg'
import vhod from '../vhod.svg'
import { Link, useHistory } from 'react-router-dom'
import nazad from '../nazad.svg'
import razv from '../razv.svg'
import sver from '../sver.svg'

const Main = () => {

    const { web3, Contract } = UseContext()// глобальные переменные
    const [value_acc, setvalue] = useState('')// побочный акк
    const [password, passwords] = useState('')// Логин
    const [number, numberr] = useState('')// Номер
    const [numberi, numbers] = useState('')// Номер
    const [day, days] = useState('')
    const [month, months] = useState('')
    const [year, years] = useState('')
    const [category, categorys] = useState('')// Категория
    const [categoryy, categoryys] = useState('')// Категория
    const [price, prices] = useState('')// Рыночная стоимость
    const [srok, sroks] = useState('')// Срок эксплуатации
    const [answer, answers] = useState('')// y/n
    const [a, a1] = useState('')
    const [b, b1] = useState('')
    const [c, c1] = useState('')
    const [d, d1] = useState('')
    const [i, i1] = useState('')
    const [a_, a2] = useState('')
    const [b_, b2] = useState('')
    const [c_, c2] = useState('')
    const [d_, d2] = useState('')
    const [_number, number3] = useState('')
    const [_a, a3] = useState('')
    const [_b, b3] = useState('')
    const [_c, c3] = useState('')
    const [_number_, number4] = useState('')
    const [text, texts] = useState('')
    const [text2, texts2] = useState('')
    const [number_, number5] = useState('')
    const [results, resultss] = useState('')
    const [resul, result] = useState('')
    const [mo, mo_] = useState('')
    const [zo, zo_] = useState('')
    const [ro, ro_] = useState('')
    const [tr, tr_] = useState('')
    const [l_dps, l_dpss] = useState('')
    const [hh, hhs] = useState('')
    const [hh2, hhs2] = useState('')
    const [hh3, hhs3] = useState('')
    const [g, g1] = useState('')
    const [r, r1] = useState('')
    const [r2, r22] = useState('')
    const [DAT, DAT2] = useState('')
    const [log, logs] = useState('')

    // Активация 
    async function Activation() {
        try {
            let adr = await Contract.methods.Activation(log).call()
            setvalue(adr)
            console.log(adr, password, "AAAAAAAAAAAAAAAAAAA")

            await web3.eth.personal.unlockAccount(adr, password);

            web3.eth.defaultAccount = adr;
            //
            var result = await Contract.methods.Length_user().call();
            var n;

            for (var i = 0; i < result; i++) {
                let id_result = await Contract.methods.Info_users(i).call()
                if (id_result[4] == adr) { n = i; }
            }

            let id = await Contract.methods.Info_users(n).call()

            if (id[5] == "client") {
                mo_(1);
            } else mo_(0);
            if (mo_ == 1 || mo_ == 0) {
                zo_(1);
            } else zo_(0);

            Info_users(adr);
            Length_massge_client(adr)
            Length_transport(adr)
            lencth_dps();
            Info_ID_card(adr);
            hhs(0);
            hhs2(0);
            hhs3(0);

        } catch(e) {
            console.log("ssss", e)
            alert('Ошибка авторизации\nНеправильный логин или пароль!') 
        }
    }

    async function exet() {
        mo_(2); zo_(2);
        a1(""); b1(""); c1(""); d1(""); i1(""); a3(""); b3(""); c3("");
        texts(""); texts2(""); numbers(""); days(""); months(""); years(""); categorys(""); r1(""); DAT2("")
        number4(""); number5(""); number3("");
        passwords(""); logs("")
        g1(0);
    }

    async function exet2() {
        ro_(1)
    }

    async function exet3() {
        numberr(""); days(""); months(""); years(""); categorys("");
        ro_(0);
    }

    async function exet4() {
        tr_(1);
    }

    async function exet5() {
        categoryys(""); prices(""); sroks("");
        tr_(0);
    }

    async function rasv1() {
        hhs(1);
    }

    async function sv1() {
        hhs(0);
    }

    async function rasv2() {
        hhs2(1);
    }

    async function sv2() {
        hhs2(0);
    }

    async function rasv3() {
        hhs3(1);
    }

    async function sv3() {
        hhs3(0);
    }
    // Зполненение данных водительского удостоверения и проверка ДПС
    async function Entry_ID_card() {
        console.log(web3.eth.defaultAccount, "")
        try {
            await Contract.methods.Entry_ID_card(number, day, month, year, category).send({ from: web3.eth.defaultAccount, gas: 1000000 })
            console.log("Успешно!")
            ro_(0)
            Info_ID_card(value_acc)
            Length_massge_client(value_acc)
            numberr(""); days(""); months(""); years(""); categorys(""); r1('')
        } catch { alert('Ошибка, не верно заполненны данные!') }
    }

    async function A() {
        categorys("A")
        categoryys("A")
        console.log(category)
    }

    async function B() {
        categorys("B")
        categoryys("B")
        console.log(category)
    }

    async function C() {
        categorys("C")
        categoryys("C")
        console.log(category)
    }
    // Заполнение данных регистрации транспортного средства
    async function Entry_transport() {
        if (categoryy == i) {
            try {
                await Contract.methods.Entry_transport(categoryy, price, srok).send({ from: web3.eth.defaultAccount, gas: 1000000 })
                tr_(0)

                Length_massge_client(value_acc)
                Length_transport(value_acc)
                categoryys(""); prices(""); sroks("");
            } catch { alert('Ошибка, не верно заполненны данные!') }
        } else { alert('Ошибка, не верно заполненны данные!') }
    }

    // Продление водительского удостоверения
    async function Extension_ID_card() {
        console.log(web3.eth.defaultAccount, "")

        if (g == 1) {
            try {
                await Contract.methods.Extension_ID_card().send({ from: web3.eth.defaultAccount, gas: 1000000 })
                lencth_dps()
                alert('Запрос на продление водительского удостоверения был отправлен, ожидайте ответа!')
            } catch { }
        }
        else { alert('Ошиба, данные водительского удостоверения не заполнены!') }
    }

    // Обработка запроса клиента для ДПС
    async function Processing_DPS(answ) {
        console.log(web3.eth.defaultAccount, "")

        if (r2 == 0) {
            try {
                await Contract.methods.Processing_DPS(answ, _number_).send({ from: web3.eth.defaultAccount })
                console.log("Успешно!")
                await Info_ID_card(value_acc)
                await Length_massge_client(value_acc)
                await Info_message_DPS(value_acc)
                alert('Сообщение отправлено!');
            } catch(e) { 
                console.log(e)
                alert('Ошибка!'); }
        }
        else alert('Ошибка, сообщение было отправлено!');

    }

    async function yee() {
        Processing_DPS("Подтверждено")
    }

    async function noo() {
        Processing_DPS("Отклонено")
    }

    // Информация о водительском удостоверении
    async function Info_ID_card(adr) {
        try {
            var result = await Contract.methods.Length_card().call()
            var n;
            for (var i = 0; i < result; i++) {
                let id_result = await Contract.methods.Info_ID_card(i).call()
                if (id_result[5] == adr) {
                    n = i
                }
            }
            let id_result = await Contract.methods.Info_ID_card(n).call()
            a1(id_result[0])
            b1(id_result[1])
            c1(id_result[2])
            d1(id_result[3])
            i1(id_result[4])
            g1(1)
        } catch {
            console.log("987654");
            g1(0)
        }
    }

    // Информация о пользователе
    async function Info_users(adr) {
        var result = await Contract.methods.Length_user().call()
        var n;
        for (var i = 0; i < result; i++) {
            let id_result = await Contract.methods.Info_users(i).call()
            if (id_result[4] == adr) {
                n = i
            }
        }
        let id = await Contract.methods.Info_users(n).call()
        a2(id[0])
        b2(id[1])
        c2(id[2])
        d2(id[3])
    }

    // Информация о транспорте
    async function Info_transport() {
        try {
            var re = await Contract.methods.Length_new_transport().call()
            var n;
            for (var i = 0; i < re; i++) {
                let id_result = await Contract.methods.Info_transport(i).call()
                if (id_result[4] == value_acc && id_result[3] == _number) {
                    n = i
                }
            }
            let id = await Contract.methods.Info_transport(n).call()
            a3(id[0])
            b3(id[1])
            c3(id[2])
        } catch { alert('Ошибка, данные не заполнены!') }
    }

    // Сообщения ДПС
    async function Info_message_DPS() {
        try {
            let id_result = await Contract.methods.Info_message_DPS(_number_).call()
            texts2(id_result[0])
            numbers(id_result[1])
            days(id_result[2])
            months(id_result[3])
            years(id_result[4])
            categorys(id_result[5])
            r1(id_result[6])
            var a = id_result[3]
            var d = new Date(a * 1000),
                yyyy = d.getFullYear(),
                mm = ('0' + (d.getMonth() + 1)).slice(-2),
                dd = ('0' + d.getDate()).slice(-2),
                hh = d.getHours(),
                h = hh,
                min = ('0' + d.getMinutes()).slice(-2),
                time;

            time = dd + '.' + mm + '.' + yyyy + ' ' + + h + ':' + min;
            if (id_result[6] == 'Ожидает ответа') {
                r22(0)
            } else r22(1)
        } catch { alert('Error!') }
    }

    // Сообщения клиент
    async function Info_message_client() {
        try {
            var res = await Contract.methods.Length_new_massge_client().call()
            for (var i = 0; i < res; i++) {
                let id_result = await Contract.methods.Info_message_client(i).call()
                if (id_result[1] == value_acc && id_result[2] == number_) {
                    texts(id_result[0])
                    var a = id_result[3]
                    var d = new Date(a * 1000),
                        yyyy = d.getFullYear(),
                        mm = ('0' + (d.getMonth() + 1)).slice(-2),
                        dd = ('0' + d.getDate()).slice(-2),
                        hh = d.getHours(),
                        h = hh,
                        min = ('0' + d.getMinutes()).slice(-2),
                        time;

                    time = dd + '.' + mm + '.' + yyyy + ' ' + + h + ':' + min;

                    DAT2(time)
                    console.log(id_result[0])
                }
            }
        } catch { alert('Error!') }
    }

    async function lencth_dps() {
        let id_result = await Contract.methods.Length_massge_DPS().call()
        l_dpss(id_result)
    }

    async function Length_massge_client(adr) {
        var res = await Contract.methods.Length_new_massge_client().call()
        var n = 0;
        for (var i = 0; i < res; i++) {
            let id_result = await Contract.methods.Info_message_client(i).call()
            console.log(id_result[i])
            if (id_result[1] == adr) {
                n++
            }
        }
        resultss(n)
    }

    async function Length_transport(adr) {
        var res = await Contract.methods.Length_new_transport().call()
        var n = 0;
        for (var i = 0; i < res; i++) {
            let id_result = await Contract.methods.Info_transport(i).call()
            console.log(id_result[4])
            if (id_result[4] == adr) {
                n++
            }
        }
        console.log(n)
        result(n)
    }

    return (
        <>
            {(zo !== 0) && (ro !== 1) && (tr !== 1) && <div>
                <Link style={{ marginLeft: "20px" }} to="./help" >
                    <li className="button2">
                        Помощь
                    </li>
                </Link >
                <div style={{ color: "#688cc2" }}><center><h2> ВХОД </h2></center></div>
                <center>
                    <label>Логин </label>
                    <input type="text" value={log} onChange={e => logs(e.target.value)} /><br />
                    <label>Пароль </label>
                    <input type="text" id="userPassword" type="password" value={password} onChange={e => passwords(e.target.value)} /><br />
                    <br /><button className="button" onClick={Activation}>Войти в личный кабинет</button>
                    <br /><br /><div style={{ color: "#688cc2" }}><label>______________Нет профиля в ГИБДД______________</label></div><br />
                    <Link to="./mem" >
                        <li className="button">
                            Зарегистрироваться
                            </li>
                    </Link >
                </center>
                <br/><br/><center><div style={{ color: "#688cc2", fontSize: "20px" }}><label >Разработчик: Склярова Милена Владимировна<br/> ГБПОУ РО "ТКМП"</label></div></center>
            </div>}



            {(zo === 0) && (ro !== 1) && (tr !== 1) && <div style={{ float: "right", marginRight: "20px" }}><br /><button className="button2" href='#' onClick={() => exet()}><img src={vhod} width="50" alt="" /></button></div>}

            {(zo === 0) && (ro !== 1) && (tr !== 1) && <div style={{ color: "#688cc2" }}><br /><br /><center><h2 >Мой личный кабинет</h2></center><br /></div>}


            {(zo === 0) && (tr !== 1) && (ro !== 1) && <div style={{ float: "right", marginRight: "20px" }}>
                <br />
                <leble>Кол-во</leble>
                <leble> </leble>{results}<leble> </leble>
                <button className="button" href='#' onClick={() => Info_message_client()}>Просмотр <img src={icon} width="25" alt="" /></button>
                <leble> </leble><input type="text" placeholder="номер сообщения по порядку" value={number_} onChange={e => number5(e.target.value)} /><br />
                <p style={{ color: "#000000" }}>{text}<br />{DAT}</p>
            </div>}


            {(zo === 0) && (ro !== 1) && (tr !== 1) && <div style={{ marginLeft: "20px" }}>
                <div style={{ color: "#688cc2" }}><h3 >Личные данные пользователя:</h3></div>
                <p>
                    ФИО<leble> </leble>{String(a_)} {String(b_)} {String(c_)}<br />
                        Стаж<leble> </leble>{d_}<br />
                </p>
            </div>}

            {(zo === 0) && (ro !== 1) && (tr !== 1) && (hh === 0) && <p style={{ float: "right", marginRight: "1105px" }}><button className="button2" href='#' onClick={() => rasv1()}><img src={razv} width="50" alt="" /></button></p>}
            {(zo === 0) && (ro !== 1) && (tr !== 1) && (hh === 1) && <p style={{ float: "right", marginRight: "1100px" }}><button className="button2" href='#' onClick={() => sv1()}><img src={sver} width="50" alt="" /></button></p>}

            {(zo === 0) && (ro !== 1) && (tr !== 1) && <p style={{ marginLeft: "20px", color: "#688cc2" }}>
                <h3>Данные водительского удостоверения:</h3>
            </p>}

            {(zo === 0) && (ro !== 1) && (tr !== 1) && (hh === 1) && <div style={{ marginLeft: "20px" }}>
                <p>
                    <button className="button" href='#' onClick={() => exet2()}>Заполнить данные</button>
                    <leble> </leble><button className="button" href='#' onClick={() => Extension_ID_card()}>Продлить</button><br /><br />
                    Номер<leble> </leble>{a}<br />
                    Срок действия<leble> </leble>{b}<leble>.</leble>{c}<leble>.</leble>{d}<leble> г.</leble><br />
                    Категория<leble> </leble>{i}<br />
                </p>
            </div>}

            {(zo === 0) && (ro !== 1) && (tr !== 1) && (hh2 === 0) && <div style={{ float: "right", marginRight: "1210px" }}><button className="button2" href='#' onClick={() => rasv2()}><img src={razv} width="50" alt="" /></button></div>}
            {(zo === 0) && (ro !== 1) && (tr !== 1) && (hh2 === 1) && <div style={{ float: "right", marginRight: "1210px" }}><button className="button2" href='#' onClick={() => sv2()}><img src={sver} width="50" alt="" /></button></div>}

            {(zo === 0) && (ro !== 1) && (tr !== 1) && <div style={{ marginLeft: "20px", color: "#688cc2" }}>
                <h3>Данные транспортного средства:</h3>
            </div>}

            {(zo === 0) && (ro !== 1) && (tr !== 1) && (hh2 === 1) && <div style={{ marginLeft: "20px" }}>
                <p>
                    <button className="button" href='#' onClick={() => exet4()}>Регистрация</button><br /><br />
                    <leble>Кол-во</leble><leble> </leble>{resul}<leble> </leble>
                    <button className="button" href='#' onClick={() => Info_transport()}>Просмотр</button><leble> </leble>
                    <input type="text" placeholder="номер транспорта по порядку" value={_number} onChange={e => number3(e.target.value)} /><br /><br />
                    Категория<leble> </leble>{_a}<br />
                    Рыночная стоимость<leble> </leble>{_b}<br />
                    Срок эксплуатации<leble> </leble>{_c}
                </p>
            </div>}

            {(ro === 1) && <div style={{ float: "right", marginRight: "20px" }}><br />
                <button className="button2" href='#' onClick={() => exet3()}><img src={nazad} width="60" alt="" /></button></div>}
            {(ro === 1) && <div style={{ color: "#688cc2" }}><br /><br /><center><h3>ЗАПОЛНЕНИЕ ДАННЫХ<br />ВОДИТЕЛЬСКОГО УДОСТОВЕРЕНИЯ</h3></center></div>}
            {(ro === 1) && <div style={{ marginLeft: "750px" }}>
                <p>
                    Номер<br /><input type="text" placeholder="от 000 до 999" value={number} onChange={e => numberr(e.target.value)} /><br />
                    День<br /><input type="text" value={day} onChange={e => days(e.target.value)} /><br />
                    Месяц<br /><input type="text" value={month} onChange={e => months(e.target.value)} /><br />
                    Год<br /><input type="text" value={year} onChange={e => years(e.target.value)} /><br />
                    Категория<br />
                    <button className="btn" href='#' onClick={() => A()}>A</button><leble> </leble>
                    <button className="btn" href='#' onClick={() => B()}>B</button><leble> </leble>
                    <button className="btn" href='#' onClick={() => C()}>C</button><leble> </leble>
                    <br /><br />
                    <button className="button" href='#' onClick={() => Entry_ID_card()}>Сохранить изменения</button><leble></leble>
                </p>
            </div>}


            {(zo === 0) && (ro !== 1) && (tr === 1) && <div style={{ float: "right", marginRight: "20px" }}><br />
                <button className="button2" href='#' onClick={() => exet5()}><img src={nazad} width="60" alt="" /></button></div>}
            {(zo === 0) && (ro !== 1) && (tr === 1) && <div style={{ color: "#688cc2" }}><br /><br /><center><h2>Регистрация транспортного <br />средства</h2></center></div>}
            {(zo === 0) && (ro !== 1) && (tr === 1) && <div style={{ marginLeft: "750px" }}>
                <p>
                    Категория<br />
                    <button className="btn" href='#' onClick={() => A()}>A</button><leble> </leble>
                    <button className="btn" href='#' onClick={() => B()}>B</button><leble> </leble>
                    <button className="btn" href='#' onClick={() => C()}>C</button><leble> </leble> <br />
                    Рыночная стоимость<br /><input type="text" value={price} onChange={e => prices(e.target.value)} /><br />
                    Срок эксплуатации<br /><input type="text" placeholder="Кол-во лет" value={srok} onChange={e => sroks(e.target.value)} /><br /><br />
                    <button className="button" href='#' onClick={() => Entry_transport()}>Сохранить изменения</button><leble></leble>
                </p>
            </div>}

            <br />
            {(mo === 0) && (zo === 0) && (ro !== 1) && (tr !== 1) && (hh3 === 0) && <p style={{ float: "right", marginRight: "1050px" }}><div /><br /><button className="button2" href='#' onClick={() => rasv3()}><img src={razv} width="50" alt="" /></button></p>}
            {(mo === 0) && (zo === 0) && (ro !== 1) && (tr !== 1) && (hh3 === 1) && <p style={{ float: "right", marginRight: "1050px" }}><br /><button className="button2" href='#' onClick={() => sv3()}><img src={sver} width="50" alt="" /></button></p>}

            {(mo === 0) && (zo === 0) && (ro !== 1) && (tr !== 1) && <p style={{ marginLeft: "20px", color: "#688cc2" }}>
                <h3>Продление водительских удостоверений:</h3>
            </p>}

            {(mo === 0) && (zo === 0) && (ro !== 1) && (tr !== 1) && (hh3 === 1) && <div style={{ marginLeft: "20px" }}>
                <p>
                    <leble>Кол-во</leble>
                    <leble> </leble>{l_dps}<leble> </leble>
                    <button className="button" href='#' onClick={() => Info_message_DPS()}>Просмотр <img src={icon} width="25" alt="" /></button>
                    <leble> </leble><input type="text" placeholder="номер сообщения по порядку" value={_number_} onChange={e => number4(e.target.value)} /><br /><br />
                    <div style={{ color: "#000000" }}>
                        {text2}<br />
                        Номер<leble> </leble>{numberi}<br />
                        Срок действия<leble> </leble>{day}<leble>.</leble>{month}<leble>.</leble>{year}<leble> г.</leble><br />
                        Категория<leble> </leble>{category}
                    </div>
                    {(r2 == 0) && <div style={{ float: "right", marginRight: "1150px", color: "#D11818" }}> {r}</div>}
                    {(r2 == 1) && <div style={{ float: "right", marginRight: "1150px", color: "#2FBB2F" }}> {r}</div>}
                    <br /><br />
                    <button className="button" href='#' onClick={() => yee()}>Подтвердить</button><leble> </leble>
                    <button className="button" href='#' onClick={() => noo()}>Отклонить</button>
                </p>
            </div>}
                
        </>
    )
}
export default Main
