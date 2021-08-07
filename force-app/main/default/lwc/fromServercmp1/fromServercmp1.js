import { LightningElement, wire } from 'lwc';
//fetch th class and method to work with
import getMyAccounts from '@salesforce/apex/MyBestAccountController.getMyAccounts'

export default class FromServerCmp1 extends LightningElement {
    accList
   //property mechanism
    @wire(getMyAccounts)
    accs
    
    //function mechanism
  /*  @wire(getMyAccounts)
    accountsHandler({data,error}){
        if(data){
           this.accList = data.map
        }
        if(error){

        }
    }
  */
}