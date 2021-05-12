class Objective {
    id: string;
    type: string;
    objectiveTitle: string;
    objectiveDesc: string;
    roadmap: string[][];
    deadline: Date;
    foundPartner: boolean;
    notifSchedule: string[];

    constructor(
        id: string,
        type: string,
        objectiveTitle: string,
        objectiveDesc: string,
        roadmap: string[][],
        deadline: Date,
        foundPartner: boolean,
        notifSchedule: string[]
    ) {
        this.id = id;
        this.type = type;
        this.objectiveTitle = objectiveTitle;
        this.objectiveDesc = objectiveDesc;
        this.roadmap = roadmap;
        this.deadline = deadline;
        this.foundPartner = foundPartner;
        this.notifSchedule = notifSchedule;
    }
}

export default Objective;