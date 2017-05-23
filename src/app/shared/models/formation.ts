export class Formation {
    id?: number;   //optionnel
    title: string;
    description?: string;   //optionnel

    public mapToFormation(model){
        this.id = model.id;
        this.title = model.title;
        this.description = model.description;
        return this;
    }

}
