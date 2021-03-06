import { Component } from '@angular/core';
import { SelectableModel } from 'cedrus-fusion';
import { CheckboxStylingModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-checkbox-2',
	templateUrl: './demo.checkbox-2.html',
	styleUrls: ['./demo.checkbox-2.scss']
})

export class CfDemoCheckbox2{
	checkboxStyling: CheckboxStylingModel[] = [
		new CheckboxStylingModel({checkbox:{themeColor:"primary"}}),
		new CheckboxStylingModel({checkbox:{themeColor:"accent"}}),
		new CheckboxStylingModel({checkbox:{themeColor:"warn"}})
	];
	avatars: SelectableModel[]= [new SelectableModel({value: 'bob', item: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png', checked: true }),
			new SelectableModel({value: 'ann', item: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png', checked: true }),
			new SelectableModel({value: 'ted', item: 'http://clipartist.net/RSS/openclipart.org/Unity/hypermodern_avatar_wall_paper_art-1979px.png', checked: true })
	];
}
