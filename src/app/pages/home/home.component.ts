import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { Tool } from "src/app/models/Tool.model";
import { VuttrApiService } from "src/app/services/vuttr-api.service";

const testTool = new Tool(
  "Brenos Tool",
  "https://big.com.br",
  "Descriptioning my description",
  ["testing", "lint", "readability"]
);

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  constructor(private _vuttrApi: VuttrApiService) {}

  ngOnInit() {
    this._vuttrApi.getTools();
  }
}
