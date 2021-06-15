class SubObjective {
  id: string;
  subTitle: string;
  subDeadline: string;

  constructor(id: string, subTitle: string, subDeadline: string) {
    this.id = id;
    this.subTitle = subTitle;
    this.subDeadline = subDeadline;
  }
}

export default SubObjective;
