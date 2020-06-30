import { Component, OnInit } from "@angular/core";

import { Produto } from "../produto";
import { ProdutosService } from "../produtos.service";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html",
  styles: [],
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutosService) {}

  public produto: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      (produtos) => {
        this.produto = produtos;
        console.log(produtos);
      },
      (error) => console.log(error)
    );
  }
}
