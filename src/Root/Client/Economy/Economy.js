// ...... Global settings
import React from 'react'; import './Economy.sass';
// Main png there
import EconomyCirculation from '~PREF/Img/EconomyCirculation/EconomyCirculation.png'; 
import ResurcesCirculation from '~PREF/Img/EconomyCirculation/ResurcesCirculation.png';
// There link set image 
export default class Economy extends React.Component {
    render () { 
return(
    <>
        <div className='Economy-Wrapper container'>
            <div className='EconomyCirculation'>
                <figure>
                    <img src={EconomyCirculation}></img>
                    <h2>Розумне споживання товарів - важлива підтримка циркулярної економіки</h2>
                </figure>
            </div>
        </div>

        <div className='Economy-Item_2'>
            <div className='Circulation_Img'>
                <img src={ResurcesCirculation}></img>
            </div>
            <div className='Economy_YouTube_Video'>
                <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/waqxrK-EFI0">
                </iframe>
            </div>
        </div>
    </>
)}}


