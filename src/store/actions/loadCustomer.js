export const loadCustomer = (customer) => {

  return (dispatch) =>{
    console.log('loadCustomer loadCustomer');
    
    dispatch({ type: "LOAD_CUSTOMER", payload: customer})
  }
}