// ...... Global settings
import React from 'react'; import GlobalFonst from '~PREF/Fonts/Fonts';
// Import client side components
import MainPage from './Client/FirstMainPage/MainPage';
import RoadsGreen from './Client/DirectionsGreen/Directions';
import Economy from './Client/Economy/Economy';

export default class App extends React.Component {
    render () { 
return(
    <>
        <GlobalFonst/>
            {/* body + Fonts && Base styles*/}
                <MainPage />
                <RoadsGreen />
                <Economy />
            {/* body */}
    </>
)}}


