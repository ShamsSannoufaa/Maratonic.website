import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast" [class.show]="visible" [class.success]="type === 'success'" [class.error]="type === 'error'">
      {{ message }}
    </div>
  `,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() visible = false;
  @Input() message = '';
  @Input() type: 'success' | 'error' = 'success';
}
