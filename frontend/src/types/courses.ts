export type TCourse = {
    id: string;
    _id: string;
    subject: string;
    title: string; 
    brief?: string;
    description: string;
    professor?: string[];
}

export interface TaskDictionaries {
  taskDic: TaskDictionary[];
}

export interface TaskDictionary {
    [day: string]: Task[];
}

export interface Task {
    color?: string;
    id: string;
    classNumber: string;
    subject: string;
    title: string;
    startTime: string;  // Start time of the task
    endTime: string;    // End time of the task
    location?: string;
    instructor?: string;
}
  