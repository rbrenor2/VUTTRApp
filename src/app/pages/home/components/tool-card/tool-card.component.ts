import { Component, OnInit, Input } from "@angular/core";
import { Tool } from "src/app/models/Tool.model";
import { VuttrApiService } from "src/app/services/vuttr-api.service";

@Component({
  selector: "app-tool-card",
  templateUrl: "./tool-card.component.html",
  styleUrls: ["./tool-card.component.scss"]
})
export class ToolCardComponent implements OnInit {
  @Input() toolData: Tool;

  constructor(private _vuttrApi: VuttrApiService) {}

  ngOnInit() {
    console.log(this.toolData);
  }

  deleteTool() {
    this._vuttrApi.deleteToolById(this.toolData.id);
  }
}
