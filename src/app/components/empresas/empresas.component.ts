import { Component, OnInit } from '@angular/core';
import { Empresas } from '../../models/empresas';
import { MockEmpresasService } from '../../services/mock-empresas.service';
import { EmpresasService } from '../../services/empresas.service';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  Items: Empresas[] = [];
  Titulo = 'Listado de Empresas';

  constructor(private empresasService: EmpresasService) {}

  ngOnInit() {
    this.empresasService.get().subscribe((res: Empresas[]) => {
      this.Items = res;
    });
  }
}
