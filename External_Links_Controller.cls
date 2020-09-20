/**
 * Created by gerry on 9/18/2020.
 */

public with sharing class External_Links_Controller
{
	@AuraEnabled
	public static List<Utility_Bar_Link__mdt> getUtilityBarLinks()
	{
		return [SELECT MasterLabel, Link_URL__c, Open_in_console_tab__c, Order__c FROM Utility_Bar_Link__mdt WHERE Active_Link__c = TRUE ORDER BY Order__c ASC];
	}
}
