import React from 'react';


class IncDcr extends React.Component {
    constructor() {
       super()
       this.state = {
         count: 20,
    
       }
     }
     getCount( c ) {
    
        const clicked = this.state.clicked
    if(c == 1){
      this.setState({count: this.state.count +1, clicked: true});
    } else {
      this.setState({count: this.state.count -1})
    }
    
      }
      render() {
          return <>
            <span className='spnPlus'>
                <button className="pl_ng" onClick={this.getCount.bind(this, 1)}> <i class="fa-solid fa-plus"></i> </button>
                <input type="text" value={this.state.count} />
                <button className="pl_ng" onClick={this.getCount.bind(this, 0)}> <i class="fa-solid fa-minus"></i> </button>
            </span>       
       </>;
      }
    }

export default IncDcr;