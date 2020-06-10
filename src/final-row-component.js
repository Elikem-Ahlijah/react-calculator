import React from 'react';

function Final_row (){
    return(
        <div className = 'finalrow'>
            <div className = 'final-buttons'>
                <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>0</p>
            </div>
            <div className = 'buttons'>
                <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>.</p>
            </div>
            <div style = {{backgroundColor: 'orange',borderRadius: '0 0 10px 0'}}  className = 'buttons'>
                <p style = {{fontSize:'30px', color: '#ffffff', textAlign: 'center', marginTop: '2px'}}>=</p>
            </div>
        </div>

    )
}

export default Final_row;