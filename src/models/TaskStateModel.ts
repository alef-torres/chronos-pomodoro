import type { taskModel } from "./TaskModels"

export type TaskStateModel = {
    tasks: taskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: taskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}