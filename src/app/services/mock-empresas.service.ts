import { Injectable } from '@angular/core';
import { Empresas } from '../models/empresas';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockEmpresasService {
  constructor() {}
  get() {
    return of(Empresas);
  }
}
