import React from 'react';

function Fourth_row () {
    return (
        
            <div className = 'secondrow'>
                <div className = 'buttons'> 
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>4</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>5</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>6</p>
                </div>
                <div style = {{backgroundColor: 'orange'}}  className = 'buttons'>
                    <p style = {{fontSize:'30px', color: '#ffffff', textAlign: 'center', marginTop: '2px'}}>-</p>
                </div>
            </div>

    
    )
}

export default Fourth_row;