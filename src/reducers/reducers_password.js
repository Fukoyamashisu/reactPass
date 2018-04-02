const pass = (state, action) => {

  switch(action.type){
    
      case "TOGGLE_BUTTON":
       return action.payload;

        default:
        return {
           strong: false,
           medium: false,
           light:false,
           submit:false,
           length:0,
           value:0
         }
      }
}
   
export default pass;
