export type TCourse = {
    id: string;
    _id: string;
    subject: string;
    title: string; 
    brief?: string;
    description: string;
    professor?: string[];
}

export interface TaskDictionary {
    [day: string]: Task[];
  }

export interface Task {
    color: string;
    startTime: string;  // Start time of the task
    endTime: string;    // End time of the task
  }
  