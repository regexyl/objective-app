class Objective {
  id: string;
  user: string;
  type: string;
  title: string;
  description: string;
  roadmap: string[][];
  deadline: Date;
  foundPartner: boolean;
  notifSchedule: string[];

  constructor(
    id: string,
    user: string,
    type: string,
    title: string,
    description: string,
    roadmap: string[][],
    deadline: Date,
    foundPartner: boolean,
    notifSchedule: string[]
  ) {
    this.id = id;
    this.user = user;
    this.type = type;
    this.title = title;
    this.description = description;
    this.roadmap = roadmap;
    this.deadline = deadline;
    this.foundPartner = foundPartner;
    this.notifSchedule = notifSchedule;
  }
}

export default Objective;
