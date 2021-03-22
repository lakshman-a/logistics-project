import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


export class AppConfig {

  public static get API_SERVER(): string { return environment.API_SERVER; };
  public static get API_USERS_GET_ALL(): string { return environment.API_SERVER + "/api/users"; };


}
