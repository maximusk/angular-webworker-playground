import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkerAppModule } from '@angular/platform-webworker';

@NgModule({
    imports: [WorkerAppModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
