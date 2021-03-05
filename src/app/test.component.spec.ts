import { HttpClientModule } from '@angular/common/http';
import { Spectator, createComponentFactory, byText } from '@ngneat/spectator';
import { TestComponent } from './test.component';

fdescribe('TestComponent', () => {
  let spectator: Spectator<TestComponent>;

  const createComponent = createComponentFactory({
    component: TestComponent,
    imports: [HttpClientModule],
  });

  it('should show test string', async () => {
    spectator = createComponent();

    await spectator.fixture.whenStable();
    spectator.fixture.detectChanges();
    expect(spectator.query(byText('Test string here'))).toBeVisible();

    await spectator.fixture.whenStable();
    spectator.fixture.detectChanges();

    console.log('checking');
    expect(spectator.query(byText(/http:\/\/dogimage\/msw.jpg/))).toBeVisible();
  });
});
