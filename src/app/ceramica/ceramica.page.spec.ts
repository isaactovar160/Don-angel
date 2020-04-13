import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeramicaPage } from './ceramica.page';

describe('CeramicaPage', () => {
  let component: CeramicaPage;
  let fixture: ComponentFixture<CeramicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeramicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
