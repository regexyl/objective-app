class SubObjective {
  id: string;
  subTitle: string;
  subDeadline: string;
  isCompleted: boolean;

  constructor(
    id: string,
    subTitle: string,
    subDeadline: string,
    isCompleted: boolean
  ) {
    this.id = id;
    this.subTitle = subTitle;
    this.subDeadline = subDeadline;
    this.isCompleted = isCompleted;
  }
}

export default SubObjective;
