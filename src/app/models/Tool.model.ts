export class Tool {
  id?: Number;
  title: String;
  link: String;
  description: String;
  tags: String[];

  constructor(
    title: String,
    link: String,
    description: String,
    tags: String[],
    id?: Number
  ) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.description = description;
    this.tags = tags;
  }
}
