import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkerWaitingPage } from './worker-waiting.page';

describe('WorkerWaitingPage', () => {
  let component: WorkerWaitingPage;
  let fixture: ComponentFixture<WorkerWaitingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerWaitingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerWaitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
