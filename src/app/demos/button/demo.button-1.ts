import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-button-1',
	templateUrl: './demo.button-1.html',
	styleUrls: ['./demo.button-1.scss']
})
export class CfDemoButton1{

	function1(): void {
		alert('This is Button speaking...');
	}
}
