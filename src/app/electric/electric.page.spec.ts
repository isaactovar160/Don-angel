import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectricPage } from './electric.page';

describe('ElectricPage', () => {
  let component: ElectricPage;
  let fixture: ComponentFixture<ElectricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
