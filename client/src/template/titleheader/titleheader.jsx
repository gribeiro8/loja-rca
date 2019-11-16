import React from 'react'

export default props => (
    <div>
        <div className="titleheader">
            <h2>{props.title}</h2>


            {props.chart =='true' ? (
               <p>1</p>
            ) : null}
          


        </div>
    </div>
)