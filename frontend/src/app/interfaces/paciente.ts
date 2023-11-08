import { User } from "./user";

export interface Paciente extends User{
    id: string,
    age: number,
    curp: string,
    maritalStatus: string,
    occupation: string,
    state: string,
    municipality: string,
    locality: string,
    address: string,
    MedRecBackground: string,
    MedRecDiagnostic: string,
    MedRecNumber: number,
    MedRecPhyExam: string,
    MedRecResults: string,
    MedRecTreatment: string
}
