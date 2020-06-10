import React from 'react';

function Second_row () {
    return (
        
            <div className = 'secondrow'>
                <div className = 'buttons'> 
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>AC</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>+/-</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>%</p>
                </div>
                <div style = {{backgroundColor: 'orange'}}  className = 'buttons'>
                    <p style = {{fontSize:'30px', color: '#ffffff', textAlign: 'center', marginTop: '2px'}}>&divide;</p>
                </div>
            </div>

    
    )
}

export default Second_row;