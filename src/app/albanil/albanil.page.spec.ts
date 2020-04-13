import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlbanilPage } from './albanil.page';

describe('AlbanilPage', () => {
  let component: AlbanilPage;
  let fixture: ComponentFixture<AlbanilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbanilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbanilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
