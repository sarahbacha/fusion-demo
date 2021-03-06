import { Component, Input } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { ButtonMenuModel } from 'cedrus-fusion';
import { ButtonMenuStylingModel } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-button-menu-1',
  templateUrl: './demo.button-menu-1.html',
  styleUrls: ['./demo.button-menu-1.scss']
})
export class CfDemoButtonMenu1 {
	
	iconPosition = "left"
	menu= new MenuModel ({
		menuItems : [
			{
				buttonProperty:{
					label: "iPhone",
					iconProperty: new IconModel ({
							name: 'fa-mobile',
							size: '24px'
						}),
					iconPosition:this.iconPosition
				},
				divider: true
			},
			{
				buttonProperty:{
					label: "iPad",
					iconProperty: new IconModel ({
							name: 'fa-tablet',
							size: '24px'
						}),
					iconPosition:this.iconPosition
				},
				divider: true
			},
			{
				buttonProperty:{
					label: "Mac",
					iconProperty: new IconModel ({
							name: 'fa-laptop',
							size: '24px'
						}),
					iconPosition:this.iconPosition
				},
				divider: true
			},	
		]
	});

	button= new ButtonModel ({
		label: "Products"
	});

	buttonMenuProperties = new ButtonMenuModel({
		buttonProperty: this.button,
		menuProperty: this.menu
	});

}
