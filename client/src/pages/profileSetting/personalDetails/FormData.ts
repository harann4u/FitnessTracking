
export type FormData = {
    fullName: string | number | readonly string[] | undefined;
    email:string,
    password:string,
    phoneNumber:string,
    gender:string, // Gender is Pending
    experienceLevel:string, // Experience Leve is Pending
    age:number | null,
    height:number | null,
    currentWeight:number | null,
    goalWeight:number | null,
    activitylevel:string,
    perferredWorkoutTime:string,
    perferredworkoutType:string,
    primaryFitnessGoal : string,
};