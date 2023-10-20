export class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getProjectList() {
        return this.employees.map(e => e.getCurrentProject());
    }
    getNameList() {
        return this.employees.map(e => e.getName());
    }
}
//# sourceMappingURL=Company.js.map