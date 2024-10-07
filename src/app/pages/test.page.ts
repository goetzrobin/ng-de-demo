import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {HlmH1Directive} from "@spartan-ng/ui-typography-helm";

@Component({
  selector: 'TestPage',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HlmH1Directive
  ],
  providers: [],
  host: {
    class: '',
  },
  template: `<h1 hlmH1>Test</h1>`,
})

export default class TestPage {
}
