import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Tool } from "../models/Tool.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

var INIT_DATA = [];

if (environment.production == false) {
  INIT_DATA = [
    {
      id: 1,
      title: "Notion",
      link: "https://notion.so",
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
      tags: ["organization", "planning", "collaboration", "writing", "calendar"]
    },
    {
      id: 2,
      title: "json-server",
      link: "https://github.com/typicode/json-server",
      description:
        "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      tags: ["api", "json", "schema", "node", "github", "rest"]
    },
    {
      id: 3,
      title: "fastify",
      link: "https://www.fastify.io/",
      description:
        "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      tags: ["web", "framework", "node", "http2", "https", "localhost"]
    }
  ];
}

enum RoutesList {
  tools = "/tools",
  toolByTitle = "/tools?q=",
  toolsByTag = "/tools?tags_like=",
  deleteToolById = "/tools/"
}

const requestHeader = { "Content-Type": "application/json" };
const requestOptions = { headers: new HttpHeaders(requestHeader) };

@Injectable({
  providedIn: "root"
})
export class VuttrApiService {
  private toolsStore = new BehaviorSubject<Tool[]>(INIT_DATA);
  $tools: Observable<Tool[]> = this.toolsStore.asObservable();

  private loading = new BehaviorSubject<boolean>(true);
  $loading: Observable<boolean> = this.loading.asObservable();

  private error = new BehaviorSubject<Error>(new Error());
  $error: Observable<Error> = this.error.asObservable();

  constructor(private _httpClient: HttpClient) {}

  updateLoading(value: boolean) {
    this.loading.next(value);
  }

  updateError(error: Error) {
    this.error.next(error);
  }

  addBatchOfTools() {
    INIT_DATA.forEach((el: Tool) => {
      console.log(el);
      this.addTool(el);
    });
  }

  // *** Requests *** //
  getTools() {
    if (environment.production == false) {
      console.log("adding tools");
      this.addBatchOfTools();
    }
    this.updateLoading(true);
    this._httpClient
      .get(environment.baseApiUrl + RoutesList.tools, requestOptions)
      .subscribe((data: Tool[]) => {
        this.updateLoading(false);
        this.toolsStore.next(data);
      });
  }

  getToolByTitle(title: String) {
    this.updateLoading(true);

    this._httpClient
      .get(
        environment.baseApiUrl + RoutesList.toolByTitle + title,
        requestOptions
      )
      .subscribe(
        (data: Tool[]) => {
          this.updateLoading(false);
          this.toolsStore.next(data);
        },
        (error: Error) => {
          this.error.next(error);
        }
      );
  }

  getToolsByTag(tag: String) {
    this.updateLoading(true);
    this._httpClient
      .get(environment.baseApiUrl + RoutesList.toolsByTag + tag, requestOptions)
      .subscribe(
        (data: Tool[]) => {
          this.updateLoading(false);
          this.toolsStore.next(data);
        },
        (error: Error) => {
          this.error.next(error);
        }
      );
  }

  addTool(tool: Tool) {
    this.updateLoading(true);
    this._httpClient
      .post(environment.baseApiUrl + RoutesList.tools, tool)
      .subscribe(
        (data: Tool) => {
          this.updateLoading(false);
          this.getTools();
        },
        (error: Error) => {
          this.error.next(error);
        }
      );
  }

  deleteToolById(id: Number) {
    this.updateLoading(true);
    this._httpClient
      .delete(environment.baseApiUrl + RoutesList.tools + "/" + id)
      .subscribe(
        (data: Tool) => {
          this.updateLoading(false);
          this.getTools();
        },
        (error: Error) => {
          this.error.next(error);
        }
      );
  }
}
