class SubObjective {
    subTitle: string;
    subDeadline: Date;
    
    constructor(subTitle: string, subDeadline: Date) {
        this.subTitle = subTitle;
        this.subDeadline = subDeadline;
    }
}

export default SubObjective;