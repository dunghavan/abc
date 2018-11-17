import { NgModule } from '@angular/core';

import { AbcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AbcSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AbcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AbcSharedCommonModule {}
