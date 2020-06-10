import React from 'react';

function Third_row () {
    return (
        
            <div className = 'secondrow'>
                <div className = 'buttons'> 
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>7</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>8</p>
                </div>
                <div className = 'buttons'>
                    <p style = {{fontSize:'30px', color: 'black', textAlign: 'center', marginTop: '2px'}}>9</p>
                </div>
                <div style = {{backgroundColor: 'orange'}}  className = 'buttons'>
                    <p style = {{fontSize:'30px', color: '#ffffff', textAlign: 'center', marginTop: '2px'}}>&times;</p>
                </div>
            </div>

    
    )
}

export default Third_row;