var current_env  = "development";
import pord from './production.js';
import dev from './development.js';
import stage from './staging.js';

const config_function=()=>{
    var config = {};    
    switch (current_env) {
      case 'production':
        config = pord;
        break;
  
      case 'development':
        config = dev;
        break;
  
      case 'staging':
        config = stage;
        break;
  
      default:
        console.error('NODE_ENV environment variable not set');
        process.exit(1);
    }
    return config; 
}

 export default config_function;