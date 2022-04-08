var current_env  = "production";
const pord =require( './production')
const dev =require( './development')
const stage =require( './staging')

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

module.exports =  config_function;