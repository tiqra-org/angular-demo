import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent {

  constructor(
    private readonly keycloak: KeycloakService,
    @Inject(FormBuilder) private readonly fb: FormBuilder,
    ) {
      this.form = this.fb.group({
        username: [{value: '', disabled: true}],
        firstName: [{value: '', disabled: true}],
        lastName: [{value: '', disabled: true}],
        email: [{value: '', disabled: true}],
        emailVerified: [{value: false, disabled: true}],
      });
    }

  public isLoggedIn = false;
  private userProfile: KeycloakProfile | null = null;
  public form: FormGroup;

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
    this.patchForm(this.userProfile);
  }

  patchForm(data: KeycloakProfile | null) {
    if (data) {
      this.form.patchValue(data);
    }
  }
}