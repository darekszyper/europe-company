import { Employee } from "./Employee.js";

export class Company {
    private employees: Employee[] = [];

    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    public getProjectList(): string[] {
        return this.employees.map(e => e.getCurrentProject());
    }

    public getNameList(): string[] {
        return this.employees.map(e => e.getName());
    }
}