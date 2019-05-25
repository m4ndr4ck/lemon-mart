import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { MaterialModule } from "../material.module";
import { ManagerHomeComponent } from "./manager-home/manager-home.component";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager.component";
import { ReceiptLookupComponent } from "./receipt-lookup/receipt-lookup.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
  declarations: [
    ManagerComponent,
    ManagerHomeComponent,
    UserManagementComponent,
    ReceiptLookupComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
})
export class ManagerModule { }
