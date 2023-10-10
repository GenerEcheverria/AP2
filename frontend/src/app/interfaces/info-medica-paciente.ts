export interface InfoMedicaPaciente {
    citas: Array<{ 
        idCita: number,
        date: string,
        time: string,
        summary: string,
        prescription: string
    }>,
    diario: Array<{ 
        idPage: number,
        text: string,
    }>
}
