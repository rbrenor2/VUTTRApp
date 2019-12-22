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
  onlyTags: boolean = false;
  loading: boolean = true;

  constructor(private _vuttrApi: VuttrApiService) {}

  ngOnInit() {
    this._vuttrApi.$loading.subscribe(value => {
      this.loading = value;
    });
    this._vuttrApi.getTools();
  }

  onSearchChange(value: string) {
    // Check if search by tag is checked and request with appropriated route
    if (this.onlyTags) {
      this._vuttrApi.getToolsByTag(value);
    } else {
      this._vuttrApi.getToolByTitle(value);
    }
  }
}
