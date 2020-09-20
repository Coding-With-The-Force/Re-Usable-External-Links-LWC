/**
 * Created by gerry on 9/18/2020.
 */

/*Aura component javascript controller*/

({
	//This function is utilized to open a new console tab within your console apps
	openConsoleTab : function(component, event, helper)
	{
		//This finds the workspace for our current console app
		let workspace = component.find("workspace");

		//This opens the url as a tab in the console and auto focuses on that tab
		workspace.openTab(
			{
				url: event.getParam("urlToPass"),
				focus:true
			}
		);
	}
});