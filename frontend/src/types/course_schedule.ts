import { TLab } from "./lab";

export type TCourseSchedule = {
    id: string; 
    day: string[];
    starttime: string;
    endtime: string;
    location?: string;
    instructor?: string;
    lab?: TLab[];
}