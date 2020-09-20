/**
 * Created by gerry on 9/18/2020.
 */

public with sharing class External_Links_Controller
{
	@AuraEnabled
	public static List<Utility_Bar_Link__mdt> getUtilityBarLinks()
	{
		return [SELECT MasterLabel, gAuto__Link_URL__c, gAuto__Open_in_console_tab__c, gAuto__Order__c FROM gAuto__Utility_Bar_Link__mdt WHERE gAuto__Active_Link__c = TRUE ORDER BY gAuto__Order__c ASC];
	}
}