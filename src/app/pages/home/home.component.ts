import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { Tool } from "src/app/models/Tool.model";
import { VuttrApiService } from "src/app/services/vuttr-api.service";
import { MatDialog } from "@angular/material/dialog";
import { AddDialogComponent } from "./components/add-dialog/add-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  onlyTags: boolean = false;
  loading: boolean = true;

  constructor(private _vuttrApi: VuttrApiService, public dialog: MatDialog) {}

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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: "50%",
      height: "70%",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }
}
