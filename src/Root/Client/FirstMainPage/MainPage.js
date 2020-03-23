// ...... Global settings
import React from 'react'; import './MainPage.sass'
import GreenFamilyPNG from '~PREF/Img/HealthyFuture/GreenFamily.png'; import GreenOfice from '~PREF/Img/HealthyFuture/HeaderSlogan.png';
import lifecell from '~PREF/Img/HealthyFuture/LifeCellGreenBackground.png';

export default class MainPage extends React.Component {
    render () { 
return(
    <>
        <div className='Main-Page_Wrapper'>
            <div className='Green-office_header'>
                <div className='LifeCellBcgHeader'>
                    <div><img src={lifecell}></img></div>
                    <div><img src={lifecell}></img></div>
                    <div><img src={lifecell}></img></div>
                </div>
                    <div className='Green-office_header_img'><img src={GreenOfice}></img></div>
                <div className='LifeCellBcgHeader'>
                    <div><img src={lifecell}></img></div>
                    <div><img src={lifecell}></img></div>
                    <div><img src={lifecell}></img></div>
                </div>
            </div>
            <div className='Main-Page container'>
                <div className='Green-office_content'>
                    <div>
                        <header>
                            <h1>Наш внесок у чисте та здорове майбутне</h1>
                        </header>
                    </div>
                    <div className='Green-Family__Links'>
                        <div className='Green-Family__Links_Wrapper'>
                            <div className='Green-Family__Links_Link'><a href=''>Напрямки Зеленого офісу</a></div>
                            <div className='Green-Family__Links_Link'><a href=''>Принципи зеленого офісу</a></div>
                            <div className='Green-Family__Links_Link'><a href=''>Сортування вторсировини</a></div>
                        </div>
                            <div><img src={GreenFamilyPNG}></img></div>
                        <div className='Green-Family__Links_Wrapper'>
                            <div className='Green-Family__Links_Link'><a href=''>Цикави факти</a></div>
                            <div className='Green-Family__Links_Link'><a href=''>FAQ</a></div>
                            <div className='Green-Family__Links_Link'><a href=''>Увага! Важлива информация</a></div>
                        </div>
                    </div>
                    <div className='Green-Family_Text_Content'>
                        <p>Зелений офіс – це турбота про наше з вами здоров’я та наш спільний внесок в охорону довкілля. Це ціла філософія розумного управління організацією, що дозволяє зменшити негативний вплив на довкілля шляхом максимального раціонального використанння та економії як ресурсів планети, так і фінансових ресурсів самої компанії.  Лише декілька років назад ініціатива реалізації «зеленого» офісу була новою для вітчизняного ринку. Сьогодні все більше компаній готові похизуватися своїми досягненнями у сфері екологічного простору, метою яких є зниження навантаження на навколишнє середовище, бережне відношення до природних ресурсів, а також залучення співробітників до екологічного раціонального споживання. Ми дуже вдячні, що кількість колег lifecell у підтримці та активній ініціативності у змінах у компанії, участі у реалізації «зелених» ініціатив зростає кожного дня.  </p>
                    </div>
                </div>
            </div>
        </div>
    </>
)}}


