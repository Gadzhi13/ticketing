import { ITicket } from './iticket';
import { promise } from 'protractor';

export class Ticket implements ITicket {
    public priority: number;
    public impact: number;
    public requesttype: string;
    public submitdate: Date;
    public id: string;
    public title: string;
    public description: string;
    public status: string;
    public link: string;
    public product: string;
    public said: number;
    public modificationdate: Date;
    public statusnextstep: string;
    public solution: string;
    public solutiondescription: string;
    public changeid: string;
    public workflowstatus: string;
    public changenote: string;

    constructor (
        priority?: number,
        impact?: number,
        requesttype?: string,
        submitdate?: Date,
        id?: string,
        title?: string,
        description?: string,
        status?: string,
        link?: string,
        product?: string,
        said?: number,
        modificationdate?: Date,
        statusnextstep?: string,
        solution?: string,
        solutiondescription?: string,
        changeid?: string,
        workflowstatus?: string,
        changenote?: string
    ) {
        this.priority = priority || null;
        this.impact = impact || null;
        this.requesttype = requesttype || null;
        this.submitdate = submitdate || null;
        this.id = id || null;
        this.title = title || null;
        this.description = description || null;
        this.status = status || null;
        this.link = link || null;
        this.product = product || null;
        this.said = said || null;
        this.modificationdate = modificationdate || new Date();
        this.statusnextstep = statusnextstep || null;
        this.solution = solution || null;
        this.solutiondescription = solutiondescription || null;
        this.changeid = changeid || null;
        this.workflowstatus = workflowstatus || null;
        this.changenote = changenote || null;
     }
}
