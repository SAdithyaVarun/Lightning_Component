import { LightningElement,track  } from 'lwc';

export default class ButtonBasic extends LightningElement {
   //age = 20
   name = "Salesforce LWC"
   changeAge(event){
      this.name = event.target.value
   }

   @track Student={
      sname :"Adithya",
      semail : "Adihtya@gmail.com",
      sadress : "Madurai"
   }

   changeSname(event){
      this.Student.sname = event.target.value
   }

   changeSaddress(event){
      this.Student.sadress = event.target.value
   }
   num1 = 10
   num2 = 20
   get result(){
      return this.num1 * this.num2
   }
}