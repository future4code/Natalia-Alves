export class Show {
    constructor(
        private id: string,
        private weekDay: WeekDay,
        private startTime: number,
        private endTime: number,
        private bandId: string
    ) { }

    getId() {
        return this.id
    }

    getWeekDay() {
        return this.weekDay
    }

    getStartTime() {
        return this.startTime
    }

    getEndTime() {
        return this.endTime
    }

    getBandId() {
        return this.bandId
    }

    setId(id: string) {
        this.id = id;
    }

    setWeekDay(weekDay: WeekDay) {
        this.weekDay = weekDay;
    }

    setStartTime(startTime: number) {
        this.startTime = startTime;
    }

    setEndTime(endTime: number) {
        this.endTime = endTime;
    }

    setBandId(bandId: string) {
        this.bandId = bandId;
    }

    static stringToShowWeekDay(input: string): WeekDay {
        switch (input) {
            case "FRIDAY":
                return WeekDay.FRIDAY;
            case "SATURDAY":
                return WeekDay.SATURDAY;
            case "SUNDAY":
                return WeekDay.SUNDAY;
            default:
                throw new Error("Invalid week day");
        }
    }

    static toShowModel(show: any): Show {
        return new Show(show.id, Show.stringToShowWeekDay(show.weekDay), show.startTime, show.endTime, show.bandId)
    }
}

export interface show{
    id: string,
    weekDay: WeekDay,
    startTime: number,
    endTime: number,
    bandId: string
}

export interface ShowInputDTO {
    weekDay: WeekDay,
    startTime: number,
    endTime: number,
    bandId: string
}

export enum WeekDay {
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}