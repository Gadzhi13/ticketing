export interface ITicket {
    priority?: number;
    impact?: number;
    requesttype?: string;
    submitdate?: Date;
    id?: string;
    title?: string;
    description?: string;
    status?: string;
    link?: string;
    product?: string;
    said?: number;
    modificationdate?: Date;
    statusnextstep?: string;
    solution?: string;
    solutiondescription?: string;
    changeid?: string;
    workflowstatus?: string;
    changenote?: string;
}