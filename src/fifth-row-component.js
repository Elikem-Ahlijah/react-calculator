import React from 'react';

function Fifth_row () {
    return (
        
            <div className = 'secondrow'>
                <div className = 'buttons'> 
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>1</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>2</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>3</p>
                </div>
                <div style = {{backgroundColor: 'orange'}}  className = 'buttons'>
                    <p style = {{fontSize:'30px', color: '#ffffff', textAlign: 'center', marginTop: '2px'}}>+</p>
                </div>
            </div>

    
    )
}

export default Fifth_row;