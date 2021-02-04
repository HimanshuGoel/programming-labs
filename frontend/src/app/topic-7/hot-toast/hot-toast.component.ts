import { Component, OnInit } from '@angular/core';

import { HotToastService } from '@ngneat/hot-toast';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-hot-toast',
  templateUrl: './hot-toast.component.html',
  styleUrls: ['./hot-toast.component.scss'],
})
export class HotToastComponent implements OnInit {
  // updateUser = () => from([1, 2, 3]);

  updateUser(): Observable<number> {
    return from([1, 2, 4]);
  }

  constructor(private toast: HotToastService) {}

  ngOnInit(): void {}

  showToast() {
    this.toast.show('Hello World!');
    this.toast.success('Yeah!!');
    this.toast.warning('Boo!');
    this.toast.error('Oh no!');
  }

  update() {
    this.updateUser()
      .pipe(
        this.toast.observe({
          loading: 'Updating...',
          success: '🚀',
          error: '😡',
        })
      )
      .subscribe();
  }
}
