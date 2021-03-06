import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { WizardModel } from 'cedrus-fusion';
import { WizardStylingModel } from 'cedrus-fusion';
import { WizardStepModel } from 'cedrus-fusion';
import { WizardStepStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-wizard-1',
	templateUrl: './demo.wizard-1.html',
 	styleUrls: ['./demo.wizard-1.scss']
})

export class CfDemoWizard1 implements OnInit {

	myWizard = new WizardModel({
		showStepNumberAsIcon: true,
	});

	myWizard2 = new WizardModel({
		showStepNumberAsPrefix: true,
	});

	myWizardStyles = new WizardStylingModel({
		container: {
			class: "my-custom-wizard"
		},
		nextButton: new ButtonStylingModel({
			button: {
				class: "my-wizard-next-button ",
			}
		})
	});

	steps = [
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
	];

	myWizardStepStyles = new WizardStepStylingModel({
		container: {
			class: "my-custom-wizard-step"
		},
		header: new ButtonStylingModel({
			button: {
				class: "my-wizard-step-header-button ",
			}
		})
	})

	ngOnInit() {

		setTimeout(() => {
			// this.steps[2]['isValid'] = false;
	  }, 5000);

	  console.log('demo wizard', this);
	}
}
