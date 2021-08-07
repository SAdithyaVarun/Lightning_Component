/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 08-06-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class MyBestAccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getMyAccounts(){
        
           List<Account> acs = [select id,name,Industry,AnnualRevenue from Account limit 6];
           return acs;
        

    }
    public MyBestAccountController() {

    }
}