// ...... Global settings
import React from 'react'; import './Directions.sass';
// Main png there
import TreeRoadsPNG from '~PREF/Img/OfficeRoads/TreeRoads.png';
// There link set image 
import Info from '~PREF/Img/OfficeRoads/Info.png';           import Papier from '~PREF/Img/OfficeRoads/Papier.png'; 
import Basket from '~PREF/Img/OfficeRoads/Basket.png';       import SaveEnergy from '~PREF/Img/OfficeRoads/SaveTheEnergyResources.png'; 
import PapierGet from '~PREF/Img/OfficeRoads/GetPapier.png'; import EnergyResources from '~PREF/Img/OfficeRoads/EnergyResources.png';
export default class RoadsGreen extends React.Component {
    render () { 
return(
    <>
        <div className='Roads-Green-Office-Wrapper'>
            <div className='Roads-Green-Office container'>
                <div className='Roads-Green-Office_Enth'>
                    <figure>
                        <img src={TreeRoadsPNG}></img>
                        <p>Напрямки зеленого офiсу</p>
                    </figure>
                </div>

                <div className='Roads-Green-Office_Items'>
                    {/* First links set */}
                    <div className='Roads-Green-Office_Links'>
                        <div className='Roads-Green-Office_Link'>
                            <figure className='flex'>
                                <div className='Roads-Img'><img src={Info}></img></div>
                                <div className='Roads-text'><a>Інформаційна підтримка проекту</a></div>
                            </figure>
                        </div>
                        <div className='Roads-Green-Office_Link'>
                            <figure className='flex'>
                                <div className='Roads-Img'><img src={Papier}></img></div>
                                <div className='Roads-text'><a>Зменшення використання паперу</a></div>
                            </figure>
                        </div>
                        <div className='Roads-Green-Office_Link'>
                            <figure className='flex'>
                                <div className='Roads-Img'><img src={Basket}></img></div>
                                <div className='Roads-text'><a>Вторинна переробка відходів</a></div>
                            </figure>
                        </div>
                    </div>
                        {/* There second links  */}
                    <div className='Roads-Green-Office_Links'>
                        <div className='Roads-Green-Office_Link Reverse'>
                            <figure className='Reverse'>
                                <div className='Roads-Img'><img src={SaveEnergy}></img></div>
                                <div className='Roads-text'><a>Використання енергозберігаючих технологій</a></div>
                            </figure>
                        </div>
                        <div className='Roads-Green-Office_Link Reverse'>
                            <figure className='Reverse'>
                                <div className='Roads-Img'><img src={PapierGet}></img></div>
                                <div className='Roads-text'><a>Збір макулатури</a></div>
                            </figure>
                        </div>
                        <div className='Roads-Green-Office_Link Reverse'>
                            <figure className='Reverse'>
                                <div className='Roads-Img'><img src={EnergyResources}></img></div>
                                <div className='Roads-text'><a>Ощадливе споживання енерегоресурсів (тепло, вода, електроенергiя)</a></div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)}}


