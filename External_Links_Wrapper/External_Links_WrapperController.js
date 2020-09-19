/**
 * Created by gerry on 9/18/2020.
 */

({
	openConsoleTab : function(component, event, helper)
	{
		let workspace = component.find("workspace");

		workspace.openTab(
			{
				url: event.getParam("urlToPass"),
				focus:true
			}
		);
	}
});