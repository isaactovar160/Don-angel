import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkerTestPage } from './worker-test.page';

describe('WorkerTestPage', () => {
  let component: WorkerTestPage;
  let fixture: ComponentFixture<WorkerTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
