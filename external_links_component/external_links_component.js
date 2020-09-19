/**
 * Created by gerry on 9/18/2020.
 */

import {LightningElement} from 'lwc';
import getUrlLinks from '@salesforce/apex/External_Links_Controller.getUtilityBarLinks';
import {NavigationMixin} from 'lightning/navigation';

export default class ExternalLinksComponent extends NavigationMixin(LightningElement)
{
	linkList;

	connectedCallback()
	{
		getUrlLinks().then(
			result =>
			{
				this.linkList = result;
			}
		).catch( error =>
		{
			console.error('This is the error ::: ' + error);
		});
	}

	openLink(event)
	{
		let urlToPass = event.target.getAttribute("data-url");

		if(event.target.getAttribute("data-opentab") === "true")
		{
			const openTabEvent = new CustomEvent('opennewsubtab', {
					detail: {urlToPass}
			});

			this.dispatchEvent(openTabEvent);
		}
		else
		{
			this[NavigationMixin.Navigate]({
				type: 'standard__webPage',
				attributes:{
					url: urlToPass
				}
			});
		}
	}
}