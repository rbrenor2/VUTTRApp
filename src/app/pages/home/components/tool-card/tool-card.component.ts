import { Component, OnInit, Input } from "@angular/core";
import { Tool } from "src/app/models/Tool.model";

@Component({
  selector: "app-tool-card",
  templateUrl: "./tool-card.component.html",
  styleUrls: ["./tool-card.component.scss"]
})
export class ToolCardComponent implements OnInit {
  @Input() toolData: Tool;

  constructor() {}

  ngOnInit() {
    console.log(this.toolData);
  }
}
