import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { UiService } from '../common/ui-service/ui-service.service';
import { EmailValidation, PasswordValidation } from "../common/validations";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styles: [
    `
      .error {
        color: red;
      }
    `,
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError = "";
  redirectUrl;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiService
  ) {
    route.paramMap.subscribe(
      params => (this.redirectUrl = params.get("redirectUrl"))
    );
  }
  ngOnInit() {
    this.buildLoginForm();
  }
  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", EmailValidation],
      password: ["", PasswordValidation]
    });
  }
  async login(submittedForm: FormGroup) {
    this.authService
      .login(submittedForm.value.email, submittedForm.value.password)
      .subscribe(
        authStatus => {
          if (authStatus.isAuthenticated) {
            this.uiService.showToast(`Welcome! Role:${authStatus.userRole}`)
            this.router.navigate([this.redirectUrl || "/manager"]);
          }
        },
        error => (this.loginError = error)
      );
  }
}
